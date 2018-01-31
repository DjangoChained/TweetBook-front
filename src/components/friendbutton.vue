<template>
  <div class="frienditem">
      <p>{{ name }}</p>
      <button type="button" class="btn btn-secondary" v-on:click="is_friend = !is_friend"><i class="fa" v-bind:class="{ 'fa-plus': !is_friend, 'fa-times': is_friend }"></i></button>
  </div>
</template>

<script>
export default {
  name: 'friendbutton',
  props: ['name'],
  data: function () {
    return {
      is_friend: false
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
