<template>
  <div>
    <Workout/>
  </div>
</template>

<script>
import Workout from "../components/Workout.vue"

export default {
  name: 'bush',
  components: {
    Workout
  },
  data: function () {
    return {
      chara: "bush"
    }
  }
}
</script>