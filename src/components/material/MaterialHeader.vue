<template>
  <md-toolbar class="md-primary">
    <md-button class="md-icon-button" @click="$emit('click-menu')">
      <md-icon>menu</md-icon>
    </md-button>
    <span class="md-title">{{ title }}</span>

    <div class="md-toolbar-section-end">
      <!-- <md-button @click="showSidepanel = true">Favorites</md-button> -->
    </div>
  </md-toolbar>
</template>

<script>
export default {
  name: 'MaterialHeader',
  props: {
    title: {
      type: String
    }
    // menuToggle: {
    //   type: Boolean,
    //   default: false
    // },
    // sidepanelToggle: {
    //   type: Boolean,
    //   default: false
    // }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
