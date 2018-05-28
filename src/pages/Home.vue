<template>
  <ava-auth-form></ava-auth-form>
</template>

<script>
export default {
  name: 'Home',
  components: {
    'AvaAuthForm': () => import('../components/AvaAuthForm')
  },
  data () {
    return {}
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>

