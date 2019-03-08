<template>
  <div>
    <Workout :president="president"/>
  </div>
</template>

<script>
import Workout from "../components/Workout.vue"

export default {
  name: 'lincon',
  components: {
    Workout
  },
  data: function () {
    return {
      president: "Lincon"
    }
  }
}
</script>