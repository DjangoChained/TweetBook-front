<template>
  <div class="container">
    <h1>Recherche de « {{ $route.params.text }} »</h1>
    <friendbutton name="Ami 1"></friendbutton>
    <friendbutton name="Ami 2"></friendbutton>
    <friendbutton name="Ami 3"></friendbutton>
  </div>
</template>

<script>
import friendbutton from './friendbutton.vue'
export default {
  name: 'FriendSearch',
  components: {
    friendbutton
  }
}
</script>
