<template>
<div class="d-flex justify-content-center flex-column align-items-center">
  <img src="../assets/download.gif" alt="test">
  <h1>{{this.$store.state.president[2].workout}}</h1>
  <h5>{{this.$store.state.president[2].workoutDescription}}</h5>
  <h3>difficulty rating {{this.$store.state.president[2].difficulty}}</h3>
</div>
</template>

<script>
export default {
  name: 'workout',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  height: 20rem;
  width: 20rem;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
