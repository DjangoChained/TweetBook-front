<template>
  <form>
      <div class="form-row">
        <div class="col mb-2 mb-sm-0">
            <textarea class="form-control" placeholder="Qu'avez-vous en tête ?" v-model="content" v-on:keyup.enter="sendPost" required></textarea>
        </div>
        <div class="col-sm-2 align-self-center">
            <button type="button" class="btn btn-primary w-100" v-bind:disabled="content.length < 1" v-on:click="sendPost">Publier</button>
        </div>
      </div>
  </form>
</template>

<script>
import { sendText } from '@/services/post'
export default {
  name: 'textpostform',
  data: function () {
    return {
      content: ''
    }
  },
  methods: {
    sendPost: function () {
      this.$parent.setLoading(true)
      sendText(this.$data.content).then(response => {
        this.$data.content = ''
        this.$parent.setLoading(false)
      }, err =>
        this.$parent.showModal('Échec de la publication', err.message))
    }
  }
}
</script>

<style scoped>
button {
    text-transform: uppercase;
}
</style>
