<template>
  <div >
    <div class="d-flex justify-content-center flex-column align-items-center">
      <div class="card" style="width: 50vw;" v-for="president in presidents">
        <div class="card-body d-flex justify-content-center align-items-center flex-column">
          <h5 class="card-title">{{president.name}}</h5>
          <img url="../assets/51A6f2WHP9L._SX425_.jpg" class="card-img-top"  alt="President">
          <p class="card-text">{{president.difficulty}}</p>
          <router-link :to=president.link class="btn btn-primary">Do the workout</router-link>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {

  },
  data: function () {
    return {
    presidents: [
      { 
        name: "Washington",
        link: "/washington",
        difficulty: "extreme"
      },
      {
        name: "Lincon",
        link: "/lincon",
        difficulty: "hardy"
      },
      {
        name: "Bush.Jr",
        link: "/bush",
        difficulty: "novice"
      },
      {
        name: "Obama",
        link: "/obama",
        difficulty: "No cake walk"
      }
    ]
    }
  }
}
</script>
