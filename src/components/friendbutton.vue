<template>
  <div class="frienditem">
      <p>{{ name }}</p>
      <button type="button" class="btn btn-secondary" v-on:click="buttonClick"><i class="fa" v-bind:class="{ 'fa-plus': !friend, 'fa-times': friend }"></i></button>
  </div>
</template>

<script>
import friends from '@/services/friends'
export default {
  name: 'friendbutton',
  props: ['name', 'is_friend', 'id'],
  data: function () {
    return {
      friend: this.$props.is_friend
    }
  },
  methods: {
    buttonClick: function () {
      this.$parent.$parent.$data.loading = true
      if (!this.$data.friend) { // Ajout d'ami
        friends.add(this.$props.id).then(res => {
          this.$parent.$parent.$data.loading = false
          this.$data.friend = true
        }, err => {
          this.$parent.$parent.$data.loading = false
          this.$data.friend = false
          this.$parent.$parent.$data.modal_title = "Erreur lors de l'ajout d'un ami"
          this.$parent.$parent.$data.modal_content = err.message
          this.$parent.$parent.$data.modal = true
        })
      } else { // Retrait d'ami
        friends.remove(this.$props.id).then(res => {
          this.$parent.$parent.$data.loading = false
          this.$data.friend = false
        }, err => {
          this.$parent.$parent.$data.loading = false
          this.$data.friend = true
          this.$parent.$parent.$data.modal_title = "Erreur lors du retrait d'un ami"
          this.$parent.$parent.$data.modal_content = err.message
          this.$parent.$parent.$data.modal = true
        })
      }
    }
  }
}
</script>


<style scoped>
.frienditem {
    display: inline-block;
    width: 47%;
    margin: 0.5em 1%;
    min-height: 3em;
    min-width: 300px;
    position: relative;
    border-radius: 5px;
    border: 1px solid lightgray;
    padding: 1em;
}
@media(max-width: 650px) {
    .frienditem {
        width: 100%;
        margin: 0.5em 0;
    }
}
.frienditem p {
    margin: 0;
}
.frienditem button {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 3em;
}
</style>
