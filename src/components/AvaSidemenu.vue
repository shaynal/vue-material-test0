<template>
      <md-drawer :md-active.sync="showNavigation" @md-closed="showNavigation">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">MyAva</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>move_to_inbox</md-icon>
          <span class="md-list-item-text">Inbox</span>
        </md-list-item>

        <md-list-item>
          <md-icon>send</md-icon>
          <span class="md-list-item-text">Sent Mail</span>
        </md-list-item>

        <md-list-item>
          <md-icon>delete</md-icon>
          <span class="md-list-item-text">Trash</span>
        </md-list-item>

        <md-list-item>
          <md-icon>error</md-icon>
          <span class="md-list-item-text">Spam</span>
        </md-list-item>
      </md-list>
    </md-drawer>
</template>

<script>
import { mapGetters } from 'vuex'
import { NAV_SHOW } from '../store/actions/app-shell'

export default {
  name: 'AvaSidemenu',
  data () {
    return {
    }
  },
  computed: {
    showNavigation: {
      get () {
        return this.navigationShow
      },
      set (newValue) {
        this.$store.dispatch(NAV_SHOW, newValue)
      },
      ...mapGetters('navigationShow')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
