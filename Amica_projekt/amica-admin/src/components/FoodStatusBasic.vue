<template>
<q-page class="column flex-center">
  <h3>Daily Stats</h3>
  <div class="flex flex-center">
    <div class="column flex-center q-ma-lg">
      <q-circular-progress
          show-value
          class="text-indigo-10 q-ma-md"
          :value="foodData.food1.votes"
          size="100px"
          color="indigo-10"
          track-color="grey-4"
          :max="(foodData.food1.votes + foodData.food2.votes + foodData.food3.votes + foodData.food4.votes)"
        />
        <q-title style="font-size: 30px">{{foodData.food1.food}}</q-title>
    </div>
    <div class="column flex-center q-ma-lg">
      <q-circular-progress
          show-value
          class="text-indigo-10 q-ma-md"
          :value="foodData.food2.votes"
          size="100px"
          color="indigo-10"
          track-color="grey-4"
          :max="(foodData.food1.votes + foodData.food2.votes + foodData.food3.votes + foodData.food4.votes)"
        />
        <q-title style="font-size: 30px">{{foodData.food2.food}}</q-title>
    </div>
    <div class="column flex-center q-ma-lg">
      <q-circular-progress
          show-value
          class="text-indigo-10 q-ma-md"
          :value="foodData.food3.votes"
          size="100px"
          color="indigo-10"
          track-color="grey-4"
          :max="(foodData.food1.votes + foodData.food2.votes + foodData.food3.votes + foodData.food4.votes)"
        />
        <q-title style="font-size: 30px">{{foodData.food3.food}}</q-title>
    </div>
    <div class="column flex-center q-ma-lg">
      <q-circular-progress
          show-value
          class="text-indigo-10 q-ma-md"
          :value="foodData.food4.votes"
          size="100px"
          color="indigo-10"
          track-color="grey-4"
          :max="(foodData.food1.votes + foodData.food2.votes + foodData.food3.votes + foodData.food4.votes)"
        />
        <q-title style="font-size: 30px">{{foodData.food4.food}}</q-title>
    </div>
  </div>
  <div>
    <h5><span>Total Votes: </span><span class="text-indigo-10" style="font-weight: 600;" > {{(foodData.food1.votes + foodData.food2.votes + foodData.food3.votes + foodData.food4.votes) }}</span></h5>
  </div>
</q-page>
</template>

<script>

export default {
  data () {
    return {
      votes: {
        likes: 70,
        dislikes: 39
      },
      foodData: {
        food1: { votes: 59, food: 'Köttfärsås' },
        food2: { votes: 79, food: 'Pannkaka' },
        food3: { votes: 49, food: 'Kyckling' },
        food4: { votes: 19, food: 'Humburgare' }
      }
    }
  }
}
</script>
