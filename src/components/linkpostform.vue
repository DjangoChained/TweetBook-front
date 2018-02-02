<template>
  <form>
      <div class="form-row">
        <div class="col-12 col-sm-10 mb-2 order-first">
          <textarea class="form-control" placeholder="Qu'avez-vous en tête ?" v-model="content" v-on:keyup.enter="sendPost" required></textarea>
        </div>
        <div class="col-12 col-sm-2 mb-0 mb-sm-2 order-last order-sm-2 align-self-center">
          <button type="button" class="btn btn-primary w-100" v-on:click="sendPost">Publier</button>
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
export default {
  name: 'textpostform',
  data: function () {
    return {
      content: '',
      url: '',
      title: ''
    }
  },
  methods: {
    sendPost: function () {
      // TODO: Envoi d'une publication lien
      this.$data.content = ''
    }
  }
}
</script>

<style scoped>
button {
    text-transform: uppercase;
}
</style>
