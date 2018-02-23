<template>
    <post :json="post" />
</template>

<script>
import post from '@/components/post'
import getUserRealName from '@/services/users'
import { checkError, guiError } from '@/services/api'
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
    this.$http.get('post?id=' + this.$route.params['id']).then(checkError, response => {
      guiError(this.$parent, response.statusText)
      this.$router.push('/404')
    }).then(response => {
      if (!response) return
      this.post = response.body.post
      getUserRealName(this.post.authorid).then(name => {
        this.post.authorname = name
        this.$parent.$data.loading = false
      })
    }, message => {
      guiError(this.$parent, message)
      this.$router.push('/404')
    })
  }
}
</script>
