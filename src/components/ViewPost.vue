<template>
    <post :json="post" />
</template>

<script>
import post from '@/components/post'
import { getUserRealName } from '@/services/users'
import { get } from '@/services/post'
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
    get(this.$route.params['id']).then(result => {
      this.post = result
      return getUserRealName(this.post.authorid)
    }).then(name => { this.post.authorname = name })
  }
}
</script>
