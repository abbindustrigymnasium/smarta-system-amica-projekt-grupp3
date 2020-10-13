<template>
  <div>
    <div class="text-h1 text-center text-weight-medium q-pa-xl">
      Vad tyckte du om maten idag?
    </div>

      <div class="q-pa-md row">
        <q-slide-item v-for="(item, index) in todaysFood" :key="index" @top="onTop(item, index, ...arguments)" @bottom="onBottom(item, index, ...arguments)" top-color="red" bottom-color="green" class="col bg-grey-3 q-mx-sm" style="border-radius: 25px;">
            <template v-slot:top>
              <q-icon name="thumb_down" class="q-mt-sm" style="font-size: 2rem"/>
            </template>
            <template v-slot:bottom>
              <q-icon name="thumb_up" class="q-mb-sm" style="font-size: 2rem"/>
            </template>
            <q-item style="height: 220px">
              <q-item-section class="text-center text-bold" style="font-size: 17px">
                {{ item.food }}
              </q-item-section>
              <q-item-section avatar>
                <q-avatar color="bg" text-color="green" icon="thumb_up" style="font-size: 3rem;"/>
                <q-icon color="indigo" name="import_export" style="font-size: 3rem;"/>
                <q-avatar color="bg" text-color="red" icon="thumb_down" style="font-size: 3rem;"/>
              </q-item-section>
            </q-item>
          </q-slide-item>
      </div>

      <q-input outlined v-model="text" label="Kommentarer" style="position: fixed; bottom: 0; width: 100%;">
        <template v-slot:append>
          <q-icon name="close" @click="text=''" class="cursor-pointer"/>
        </template>

        <template v-slot:after>
            <q-btn round dense flat icon="send"  @click="sendComment(text)" size="lg" color="indigo"/>
          </template>
      </q-input>
  </div>
</template>

<script>
import { db, increment } from '../boot/firebase'
import axios from 'axios'

export default {
  name: 'PageIndex',
  methods: {
    onTop (item, index, { reset }) { // On dislike
      this.finalize(reset) // Resets the slide-item
      const ref = this // Needed to access data in .then(function ())
      const name = this.names[index]
      db.collection('testing').doc(this.names[index]).update('dislikes', increment)
        .then(function () {
          console.log('Updated todays data!')
          db.collection('weektest').doc(ref.todaysdate).update(`foodData.${name}.dislikes`, increment)
            .then(function () {
              console.log('Updated weekdata!')
            })
            .catch(function (error) {
              console.log('Error: ', error)
            })
        })
        .catch(function (error) {
          console.log('Error: ', error)
        })
    },

    onBottom (item, index, { reset }) { // On like
      this.finalize(reset)
      const ref = this
      const name = this.names[index]
      db.collection('testing').doc(this.names[index]).update('likes', increment)
        .then(function () {
          console.log('Updated todays data!')
          db.collection('weektest').doc(ref.todaysdate).update(`foodData.${name}.likes`, increment)
            .then(function () {
              console.log('Updated weekdata!')
            })
            .catch(function (error) {
              console.log('Error: ', error)
            })
        })
        .catch(function (error) {
          console.log('Error: ', error)
        })
    },

    sendComment (msg) {
      this.text = '' // Clears the input field
      db.collection('comments').add({ date: this.todaysdate, message: msg })
        .then(function () {
          console.log('Comment sent!')
        })
        .catch(function (error) {
          console.log('Error: ', error)
        })
    },

    finalize (reset) {
      this.timer = setTimeout(() => {
        reset()
      }, 1)
    },

    getDate () {
      var today = new Date()
      var dd = String(today.getDate())
      var mm = String(today.getMonth() + 1)
      var yyyy = today.getFullYear()
      today = yyyy + '-' + mm + '-' + dd
      return today
    }
  },
  beforeDestroy () {
    clearTimeout(this.timer)
  },
  data () {
    return {
      todaysdate: '',
      text: '',
      todaysFood: [], // Data from firestore for each dish
      dishes: [], // List of actual dishes
      names: [
        'food1',
        'food2',
        'food3',
        'food4'
      ]
    }
  },
  firestore: {
    todaysFood: db.collection('testing')
  },
  created () {
    const date = this.getDate() // Todays date
    console.log(date)
    this.todaysdate = date

    axios.get('https://cors-anywhere.herokuapp.com/' + 'https://foodandco.se/api/restaurant/menu/day?date=' + date + '&language=sv&restaurantPageId=188244')
      .then(response => {
        const lunchRawString = response.data.LunchMenu.Html.toLowerCase().split('&auml;').join('ä').split('&ouml;').join('ö').split('&aring;').join('å').split('<p>').join('').split('</p>').join('').split('&eacute;').join('é').split('<br />').join('')
        const lunchList = lunchRawString.split('\n')
        for (var i = 0; i < lunchList.length; i++) {
          this.dishes.push(lunchList[i][0].toUpperCase() + lunchList[i].substring(1))
        }
        console.log(this.dishes)

        db.collection('testing').doc('food1').get() // Date is the same in for all docs
          .then(snapshot => {
            const todaysdate = snapshot.data().date
            if (todaysdate !== date) { // Only set new values if data already in firebase is outdated, to prevent overwriting
              for (const i in this.dishes) {
                db.collection('testing').doc(this.names[i]).set({ food: this.dishes[i], quantity: 0, dislikes: 0, likes: 0, date: date })
                  .then(function () {
                    console.log('Set new data for today!')
                  })
                  .catch(function (error) {
                    console.log('Error: ', error)
                  })
              }
            } else {
              console.log('Already inserted data for today')
            }
          })

        db.collection('weektest').get()
          .then(querySnapshot => {
            const alldata = querySnapshot.docs.map(doc => doc.data())
            const latestdata = alldata[alldata.length - 1]
            if (latestdata.date !== date) { // Makes sure we do not overwrite data
              const fooddata = {
                food1: { food: this.dishes[0], quantity: 0, dislikes: 0, likes: 0 },
                food2: { food: this.dishes[1], quantity: 0, dislikes: 0, likes: 0 },
                food3: { food: this.dishes[2], quantity: 0, dislikes: 0, likes: 0 },
                food4: { food: this.dishes[3], quantity: 0, dislikes: 0, likes: 0 }
              }
              db.collection('weektest').doc(date).set({ date: date, foodData: fooddata })
                .then(function () {
                  console.log('Set new weekdata for today!')
                })
                .catch(function (error) {
                  console.log('Error: ', error)
                })
            } else {
              console.log('Already inserted weekdata for today')
            }
          })
      })
  }
}
</script>
