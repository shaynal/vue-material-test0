<template>
  <div id="app" class="page-container">
    <!-- <md-app> -->
    <ava-fab />
    <!-- <ava-header /> -->
    <material-header :title="$t('welcome')" @click-menu="showNavigation = true" ></material-header>    
    <!-- <ava-sidemenu></ava-sidemenu> -->
    <material-sidemenu :title="$t('sideMenuTitle')" :items="sideMenuItems" :menu-toggle="showNavigation" @closed="showNavigation = false"></material-sidemenu>    

    <!-- <md-app-content> -->
      <main>
      <!-- <img src="./assets/logo.png" alt="Vue.js PWA"> -->
      <router-view></router-view>
      </main>
    <!-- </md-app-content> -->
    <!-- </md-app> -->
  </div>
</template>

<script>
import { NAV_SHOW } from './store/actions/app-shell'
// import AvaHeader from './components/AvaHeader'
import MaterialHeader from './components/material/MaterialHeader'
import MaterialSidemenu from './components/material/MaterialSidemenu'

export default {
  name: 'app',
  components: {
    // AvaHeader,
    MaterialHeader,
    // 'AvaSidemenu': () => import('./components/AvaSidemenu'),
    MaterialSidemenu,
    'AvaFab': () => import('./components/AvaFab')
  },
  data () {
    return {
      showNavigation: false,
      showSidepanel: false,
      sideMenuItems: [
        { link: '/inbox', icon: 'move_to_inbox', text: this.$t('Inbox') },
        { link: '/send', icon: 'send', text: this.$t('SentMail') },
        { link: '/delete', icon: 'delete', text: this.$t('Trash') },
        { link: '/spam', icon: 'error', text: this.$t('Spam') }
      ],
      systemLanguages: ['en', 'ru', 'es', 'it', 'de']
    }
  },
  methods: {
    toggleNav () {
      this.$store.dispatch(NAV_SHOW, true)
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  /* margin-top: 40px; */
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

  .md-app {
    min-height: 350px;
    border: 1px solid rgba(#000, .12);
  }

   
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>
