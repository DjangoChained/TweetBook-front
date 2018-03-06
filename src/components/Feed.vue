<template>
  <div>
    <postform />
    <activity v-for="activity in activities" :key="activity.id" :json="activity" />
  </div>
</template>

<script>
import postform from '@/components/postform'
import activity from '@/components/activity'
import { getFeed } from '@/services/post'
export default {
  name: 'Feed',
  data: function () {
    return {
      activities: []
    }
  },
  components: {
    activity,
    postform
  },
  mounted: function () {
    this.$parent.$data.loading = true
    getFeed().then(res => {
      this.$data.activities = res.activities
        .sort((a, b) => ~~(a.date < b.date))
        .map(act => { act.date = act.date.split('T', 2)[0]; return act })
      this.$parent.$data.loading = false
    }, err => {
      this.$parent.$data.loading = false
      this.$parent.$data.modal_title = 'Échec du chargement des publications'
      this.$parent.$data.modal_content = err.message
      this.$parent.$data.modal = true
    })
  }
}
</script>
