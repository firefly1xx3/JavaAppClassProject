<template>
  <v-app>
    <v-app-bar
      app
      color="#c53131"
      dark
      clipped-right    
    >
    <v-app-bar-title>
      T-Minus
    </v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer
      absolute
      permanent
      right
      app
      clipped
    >
    <v-list>
      <v-list-item>
        MY ACCOUNT
      </v-list-item>
      <v-list-item>
        <router-link to="/">Home</router-link>
      </v-list-item>
      <v-list-item>
        <router-link to="/settings">Settings</router-link>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    //
},

  data: () => ({
    //
  }),
};
</script>
