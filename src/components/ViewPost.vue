<template>
    <post :json="post" />
</template>

<script>
import post from '@/components/post'
import getUserRealName from '@/services/users'
import { doGet } from '@/services/api'
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
    doGet(this, 'post?id=' + this.$route.params['id'], result => {
      this.post = result
      getUserRealName(this.post.authorid).then(name => {
        this.post.authorname = name
      })
    })
  }
}
</script>
