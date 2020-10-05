<template>
  <div>
      <ul>
          <li v-for="(dish, index) in data" :key="index">
              {{dish.food}}
          </li>
      </ul>
  </div>
</template>

<script>
import { db } from '../boot/firebase'

export default {
  data () {
    return {
      data: []
    }
  },
  firestore: {
    data: db.collection('foodData')
  }
}
</script>
