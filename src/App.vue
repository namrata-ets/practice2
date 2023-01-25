<script setup>
import { ref } from 'vue'
import axios from 'axios'

var pname=ref('');
var trips=ref('');
var airlines=ref('');

const passData=ref(null);

async function fetchData() {
  // eslint-disable-next-line no-undef
 
 await axios.get(
    `http://api.instantwebtools.net/v1/passenger?page=0&size=10`, {crossDomain: true}
  ).then((response)=>passData.value=response.data )
  .catch(error=>console.log(error))
  
}

fetchData()

/*function addPassenger(){
  pname=pname.value;
  trips=trips.value;
  airlines=airlines.value;
  console.log("Passenger details received are: "+pname.value+trips.value+airlines.value);

}*/
</script>

<template>

  <form @submit.prevent>
    <h1>First Vue App</h1>
    <label>Passenger Name </label>
    <input v-model="pname" placeholder="Name"><br><br>
    <label>Trips </label>
    <input v-model="trips" placeholder="No. Of Trips"><br><br>
    <label>Airlines </label>
    <input v-model="airlines" placeholder="Airlines"><br><br>
    <button>Submit</button>
  </form>

</template>

<style>

</style>