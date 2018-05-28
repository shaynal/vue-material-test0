<template>
  <form novalidate class="md-layout md-alignment-center-center" @submit.prevent="login">
    <md-card>
      <md-card-header>
        <div class="md-title">{{ $t('login') }}</div>
      </md-card-header>

      <md-card-content>
          <md-field :class="getValidationClass('email')">
            <label for="email">{{ $t('email') }}</label>
            <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.email.required">{{ $t('emailErrRequired') }}</span>
            <span class="md-error" v-else-if="!$v.form.email.email">{{ $t('emailErrValid') }}</span>
          </md-field>
          <md-field :class="getValidationClass('password')">
            <label for="password">{{ $t('password') }}</label>
            <md-input type="password" name="password" id="password" autocomplete="password" v-model="form.password" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.password.required">{{ $t('passwordErrRequired') }}</span>
          </md-field>      
      </md-card-content>
      
      <md-progress-bar md-mode="indeterminate" v-if="sending" />
      
      <md-card-actions>
        <md-button type="submit" class="md-primary" :disabled="sending">{{ $t('login') }}</md-button>
        <md-button type="button" @click="switchTo('pwdForgot')">{{ $t('forgot_password') }}</md-button>
      </md-card-actions>
    </md-card>
  </form>
</template>

<script>
import { AUTH_REQUEST } from '../store/actions/auth'
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'Login',
  data () {
    return {
      sending: false,
      form: {
        email: 'testnewava@dd.com',
        password: 'Newpass1'
      }
    }
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  },
  methods: {
    getValidationClass (fieldName) {
      var field = this.$v.form[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },
    login () {
      this.sending = true
      this.$store.dispatch(AUTH_REQUEST, this.form).then(() => {
        this.sending = false
        this.$router.push('/my-account')
      })
    },
    switchTo (view) {}
  }
}
</script>
