Vue.config.devtools = true;

var app = new Vue ({

  el: '#root',
  data: {
    albums: [],
    newGenere: [],
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

    filtroGeneri: function () {
      for (var i = 0; i < this.albums.length; i++) {
        // console.log(this.albums[i].genre);
        if (this.newGenere.includes(this.albums[i].genre)) {
        } else {
          this.newGenere.push(this.albums[i].genre)
        }
      }
    } //Chiusura filtroGeneri

  } //Chiusura Methods

})//Chiusura Vue
