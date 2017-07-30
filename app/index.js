import Vue from 'vue'
import App from './app.vue'

var app = new Vue({
  el: "#app-container",
  components: { App }
});

// web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
// decodedAddress = !{JSON.stringify(address)};
// ReviewContract = web3.eth.contract(!{abiDefinition});
// instance = ReviewContract.at(decodedAddress);
// clientAddress = web3.eth.accounts[0];

