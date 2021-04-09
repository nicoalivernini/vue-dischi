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
      this.albums.sort((a, b) => (a.year > b.year) ? 1 : -1);
      console.log(this.albums.sort((a, b) => (a.year > b.year) ? 1 : -1));

    }, //Chiusura ordinaAnno

  } //Chiusura Methods

})//Chiusura Vue
