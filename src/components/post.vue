<template>
    <div>
        <textpost :post="json" v-show="json.type === 'text'" />
        <imagepost :post="json" v-show="json.type === 'photo'" />
        <linkpost :post="json" v-show="json.type === 'link'" />
    </div>
</template>

<script>
import textpost from '@/components/textpost'
import imagepost from '@/components/imagepost'
import linkpost from '@/components/linkpost'
export default {
  name: 'post',
  props: ['json'],
  components: {
    textpost,
    imagepost,
    linkpost
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
