<template>
</template>

<script>
import auth from '@/services/auth'
export default {
  name: 'Logout',
  mounted: function () {
    this.$parent.$data.loading = true
    auth.logout().then(() => {
      this.$parent.$data.loading = false
      this.$parent.$data.currentuser = ''
      this.$router.push('/')
    }, err => {
      this.$parent.$data.loading = false
      this.$parent.$data.modal_title = 'Erreur de déconnexion'
      this.$parent.$data.modal_content = err.message
      this.$parent.$data.modal = true
      this.$router.back()
    })
  }
}
</script>
