<template>
  <div class="container">
    <h1>Recherche de « {{ $route.params.text }} »</h1>
    <friendbutton v-for="human in results" :key="human.id" :id="human.id" :name="human.name"></friendbutton>
    <p v-show="results.length < 1">La recherche n'a donné aucun résultat.</p>
  </div>
</template>

<script>
import friendbutton from './friendbutton.vue'
import friends from '@/services/friends'
export default {
  name: 'FriendSearch',
  components: {
    friendbutton
  },
  data: function () {
    return {
      results: []
    }
  },
  mounted: function () {
    this.$parent.$data.loading = true
    friends.search(this.$route.params.text).then(res => {
      this.$data.results = res.results
      this.$parent.$data.loading = false
    }, err => {
      this.$parent.$data.loading = false
      this.$parent.$data.modal_title = 'Échec de la recherche'
      this.$parent.$data.modal_content = err.message
      this.$parent.$data.modal = true
      this.$router.back()
    })
  }
}
</script>
