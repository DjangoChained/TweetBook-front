<template>
<div class="mb-3">
    <nav class="nav nav-pills mb-2">
        <button class="nav-item nav-link btn btn-link" v-bind:class="{'active': currentType === 'text' }" v-on:click="currentType = 'text'">Texte</button>
        <button class="nav-item nav-link btn btn-link" v-bind:class="{'active': currentType === 'photo' }" v-on:click="currentType = 'photo'">Photo</button>
        <button class="nav-item nav-link btn btn-link" v-bind:class="{'active': currentType === 'link' }" v-on:click="currentType = 'link'">Lien</button>
    </nav>
    <textpostform v-show="currentType === 'text'" />
    <linkpostform v-show="currentType === 'link'" />
</div>
</template>

<script>
import textpostform from '@/components/textpostform'
import linkpostform from '@/components/linkpostform'
export default {
  name: 'postform',
  data: function () {
    return {
      currentType: 'text'
    }
  },
  components: {
    textpostform,
    linkpostform
  }
}
</script>

<style scoped>
.btn-link {
    color: #446E9B;
    text-transform: uppercase;
}
</style>
