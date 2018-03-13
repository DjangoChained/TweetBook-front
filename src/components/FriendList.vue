<template>
  <div class="container">
      <h2>Trouver de nouveaux amis</h2>
      <form class="form-inline mb-5" v-on:submit.prevent>
        <div class="input-group w-100">
          <input type="text" class="form-control" placeholder="Entrez un nom" v-on:keyup.13="doSearch" v-model="searchText" style="height: 2.5em" />
          <div class="input-group-append">
            <button class="btn btn-secondary" type="button" style="height: 2.5em" v-on:click="doSearch" v-bind:disabled="$data.searchText.trim().length <= 0">Rechercher</button>
          </div>
        </div>
      </form>
      <h2>Mes amis</h2>
      <friendbutton v-for="friend in friends" :key="friend.id" :id="friend.id" :name="friend.name" is_friend="true"></friendbutton>
      <p v-show="friends.length < 1">Vous n'avez pas d'amis :(</p>
  </div>
</template>

<script>
import friendbutton from './friendbutton.vue'
import friends from '@/services/friends'
export default {
  name: 'FriendList',
  data: function () {
    return {
      searchText: '',
      friends: []
    }
  },
  components: {
    friendbutton
  },
  methods: {
    doSearch: function (event) {
      event.preventDefault()
      if (this.$data.searchText.trim().length) {
        this.$router.push({name: 'FriendSearch', params: { text: this.$data.searchText.trim() }})
      }
      return false
    }
  },
  mounted: function () {
    this.$parent.$data.loading = true
    friends.get().then(res => {
      this.$data.friends = res.friends
      this.$parent.$data.loading = false
    }, err => {
      this.$parent.$data.loading = false
      this.$parent.$data.modal_title = 'Erreur lors du chargement des amis'
      this.$parent.$data.modal_content = err.message
      this.$parent.$data.modal = true
      this.$router.back()
    })
  }
}
</script>
