<template>
  <form>
      <div class="form-row">
        <div class="col-12 col-sm-10 mb-2 order-first">
          <input type="file" class="form-control form-control-sm mb-1" required disabled />
          <textarea class="form-control" placeholder="Qu'avez-vous en tête ?" v-model="content" v-on:keyup.enter="sendPost" required disabled></textarea>
        </div>
        <div class="col-12 col-sm-2 mb-0 mb-sm-2 align-self-center">
          <button type="button" class="btn btn-primary w-100" v-bind:disabled="content.length < 1" v-on:click="sendPost">Publier</button>
        </div>
      </div>
  </form>
</template>

<script>
export default {
  name: 'imagepostform',
  data: function () {
    return {
      content: '',
      url: '',
      title: ''
    }
  },
  methods: {
    sendPost: function () {
      // TODO: Envoi d'une publication image
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
