<template>
    <post :json="post" />
</template>

<script>
import post from '@/components/post'
import getUserRealName from '@/services/users'
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
    this.$http.get('post?id=' + this.$route.params['id']).then(response => {
      if (response.body.status !== 'success') {
        console.log(response)
        this.$router.push('/404')
        return false
      }
      return response
    }, response => {
      console.log(response)
      this.$router.push('/404')
    }).then(response => response.body.post).then(post => {
      this.post = post
      getUserRealName(post.authorid).then(name => {
        this.post.authorname = name
      })
    })
  }
}
</script>
