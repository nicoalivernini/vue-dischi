// Attravero una chiamata AJAX avere a disposizione una decina di dischi musicali.
// https://flynn.boolean.careers/exercises/api/array/music
// BONUS
// Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
// BONUS 2
// Ordinare i dischi per anno di uscita

Vue.config.devtools = true;

var app = new Vue ({

  el: '#root',
  data: {
    albums: [],
    selezioneGenere: '',
  },//Chiusura Data

  mounted() {
    //Chiamata per data albums
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then((response) => {
      this.albums = (response.data.response)
    });
  }, //Chiusura Mounted

  methods: {

    ordinaAnno: function () {
      for (var i = 0; i < this.albums.length; i++) {
        console.log(this.albums[i].year);
        var years = this.albums[i].year
      }

      console.log(ordina());

    },

    ordina: function () {
      years.sort(function(a, b) {return a - b});
    }

  } //Chiusura Methods

})//Chiusura Vue
