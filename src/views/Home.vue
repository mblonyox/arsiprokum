<template>
  <v-slide-y-transition mode="out-in">
    <v-parallax :src="photo">
      <v-layout
        align-center
        column
        justify-center
      >
        <h1>Arsip Biro Hukum</h1>
        <h4>Aplikasi untuk penanganan arsip pada Biro Hukum Kementerian Keuangan.</h4>
      </v-layout>
    </v-parallax>
  </v-slide-y-transition>
</template>

<script>
  import photo1 from '../assets/photos/documents-001.jpg'

  export default {
    computed: {
      photo: () => photo1
    }
  }
</script>
