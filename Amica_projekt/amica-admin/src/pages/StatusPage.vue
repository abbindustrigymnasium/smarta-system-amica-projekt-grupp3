<template>
  <q-page class="column flex-center">
    <h3 class="q-ma-sm" style="font-weight: 800;">Weekly Stats</h3>
    <div class="q-pa-none" style="width: 100%;">
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        animated
        control-color="primary"
        class="rounded-borders"
      >
        <q-carousel-slide v-for="(day, i) in slicedData" :key="i" :name="i" class="column no-wrap flex-center" style="width: 100%">
          <q-markup-table class="bg-accent text-white" style="width: 100%">
            <thead>
              <tr>
                <th class="text-left">Rätter</th>
                <th class="text-right">Likes/Dislikes</th>
                <th class="text-right">Antal</th>
                <th class="text-right">Andel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-left">{{day.foodData.food1.food}}</td>
                <td class="text-right">{{Math.round(day.foodData.food1.likes/(day.foodData.food1.dislikes+day.foodData.food1.likes)*100)}}%</td>
                <td class="text-right">{{day.foodData.food1.quantity}}</td>
                <td class="text-right">{{Math.round(day.foodData.food1.quantity/(day.foodData.food1.quantity+day.foodData.food2.quantity+day.foodData.food3.quantity+day.foodData.food4.quantity)*100)}}%</td>
              </tr>
              <tr>
                <td class="text-left">{{day.foodData.food2.food}}</td>
                <td class="text-right">{{Math.round(day.foodData.food2.likes/(day.foodData.food2.dislikes+day.foodData.food2.likes)*100)}}%</td>
                <td class="text-right">{{day.foodData.food2.quantity}}</td>
                <td class="text-right">{{Math.round(day.foodData.food2.quantity/(day.foodData.food1.quantity+day.foodData.food2.quantity+day.foodData.food3.quantity+day.foodData.food4.quantity)*100)}}%</td>
              </tr>
              <tr>
                <td class="text-left">{{day.foodData.food3.food}}</td>
                <td class="text-right">{{Math.round(day.foodData.food3.likes/(day.foodData.food3.dislikes+day.foodData.food3.likes)*100)}}%</td>
                <td class="text-right">{{day.foodData.food3.quantity}}</td>
                <td class="text-right">{{Math.round(day.foodData.food3.quantity/(day.foodData.food1.quantity+day.foodData.food2.quantity+day.foodData.food3.quantity+day.foodData.food4.quantity)*100)}}%</td>
              </tr>
              <tr>
                <td class="text-left">{{day.foodData.food4.food}}</td>
                <td class="text-right">{{Math.round(day.foodData.food4.likes/(day.foodData.food4.dislikes+day.foodData.food4.likes)*100)}}%</td>
                <td class="text-right">{{day.foodData.food4.quantity}}</td>
                <td class="text-right">{{Math.round(day.foodData.food4.quantity/(day.foodData.food1.quantity+day.foodData.food2.quantity+day.foodData.food3.quantity+day.foodData.food4.quantity)*100)}}%</td>
              </tr>
            </tbody>
          </q-markup-table>
        </q-carousel-slide>
      </q-carousel>

      <div class="row justify-center">
        <q-btn-toggle
          v-model="slide"
          toggle-color="primary"
          unelevated
          :options="[
            { label: 'Dag 1', value: 0 },
            { label: 'Dag 2', value: 1 },
            { label: 'Dag 3', value: 2 },
            { label: 'Dag 4', value: 3 },
            { label: 'Dag 5', value: 4 }
          ]"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { db } from '../boot/firebase'
import { date } from 'quasar'

export default {
  name: 'Statuspage',
    created() {
    this.$bind('foodData', db.collection('weektest'))
  }, 
  data () {
    return {
      indexList: [1,2,3,4,5],
      slide: '1',
      foodData: []
    }
  },
  computed: {
    slicedData () {
      console.log(this.foodData)
      if(this.foodData.length > 5){
        console.log(this.foodData.slice(this.foodData.length-5, this.foodData.length))
        return this.foodData.slice(this.foodData.length-5, this.foodData.length)
      }
      else{return this.foodData}
      
    }
  }
}
</script>
