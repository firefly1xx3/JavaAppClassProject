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
        Home
      </v-list-item>
      <v-list-item>
        Settings
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

    <v-main>
      <CalendarBase/>
    </v-main>
  </v-app>
</template>

<script>
import CalendarBase from './components/CalendarBase';

export default {
  name: 'App',

  components: {
    CalendarBase,
  },

  data: () => ({
    //
  }),
};
</script>
