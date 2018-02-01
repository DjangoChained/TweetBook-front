<template>
  <div class="container">
      <h2>Trouver de nouveaux amis</h2>
      <form class="form-inline mb-5">
        <div class="input-group w-100">
          <input type="text" class="form-control" placeholder="Entrez un nom" v-on:keyup.13="doSearch" v-model="searchText" style="height: 2.5em" />
          <div class="input-group-append">
            <button class="btn btn-secondary" type="button" style="height: 2.5em" v-on:click="doSearch" v-bind:disabled="$data.searchText.trim().length <= 0">Rechercher</button>
          </div>
        </div>
      </form>
      <h2>Mes amis</h2>
      <friendbutton name="Ami 1"></friendbutton>
      <friendbutton name="Ami 2"></friendbutton>
      <friendbutton name="Ami 3"></friendbutton>
  </div>
</template>

<script>
import friendbutton from './friendbutton.vue'
export default {
  name: 'FriendList',
  data: function () {
    return {
      searchText: ''
    }
  },
  components: {
    friendbutton
  },
  methods: {
    doSearch: function (event) {
      if (this.$data.searchText.trim().length) {
        this.$router.push({name: 'FriendSearch', params: { text: this.$data.searchText.trim() }})
      }
    }
  }
}
</script>
