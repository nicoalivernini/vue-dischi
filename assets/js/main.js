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
    generi: [],
  },//Chiusura Data

  mounted() {
    //Chiamata per data albums
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then((response) => {
      this.albums = (response.data.response)
    });

    //Chiamata per data generi
    //for (var i = 0; i < 10; i++) {
      // axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      // .then((response) => {
      //   //this.generi = (response.data.response[i].genre)
      //   console.log(response.data.response[3].genre);
      // });
    //}

  }, //Chiurusa Mounted

})//Chiusura Vue
