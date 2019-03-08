<template>
  <div>
    <Workout :president="president"/>
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
      president: "Bush"
    }
  }
}
</script>