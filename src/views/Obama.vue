<template>
  <div>
    <Workout president="bush"/>
  </div>
</template>

<script>
import Workout from "../components/Workout.vue"

export default {
  name: 'obama',
  components: {
    Workout
  },
  data: function () {
    return {
      chara: "obama"
    }
  }
}
</script>