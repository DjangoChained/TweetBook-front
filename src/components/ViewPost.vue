<template>
    <activity :json="post" />
</template>

<script>
import activity from '@/components/activity'
import { get } from '@/services/post'
export default {
  name: 'ViewPost',
  components: {
    activity
  },
  data: function () {
    return {
      post: {}
    }
  },
  mounted: function () {
    this.$parent.$data.loading = true
    get(this.$route.params['id']).then(result => {
      this.post = result.post
      this.$parent.$data.loading = false
    }, err => {
      this.$parent.$data.loading = false
      this.$parent.$data.modal_title = 'Erreur de récupération de la publication'
      this.$parent.$data.modal_content = err.message
      this.$parent.$data.modal = true
    })
  }
}
</script>
