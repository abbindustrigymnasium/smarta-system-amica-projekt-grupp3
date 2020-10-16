<template>
<q-page class="column flex-center">
  <h3 class="q-ma-lg" style="font-weight: 800;">Daily Stats</h3>
  <div class="flex flex-center">
    <div class="column flex-center q-ma-lg">
      <p style="font-size: 18px; width: 150px; height: 150px; text-align: center; font-weight: 500;">{{foodData.foodData.food1.food}}</p>
      <q-circular-progress
          show-value
          class="text-black q-ma-md"
          :value="foodData.foodData.food1.likes"
          size="200px"
          color="positive"
          track-color="red"
          :max="(foodData.foodData.food1.likes + foodData.foodData.food1.dislikes)"
        >
        {{foodData.foodData.food1.dislikes}} / {{foodData.foodData.food1.likes}}
      </q-circular-progress>
        <p style="font-size: 20px">Antal: {{foodData.foodData.food1.quantity}}</p>
    </div>
    <div class="column flex-center q-ma-lg">
      <p style="font-size: 18px; width: 150px; height: 150px; text-align: center; font-weight: 500;">{{foodData.foodData.food2.food}}</p>
      <q-circular-progress
          show-value
          class="text-black q-ma-md"
          :value="foodData.foodData.food2.likes"
          size="200px"
          color="positive"
          track-color="red"
          :max="(foodData.foodData.food2.likes + foodData.foodData.food2.dislikes)"
        >
        {{foodData.foodData.food2.dislikes}} / {{foodData.foodData.food2.likes}}
      </q-circular-progress>
        <p style="font-size: 20px">Antal: {{foodData.foodData.food2.quantity}}</p>
    </div>
    <div class="column flex-center q-ma-lg">
      <p style="font-size: 18px; width: 150px; height: 150px; text-align: center; font-weight: 500;">{{foodData.foodData.food3.food}}</p>
      <q-circular-progress
          show-value
          class="text-black q-ma-md"
          :value="foodData.foodData.food3.likes"
          size="200px"
          color="positive"
          track-color="red"
          :max="(foodData.foodData.food3.likes + foodData.foodData.food3.dislikes)"
        >
        {{foodData.foodData.food3.dislikes}} / {{foodData.foodData.food3.likes}}
      </q-circular-progress>
        <p style="font-size: 20px">Antal: {{foodData.foodData.food3.quantity}}</p>
    </div>
    <div class="column flex-center q-ma-lg">
      <p style="font-size: 18px; width: 150px; height: 150px; text-align: center; font-weight: 500;">{{foodData.foodData.food4.food}}</p>
      <q-circular-progress
          show-value
          class="text-black q-ma-md"
          :value="foodData.foodData.food4.likes"
          size="200px"
          color="positive"
          track-color="red"
          :max="(foodData.foodData.food4.likes + foodData.foodData.food4.dislikes)"
        >
        {{foodData.foodData.food4.dislikes}} / {{foodData.foodData.food4.likes}}
      </q-circular-progress>
        <p style="font-size: 20px">Antal: {{foodData.foodData.food4.quantity}}</p>
    </div>
  </div>
</q-page>
</template>

<script>
import { db } from '../boot/firebase'
import { date } from 'quasar'

export default {
  created() {
    this.currentDate = date.formatDate(Date.now(), 'YYYY-MM-DD')
    this.$bind('foodData', db.collection('weektest').doc(this.currentDate))
  },
  data () {
    return {
      foodData: [],
    }
  }
}
</script>
