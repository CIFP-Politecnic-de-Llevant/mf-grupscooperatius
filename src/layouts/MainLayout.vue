<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="toggleLeftDrawer"
      />

      <q-toolbar-title>
        GestSuite - Grups Cooperatius
      </q-toolbar-title>

        <Menuapp v-if="enableApps && (rolsUser.find(rol=>rol===rols.ADMINISTRADOR || rol===rols.DIRECTOR || rol===rols.CAP_ESTUDIS || rol===rols.ADMINISTRATIU || rol===rols.WEB))"></Menuapp>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item clickable to="/llistat">
          <q-item-section avatar>
            <q-icon name="diversity_3" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Grups cooperatius</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/mescla">
          <q-item-section avatar>
            <q-icon name="blender" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Mescla</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/items">
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Ítems</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/logout">
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Sortir</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent,ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import {Rol} from '../model/Rol.ts'
import Menuapp from '../components/common/AppsMenu';


export default defineComponent({
  name: 'MainLayout',
  components:{
    Menuapp
  },
  setup () {
    const leftDrawerOpen = ref(false)
    const rolsUser = JSON.parse(localStorage.getItem("rol")) || []; //Inicialitzem a un array buit si no existeix cap rol
    const router = useRouter()
    const route = useRoute()
    const rols = Rol;

    const enableGrupsCooperatius = (process.env.APP_ENABLE_GRUPSCOOPERATIUS==='true');
    const enableConvalidacions=(process.env.APP_ENABLE_CONVALIDACIONS==='true');
    const enableProfessoratManager=(process.env.APP_ENABLE_PROFESSORATMANAGER==='true');

    const enableApps = enableGrupsCooperatius || enableConvalidacions || enableProfessoratManager;

    return {
      rolsUser,
      rols,
      enableApps,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      goBack(){
        router.go(-1);
      }
    }
  }
})
</script>

