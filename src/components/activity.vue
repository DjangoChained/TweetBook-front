<template>
    <div>
        <post :json="json" v-show="['text', 'photo', 'link'].includes(json.type)" />
        <friendactivity :json="json" v-show="json.type === 'friend'" />
        <reactionactivity :json="json" v-show="['like', 'dislike', 'reaction'].includes(json.type)" />
    </div>
</template>

<script>
import post from '@/components/post'
import friendactivity from '@/components/friendactivity'
import reactionactivity from '@/components/reactionactivity'
export default {
  name: 'activity',
  props: ['json'],
  components: {
    post,
    friendactivity,
    reactionactivity
  },
  methods: {
    showModal: function (title, content) {
      this.setLoading(false)
      this.$parent.$parent.$data.modal = true
      this.$parent.$parent.$data.modal_title = title
      this.$parent.$parent.$data.modal_content = content
    },
    setLoading: function (value) { this.$parent.$parent.$data.loading = value }
  }
}
</script>
