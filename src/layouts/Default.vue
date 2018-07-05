<template>
  <v-app>
    <Toolbar />
    <Sidebar />
    <v-content>
      <v-container fluid fill-height>
        <router-view />
      </v-container>
    </v-content>
    <v-footer fixed app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
    import Toolbar from '../components/Toolbar'
    import Sidebar from '../components/Sidebar'

    export default {
      components: {
        Toolbar,
        Sidebar
      }
    }
  </script>