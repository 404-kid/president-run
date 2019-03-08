import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    president: [
      {name: 'Washington',
      workout: 'Chopping Logs',
      formalImage: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fparkmangenealogy.files.wordpress.com%2F2010%2F01%2Fgilbert-stuart-portrait-1796.jpg&f=1',
      difficulty: 5,
      workoutDescription: 'Build arm strength (and a nation) by chopping logs with President Washington',
      workoutGif:'https://media.giphy.com/media/JbjAX9pY1fLPi/giphy.gif'
      },
      {name: 'Lincoln',
      workout: 'Axe Twirl',
      formalImage: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fpsmag.com%2F.image%2Ft_share%2FMTI3NTgxNjM1NzcxMTU2NDkw%2Flincoln-portrait.jpg&f=1',
      difficulty: 3,
      workoutDescription: 'Heal a divided nation with the cleansing power of an axe',
      workoutGif: 'https://media.giphy.com/media/3ohzdCYtNjYwdfe8x2/giphy.gif'
      },
      {name: 'Bush',
      workout: 'Dodgeshoe',
      formalImage: 'https://radio.foxnews.com/wp-content/uploads/2012/05/5-31-G-W-Bush-Portrait.jpg',
      difficulty: 2,
      workoutDescription: 'You don\'t know wear that shoe has been. Don\'t let it hit your face.',
      workoutGif: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F2zGHg1dlsb25W%2Fgiphy.gif&f=1'
      },
      {name: 'Obama',
      workout: 'Basketball',
      formalImage: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fthefederalist.com%2Fwp-content%2Fuploads%2F2018%2F02%2FNPG-PA_NPG_18_55-1-998x725.jpg&f=1',
      difficulty: 4,
      workoutDescription: 'The Harvard professor takes you to school',
      workoutGif: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FiAAOVAE3qm7KM%2Fgiphy.gif&f=1'
      },
      {name: 'Trump',
      workout: 'Golf ab work out',
      formalImage: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2Faf%2Fb5%2F60%2Fafb5603aec5b0a8c940a549fef67e8ef.jpg&f=1',
      difficulty: 0,
      workoutDescription: 'Get some fresh air while you work on a fresh six pack on the green',
      workoutGif: 'https://media.giphy.com/media/mpfMDb6MB6EWQ/giphy.gif'
      },
      {name:'JFK',
      workout: 'Sailing & Swooning',
      formalImage: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fthefederalist.com%2Fwp-content%2Fuploads%2F2015%2F07%2FJohn_F_Kennedy_Official_Portrait-998x780.jpg&f=1',
      difficulty: 1,
      workoutDescription: 'Increase your heart rate under the sultry gaze of our Irish-est president',
      workoutGif: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FGDx4qy4uhSfK%2F200.gif&f=1'
      },
      {name: 'Teddy Roosevelt',
      workout: 'Animal wrestling',
      formalImage: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fmowryjournal.files.wordpress.com%2F2012%2F11%2Froosevelt-teddy-presidential-portrait.jpeg&f=1',
      difficulty: 4,
      workoutDescription: 'Build cardiovascular endurance while wrestling giant animals',
      workoutGif: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F11JCCxhNjW64O4%2Fsource.gif&f=1'
      },
      {name: 'Clinton',
      workout: 'Dance Dance',
      formalImage: 'https://cdn1.thr.com/sites/default/files/imagecache/portrait_300x450/2015/03/clinton_portrait.jpg',
      difficulty: 5,
      workoutDescription: 'Keep the party going while developing lower body strength, agility, and sic moves',
      workoutGif: 'https://media.giphy.com/media/Gtdk5XkG34d68/giphy.gif'
      }
     ]
  },
  mutations: {

  },
  actions: {

  }
})
