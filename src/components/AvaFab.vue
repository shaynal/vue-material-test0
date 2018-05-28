<template>
  <md-speed-dial class="component ava-fab md-top-right md-fixed" md-direction="bottom" md-event="click">
      <md-speed-dial-target class="md-primary">
        <md-icon class="md-morph-initial">language</md-icon>
        <md-icon class="md-morph-final">close</md-icon>
      </md-speed-dial-target>

      <md-speed-dial-content>
        <md-button class="md-icon-button" v-for="lang in systemLanguages" :key="lang" @click="changeLang(lang)">
          <!-- <md-icon>directions</md-icon> -->
          {{lang}}
        </md-button>
      </md-speed-dial-content>
    </md-speed-dial>
</template>

<script>
import { mapGetters } from 'vuex'
import { SET_LANG } from '../store/actions/app-shell'

export default {
  name: 'AvaFab',
  props: {

  },
  computed: {
    ...mapGetters({
      systemLanguages: 'getSystemLanguages'
    })
  },
  methods: {
    changeLang (lang) {
      this.$store.dispatch(SET_LANG, { lang })
    }
  }
}
</script>

<style lang="scss" scoped>
.component.ava-fab {
  transform: translate(33px, -33px);
  z-index:999;
}
</style>
