<template>
  <q-page class='column flex-center'>
    <!-- <div v-if="foodData != null" v-for="(food, i) in foodData.foodData" :key="i" class='flex flex-center bg-secondary q-pa-md q-ma-md rounded-borders'>
      <h7 class='q-ma-none q-mr-md'>{{food.food}}</h7>
      <q-btn @click = "addfood(i)" round color='positive' icon='add' class='q-ma-sm' />
      <q-btn @click = "revfood(i)" round color='negative' icon='remove' class='q-ma-sm'/>
      <q-chip class='bg-white' style='font-size: 16px; font-weight:800'>{{food.quantity}}</q-chip>
    </div> -->
    <div class='column flex-center bg-accent q-pa-md q-ma-md rounded-borders' style="position: relative; width: 90%">
      <h7 class='q-ma-none q-mr-md text-white'>{{foodData.foodData.food1.food}}</h7>
      <div class="flex flex-center">
      <q-btn @click = "addfood('food1')" round color='positive' icon='add' class='q-ma-sm' />
      <q-btn @click = "revfood('food1')" round color='negative' icon='remove' class='q-ma-sm'/>
      <q-chip class='bg-white' style='font-size: 16px; font-weight:800'>{{foodData.foodData.food1.quantity}}</q-chip>
      </div>
    </div>
    <div class='column flex-center bg-accent q-pa-md q-ma-md rounded-borders' style="position: relative; width: 90%">
      <h7 class='q-ma-none q-mr-md text-white'>{{foodData.foodData.food2.food}}</h7>
      <div class="flex flex-center">
      <q-btn @click = "addfood('food2')" round color='positive' icon='add' class='q-ma-sm' />
      <q-btn @click = "revfood('food2')" round color='negative' icon='remove' class='q-ma-sm'/>
      <q-chip class='bg-white' style='font-size: 16px; font-weight:800'>{{foodData.foodData.food2.quantity}}</q-chip>
      </div>
    </div>
    <div class='column flex-center bg-accent q-pa-md q-ma-md rounded-borders' style="position: relative; width: 90%">
      <h7 class='q-ma-none q-mr-md text-white'>{{foodData.foodData.food3.food}}</h7>
      <div class="flex flex-center">
      <q-btn @click = "addfood('food3')" round color='positive' icon='add' class='q-ma-sm' />
      <q-btn @click = "revfood('food3')" round color='negative' icon='remove' class='q-ma-sm'/>
      <q-chip class='bg-white' style='font-size: 16px; font-weight:800'>{{foodData.foodData.food3.quantity}}</q-chip>
      </div>
    </div>
    <div class='column flex-center bg-accent q-pa-md q-ma-md rounded-borders' style="position: relative; width: 90%">
      <h7 class='q-ma-none q-mr-md text-white'>{{foodData.foodData.food4.food}}</h7>
      <div class="flex flex-center">
        <q-btn @click = "addfood('food4')" round color='positive' icon='add' class='q-ma-sm' />
        <q-btn @click = "revfood('food4')" round color='negative' icon='remove' class='q-ma-sm'/>
        <q-chip class='bg-white' style='font-size: 16px; font-weight:800'>{{foodData.foodData.food4.quantity}}</q-chip>
      </div>
    </div>
  </q-page>
</template>

<script>
import { db, increment, decrement } from '../boot/firebase'
import { date } from 'quasar'
export default {
  name: 'PageIndex',
  created() {
     this.currentDate = date.formatDate(Date.now(), 'YYYY-MM-DD')
     this.$bind('foodData', db.collection('weektest').doc(this.currentDate))
  },
  data () {
    return {
      currentDate: '',
      foodData: []
    }
  },
  methods: {
    addfood (value) {
      db.collection('weektest').doc(this.currentDate).update(`foodData.${value}.quantity`, increment)
    },
    revfood (value) {
      db.collection('weektest').doc(this.currentDate).update(`foodData.${value}.quantity`, decrement)
    }
  }
}

</script>
<style>
h7{font-size:18px}
</style>
