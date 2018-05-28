<template>
<md-drawer :md-active.sync="isOpen" :md-permanent="fixed">
      
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">{{ title }}</span>
      </md-toolbar>

      <md-list>
        <md-list-item v-for="route in routes" :key="route.title">
          <router-link :to="route" class="nav-link" active-class="active">
            <span class="md-list-item-text">{{ route.meta.title }}</span>
          </router-link>
        </md-list-item>

        <md-list-item v-for="item in items" :key="item.link">
          <md-icon>{{ item.icon }}</md-icon>
          <span class="md-list-item-text">{{ item.text }}</span>
        </md-list-item>
      </md-list>

    </md-drawer>
</template>

<script>
export default {
  name: 'MaterialSidemenu',
  props: {
    title: {
      type: String
    },
    fixed: {
      type: String,
      default: 'clipped'
    },
    menuToggle: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
    }
  },
  computed: {
    isOpen: {
      get () { return this.menuToggle },
      set (value) { !value && this.$emit('closed') }
    },
    routes () {
      var routes = []
      for (var i in this.$router.options.routes) {
        if (!this.$router.options.routes.hasOwnProperty(i)) {
          continue
        }
        var route = this.$router.options.routes[i]
        if (route.meta && route.meta.title) {
          routes.push(route)
        }
      }
      return routes
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
