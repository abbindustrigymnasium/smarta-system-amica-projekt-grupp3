<template>
<q-page class="column flex-center">
  <h3 class="q-ma-md">Daily Stats</h3>
  <div class="flex flex-center">
    <div class="column flex-center q-ma-lg">
      <p style="font-size: 25px">{{foodData[0].food}}</p>
      <q-circular-progress
          show-value
          class="text-black q-ma-md"
          :value="foodData[0].likes"
          size="100px"
          color="positive"
          track-color="red"
          :max="(foodData[0].likes + foodData[0].dislikes)"
        />
        <p style="font-size: 20px">Antal: {{foodData[0].quantity}}</p>
    </div>
    <div class="column flex-center q-ma-lg">
      <p style="font-size: 25px">{{foodData[1].food}}</p>
      <q-circular-progress
          show-value
          class="text-black q-ma-md"
          :value="foodData[1].likes"
          size="100px"
          color="positive"
          track-color="red"
          :max="(foodData[1].likes + foodData[1].dislikes)"
        />
        <p style="font-size: 20px">Antal: {{foodData[1].quantity}}</p>
    </div>
    <div class="column flex-center q-ma-lg">
      <p style="font-size: 25px">{{foodData[2].food}}</p>
      <q-circular-progress
          show-value
          class="text-black q-ma-md"
          :value="foodData[2].likes"
          size="100px"
          color="positive"
          track-color="red"
          :max="(foodData[2].likes + foodData[2].dislikes)"
        />
        <p style="font-size: 20px">Antal: {{foodData[2].quantity}}</p>
    </div>
    <div class="column flex-center q-ma-lg">
      <p style="font-size: 25px">{{foodData[3].food}}</p>
      <q-circular-progress
          show-value
          class="text-black q-ma-md"
          :value="foodData[3].likes"
          size="100px"
          color="positive"
          track-color="red"
          :max="(foodData[3].likes + foodData[3].dislikes)"
        />
        <p style="font-size: 20px">Antal: {{foodData[3].quantity}}</p>
    </div>
  </div>
  <h6 class="q-ma-md text-indigo-8"> <span class="text-black">Total: </span>{{foodData[0].quantity+foodData[1].quantity+foodData[2].quantity+foodData[3].quantity}}</h6>
</q-page>
</template>

<script>
import { db } from '../boot/firebase'
import Vue from 'vue'
import VueApexCharts from 'vue-apexcharts'

Vue.component('apexchart', VueApexCharts)

export default {
  data () {
    return {
      foodData: []
    }
  },
  firestore: {
    foodData: db.collection('foodData')
  }
}
</script>
