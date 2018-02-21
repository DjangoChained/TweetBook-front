<template>
    <div class="post">
        <div class="post-content">
            <div class="content">
                <p class="header"><span class="name">{{ post.authorname }}</span> <em>{{ post.date }}</em></p>
                <p>{{ post.content }}</p>
            </div>
            <div class="btn-group-vertical">
                <button type="button" class="btn btn-success" v-bind:class="{ active: reaction == 'like' }" v-on:click="reaction = (reaction == 'like' ? '' : 'like')"><i class="fa fa-thumbs-up"></i></button>
                <button type="button" class="btn btn-danger" v-bind:class="{active: reaction == 'dislike' }" v-on:click="reaction = (reaction == 'dislike' ? '' : 'dislike')"><i class="fa fa-thumbs-down"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'textpost',
  props: ['post'],
  data: function () {
    return {
      reaction: ''
    }
  }
}
</script>

<style scoped>
p {
    margin-bottom: 0.5em;
}
p.header {
    font-size: 90%;
}
span.name {
    color: #446E9B;
    font-weight: bold;
}
.post {
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-bottom: 2em;
}
.post-content {
    position: relative;
    width: 100%;
    padding: 1em;
    padding-right: 4em;
    min-height: 6em;
}
.btn-group-vertical {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 3em;
}
.btn-group-vertical button {
    min-height: 3em;
    height: 50%;
}
</style>

