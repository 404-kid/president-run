<template>
  <div class="d-flex justify-content-center flex-column align-items-center">
    <img :src="chara.workoutGif" alt="presGif" class="gif">
    <h1>{{chara.workout}}</h1>
    <h5>{{chara.workoutDescription}}</h5>
  </div>
</template>

<script>

export default {
  name: 'workout',

  data: function () {
    return {
      chara: this.$route.params
    }
  },
}
</script>
<style scoped>
.gif{
  height: 30rem;
  width: 30rem;
}
</style>
