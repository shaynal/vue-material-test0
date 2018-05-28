<template>
  <md-card>
      <md-card-header>
        <div class="md-title">{{ $t('MyAccount') }}</div>
      </md-card-header>

      <md-card-content>
        {{ demoAccounts }}
        <hr />
        {{ realAccounts }}
      </md-card-content>

      <md-card-actions></md-card-actions>
  </md-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MyAccount',
  computed: {
    demoAccounts () {
      return this.getUserAccounts.filter(acc => !acc.isReal)
    },
    realAccounts () {
      return this.getUserAccounts.filter(acc => acc.isReal)
    },
    ...mapGetters(['getUserAccounts'])
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
