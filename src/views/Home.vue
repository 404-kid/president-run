<template>
  <div >
    <div class="d-flex justify-content-center flex-column align-items-center">
      <div class="card" style="width: 50vw;" v-for="president in this.$store.state.presidents">
        <div class="card-body d-flex justify-content-center align-items-center flex-column">
          <h5 class="card-title">{{president.name}}</h5>
          <img :src=president.formalImage class="card-img-top"  alt="President">
          <p class="card-text">Difficulty Rating: {{president.difficulty}}</p>
          <router-link :to="{ name: 'workout', params: president }" class="btn btn-primary">Do the workout</router-link>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
}
</script>
