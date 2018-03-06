<template>
    <div class="activity">
        <div class="fa fa-user-plus"></div> <strong>{{ json.authorname }}</strong> est devenu ami avec <strong>{{ json.othername }}</strong> <em>{{ json.date }}</em>
    </div>
</template>

<script>
export default {
  name: 'friendactivity',
  props: ['json']
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
