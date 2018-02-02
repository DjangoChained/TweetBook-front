<template>
    <div class="container">
        <h2>Page introuvable</h2>
        <p>La page que vous tentez de consulter est introuvable.</p>
        <hr />
        <button class="btn btn-secondary" v-on:click="back">Page précédente</button>
    </div>
</template>

<script>
export default {
  name: 'NotFound',
  methods: {
    back: function () {
      window.history.back()
    }
  }
}
</script>
