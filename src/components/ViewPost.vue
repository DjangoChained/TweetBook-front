<template>
    <post :json="post" />
</template>

<script>
import post from '@/components/post'
export default {
  name: 'ViewPost',
  components: {
    post
  },
  data: function () {
    return {
      post: {}
    }
  },
  mounted: function () {
    this.$parent.$data.loading = true
    this.$http.get('Post?id=' + this.$route.params['id']).then(response => {
      this.$parent.$data.loading = false
      this.post = response.body.data
    }, response => {
      console.log(response)
      this.$router.push('/404')
    })
  }
}
</script>
