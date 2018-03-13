<template>
  <form>
      <div class="form-row">
        <div class="col-12 col-sm-10 mb-2 order-first">
          <textarea class="form-control" placeholder="Qu'avez-vous en tête ?" v-model="content" v-on:keyup.enter="sendPost" required></textarea>
        </div>
        <div class="col-12 col-sm-2 mb-0 mb-sm-2 order-last order-sm-2 align-self-center">
          <button type="button" class="btn btn-primary w-100" v-bind:disabled="buttonDisabled" v-on:click="sendPost">Publier</button>
        </div>
        <div class="col-12 col-md-6 order-2 order-sm-3">
          <input type="url" class="form-control" placeholder="http://..." v-model="url" required />
        </div>
        <div class="col-12 col-md-6 mb-2 mb-sm-0 order-3 order-sm-4">
          <input type="text" class="form-control" placeholder="Titre du lien" v-model="title" required />
        </div>
      </div>
  </form>
</template>

<script>
import { sendLink } from '@/services/post'
export default {
  name: 'linkpostform',
  data: function () {
    return {
      content: '',
      url: '',
      title: ''
    }
  },
  computed: {
    buttonDisabled: function () {
      return this.$data.content.length < 1 ||
        this.$data.url.length < 1 ||
        this.$data.title.length < 1
    }
  },
  methods: {
    sendPost: function () {
      this.$parent.setLoading(true)
      sendLink(this.$data.content, this.$data.url, this.$data.title).then(response => {
        this.$data.content = ''
        this.$data.url = ''
        this.$data.title = ''
        this.$parent.setLoading(false)
        this.$parent.doRefresh()
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
