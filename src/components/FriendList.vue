<template>
  <div class="container">
      <h2>Trouver de nouveaux amis</h2>
      <form class="form-inline mb-5">
        <div class="input-group w-100">
          <input type="text" class="form-control" placeholder="Entrez un nom" />
          <div class="input-group-append">
            <button class="btn btn-secondary" type="button">Rechercher</button>
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
  components: {
    friendbutton
  }
}
</script>
