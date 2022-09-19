<template>
  <v-app>
    <v-app-bar
      app
      color="#c53131"
      dark
      clipped-left    
    >
    <v-app-bar-title>
      T-Minus
    </v-app-bar-title>
    </v-app-bar>

    <NavDrawer></NavDrawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

import NavDrawer from './components/NavDrawer.vue'

export default {
  name: 'App',

  components: {
    NavDrawer
},

  data: () => ({
    //
  }),
};
</script>
