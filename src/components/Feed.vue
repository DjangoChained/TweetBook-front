<template>
  <div>
    <postform />
    <textpost author="Jean-Bob Pouet" content="Test test" date="31 lolol 2017" />
    <reactionactivity author="Jean-Bob Pouet" post-id="42" post-author="Patrick Buisson" reaction="fist" date="31 février 2017" />
    <textpost author="Jean-Bob Pouet" content="Test test" date="31 lolol 2017" />
  </div>
</template>

<script>
import postform from '@/components/postform'
import reactionactivity from '@/components/reactionactivity'
import textpost from '@/components/textpost'
export default {
  name: 'Feed',
  components: {
    postform,
    reactionactivity,
    textpost
  }
}
</script>
