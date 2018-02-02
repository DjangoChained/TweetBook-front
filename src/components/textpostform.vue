<template>
  <form>
      <div class="form-row">
        <div class="col mb-2 mb-sm-0">
            <textarea class="form-control" placeholder="Qu'avez-vous en tête ?" v-model="content" v-on:keyup.enter="sendPost" required></textarea>
        </div>
        <div class="col-sm-2 align-self-center">
            <button type="button" class="btn btn-primary w-100" v-on:click="sendPost">Publier</button>
        </div>
      </div>
  </form>
</template>

<script>
export default {
  name: 'textpostform',
  data: function () {
    return {
      content: ''
    }
  },
  methods: {
    sendPost: function () {
      // TODO: Envoi d'une publication texte
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
