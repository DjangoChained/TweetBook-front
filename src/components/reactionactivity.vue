<template>
    <div class="activity">
        <div class="fa" v-bind:class="reactionIcons"></div> <strong>{{ author }}</strong> {{ reactionLabels[reaction] }} <a v-bind:href="'#/post/'+postId"><strong>une publication</strong></a> de <strong>{{ postAuthor }}</strong> <em>{{ date }}</em>
    </div>
</template>

<script>
export default {
  name: 'reactionactivity',
  props: ['author', 'postId', 'postAuthor', 'reaction', 'date'],
  data: function () {
    return {
      reactionLabels: {
        'like': 'a aimé',
        'dislike': "n'a pas aimé"
      },
      reactionIcons: {
        'fa-thumbs-up': this.$props.reaction === 'like',
        'fa-thumbs-down': this.$props.reaction === 'dislike'
      }
    }
  }
}
</script>

<style scoped>
.activity {
    margin-left: 1em;
    margin-bottom: 2em;
}
.fa {
    font-size: 1.7em;
    margin-right: 0.5em;
    width: 1.4em;
    text-align: center;
    border-radius: 100px;
    border: 5px solid lightgray;
    color: #446E9B;
}
</style>
