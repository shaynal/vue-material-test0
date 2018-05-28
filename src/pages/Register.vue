<template>
  
    <md-card>
      <md-card-header>
        <div class="md-title">{{ $t('registration') }}</div>
      </md-card-header>

      <md-card-content>
        <md-steppers :md-active-step.sync="activeStep" md-sync-route md-dynamic-height md-linear>
          <md-step v-for="step in steps" :key="step.id" 
            :id="`step${step.id}`" 
            :to="`/register/${step.id}`" 
            :md-label="step.title"
            :md-done.sync="step.done"
            :md-error="step.error"
            :md-editable="!step.noedit" >
          <form novalidate class="md-layout1 md-alignment-center-center1" @submit.prevent="register(step)">
            <ul>
              <li v-for="category in step.data" :key="category.id">
                <h3>{{category.title}}</h3>
                {{ category.questions }}
              </li>
            </ul>
            <md-button class="md-raised md-primary" type="submit">Continue</md-button>
          </form>
          </md-step>
        </md-steppers> 
      </md-card-content>

      <md-card-actions>
        
      </md-card-actions>
    </md-card>
  
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      activeStep: this.$route.step || 1,
      steps: [
        { id: 1,
          title: 'step1',
          noedit: true,
          done: false,
          error: null,
          data: [
            { id: 11,
              title: 'personal Information',
              questions: [111, 112]
            }
          ]
        },
        { id: 2,
          title: 'step2',
          done: false,
          error: null,
          data: [
            { id: 21,
              title: 'additional Info',
              questions: [2]
            }
          ]
        },
        { id: 3,
          title: 'step3',
          done: false,
          error: null,
          data: [
            { id: 31,
              title: 'terms and conditions',
              questions: [3]
            }
          ]
        }
      ]
    }
  },
  methods: {
    setDone (from, to) {
      from.done = true
      from.error = null

      let next = this.steps.filter(item => item.id === from.id + 1).shift()
      if (next) {
        next.error = ''
        this.$router.push('/register/' + next.id)
      } else {
        alert('you finished registration!')
      }
    },
    setError (from) {
      from.error = `step${from.id} error!`
    },
    register (step) {
      if (step.id < 3) {
        this.setDone(step)
      } else {
        this.setError(step)
      }
    }
  }
}
</script>
