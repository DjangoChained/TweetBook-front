<template>
    <textpost author="Bob" content="Ceci est une publication" date="32 janvier 2042" />
</template>

<script>
import textpost from '@/components/textpost'
import imagepost from '@/components/imagepost'
import linkpost from '@/components/linkpost'
export default {
  name: 'ViewPost',
  components: {
    textpost,
    imagepost,
    linkpost
  }
}
</script>
