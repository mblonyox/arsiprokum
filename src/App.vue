<template>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      drawer: true,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      title: 'Arsip Biro Hukum'
    }
  }
}
</script>
