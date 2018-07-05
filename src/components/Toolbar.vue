<template>
  <v-toolbar clipped-left app>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title v-text="title"></v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'Toolbar'
  }
</script>