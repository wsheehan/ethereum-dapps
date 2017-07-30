import Vue from 'vue'
import App from './components/app.vue'
import MoviePreview from './components/movie-preview.vue'

var app = new Vue({
  el: "#app-container",
  components: { App }
});

var moviePreview = new Vue({
  el: ".movies-container",
  components: { MoviePreview },
  data: {
    movies: [
      { 
        title: "Interstellar",
        image: 'http://theredlist.com/media/database/films/cinema/2010/interstellar/016-interstellar-theredlist.png',
        link: 'http://www.imdb.com/title/tt0816692/' 
      }
    ]
  }
})

// web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
// decodedAddress = !{JSON.stringify(address)};
// ReviewContract = web3.eth.contract(!{abiDefinition});
// instance = ReviewContract.at(decodedAddress);
// clientAddress = web3.eth.accounts[0];

