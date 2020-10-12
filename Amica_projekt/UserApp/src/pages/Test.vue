<template>
  <div>
      <ul>
          <li v-for="(name, index) in names" :key="index">
              {{ name.food }}
          </li>
      </ul>
  </div>
</template>

<script>
import { db } from '../boot/firebase'

export default {
  data () {
    return {
      names: []
    }
  },

  firestore: {
    names: db.collection('foodData')
  }
}
</script>

<style>

</style>
