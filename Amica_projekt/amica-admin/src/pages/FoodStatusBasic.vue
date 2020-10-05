<template>
<q-page class="column flex-center">
  <h3>Daily Stats</h3>
  <div class="flex flex-center">
    <div class="column flex-center q-ma-lg">
      <q-title style="font-size: 25px">{{foodData.food1.food}}</q-title>
      <q-circular-progress
          show-value
          class="text-black q-ma-md"
          :value="foodData.food1.likes"
          size="100px"
          color="positive"
          track-color="red"
          :max="(foodData.food1.likes + foodData.food1.dislikes)"
        />
        <q-title style="font-size: 20px">Antal: {{foodData.food1.antal}}</q-title>
    </div>
    <div class="column flex-center q-ma-lg">
      <q-title style="font-size: 25px">{{foodData.food2.food}}</q-title>
      <q-circular-progress
          show-value
          class="text-black q-ma-md"
          :value="foodData.food2.likes"
          size="100px"
          color="positive"
          track-color="red"
          :max="(foodData.food2.likes + foodData.food2.dislikes)"
        />
        <q-title style="font-size: 20px">Antal: {{foodData.food2.antal}}</q-title>
    </div>
    <div class="column flex-center q-ma-lg">
      <q-title style="font-size: 25px">{{foodData.food3.food}}</q-title>
      <q-circular-progress
          show-value
          class="text-black q-ma-md"
          :value="foodData.food3.likes"
          size="100px"
          color="positive"
          track-color="red"
          :max="(foodData.food3.likes + foodData.food3.dislikes)"
        />
        <q-title style="font-size: 20px">Antal: {{foodData.food3.antal}}</q-title>
    </div>
    <div class="column flex-center q-ma-lg">
      <q-title style="font-size: 25px">{{foodData.food4.food}}</q-title>
      <q-circular-progress
          show-value
          class="text-black q-ma-md"
          :value="foodData.food4.likes"
          size="100px"
          color="positive"
          track-color="red"
          :max="(foodData.food4.likes + foodData.food4.dislikes)"
        />
        <q-title style="font-size: 20px">Antal: {{foodData.food4.antal}}</q-title>
    </div>
  </div>
  <h4 class="q-mb-sm">Antal Total</h4>
  <h6 class="q-ma-none text-indigo-8">{{foodData.food1.antal+foodData.food2.antal+foodData.food3.antal+foodData.food4.antal}}</h6>
  <div class="q-ma-md">
    <apexchart type="bar" height="400" width="600" :options="options" :series="series"></apexchart>
  </div>
</q-page>
</template>

<script>
import Vue from 'vue'
import VueApexCharts from 'vue-apexcharts'

Vue.component('apexchart', VueApexCharts)

export default {
  data () {
    return {
      votes: {
        likes: 70,
        dislikes: 39
      },
      foodData: {
        food1: { antal: 59, food: 'Köttfärsås', likes: 90, dislikes: 32 },
        food2: { antal: 79, food: 'Pannkaka', likes: 54, dislikes: 54 },
        food3: { antal: 49, food: 'Kyckling', likes: 87, dislikes: 12 },
        food4: { antal: 19, food: 'Humburgare', likes: 12, dislikes: 98 }
      },
      options: {
        chart: {
          id: 'dagens-rätter'
        },
        xaxis: {
          categories: ['Köttfärsås', 'Pannkaka', 'Kyckling', 'Humburgare']
        },
        colors: ['#273c75']
      },
      series: [{
        name: 'Dagens Rätter',
        data: [40, 45, 51, 49]
      }]
    }
  },
  mounted () {
    console.log("MOUNTED");
    
  }
}
</script>
