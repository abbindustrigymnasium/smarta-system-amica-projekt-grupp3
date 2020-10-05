<template>
  <q-page class="column flex-center">
    <div class="q-pa-md">
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        animated
        control-color="primary"
        class="rounded-borders"
      >
        <q-carousel-slide name="1" class="column no-wrap flex-center">
          <q-markup-table class="bg-accent text-white" style="width: 700px">
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
                <td class="text-left">Köttfärsås</td>
                <td class="text-right">60%</td>
                <td class="text-right">45</td>
                <td class="text-right">12%</td>
              </tr>
              <tr>
                <td class="text-left">Kyckling</td>
                <td class="text-right">23%</td>
                <td class="text-right">9</td>
                <td class="text-right">37%</td>
              </tr>
              <tr>
                <td class="text-left">Pasta</td>
                <td class="text-right">62%</td>
                <td class="text-right">16</td>
                <td class="text-right">23%</td>
              </tr>
              <tr>
                <td class="text-left">Hamburgare</td>
                <td class="text-right">22%</td>
                <td class="text-right">16</td>
                <td class="text-right">23%</td>
              </tr>
            </tbody>
          </q-markup-table>
        </q-carousel-slide>
        <q-carousel-slide name="2" class="column no-wrap flex-center">
          <q-markup-table class="bg-accent text-white" style="width: 700px">
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
                <td class="text-left">Köttfärsås</td>
                <td class="text-right">60%</td>
                <td class="text-right">45</td>
                <td class="text-right">12%</td>
              </tr>
              <tr>
                <td class="text-left">Kyckling</td>
                <td class="text-right">23%</td>
                <td class="text-right">9</td>
                <td class="text-right">37%</td>
              </tr>
              <tr>
                <td class="text-left">Pasta</td>
                <td class="text-right">62%</td>
                <td class="text-right">16</td>
                <td class="text-right">23%</td>
              </tr>
              <tr>
                <td class="text-left">Hamburgare</td>
                <td class="text-right">22%</td>
                <td class="text-right">16</td>
                <td class="text-right">23%</td>
              </tr>
            </tbody>
          </q-markup-table>
        </q-carousel-slide>
        <q-carousel-slide name="3" class="column no-wrap flex-center">
          <q-markup-table class="bg-accent text-white" style="width: 700px">
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
                <td class="text-left">Köttfärsås</td>
                <td class="text-right">60%</td>
                <td class="text-right">45</td>
                <td class="text-right">12%</td>
              </tr>
              <tr>
                <td class="text-left">Kyckling</td>
                <td class="text-right">23%</td>
                <td class="text-right">9</td>
                <td class="text-right">37%</td>
              </tr>
              <tr>
                <td class="text-left">Pasta</td>
                <td class="text-right">62%</td>
                <td class="text-right">16</td>
                <td class="text-right">23%</td>
              </tr>
              <tr>
                <td class="text-left">Hamburgare</td>
                <td class="text-right">22%</td>
                <td class="text-right">16</td>
                <td class="text-right">23%</td>
              </tr>
            </tbody>
          </q-markup-table>
        </q-carousel-slide>
        <q-carousel-slide name="4" class="column no-wrap flex-center">
          <q-markup-table class="bg-accent text-white" style="width: 700px">
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
                <td class="text-left">Köttfärsås</td>
                <td class="text-right">60%</td>
                <td class="text-right">45</td>
                <td class="text-right">12%</td>
              </tr>
              <tr>
                <td class="text-left">Kyckling</td>
                <td class="text-right">23%</td>
                <td class="text-right">9</td>
                <td class="text-right">37%</td>
              </tr>
              <tr>
                <td class="text-left">Pasta</td>
                <td class="text-right">62%</td>
                <td class="text-right">16</td>
                <td class="text-right">23%</td>
              </tr>
              <tr>
                <td class="text-left">Hamburgare</td>
                <td class="text-right">22%</td>
                <td class="text-right">16</td>
                <td class="text-right">23%</td>
              </tr>
            </tbody>
          </q-markup-table>
        </q-carousel-slide>
        <q-carousel-slide name="5" class="column no-wrap flex-center">
          <q-markup-table class="bg-accent text-white" style="width: 700px">
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
                <td class="text-left">Köttfärsås</td>
                <td class="text-right">60%</td>
                <td class="text-right">45</td>
                <td class="text-right">12%</td>
              </tr>
              <tr>
                <td class="text-left">Kyckling</td>
                <td class="text-right">23%</td>
                <td class="text-right">9</td>
                <td class="text-right">37%</td>
              </tr>
              <tr>
                <td class="text-left">Pasta</td>
                <td class="text-right">62%</td>
                <td class="text-right">16</td>
                <td class="text-right">23%</td>
              </tr>
              <tr>
                <td class="text-left">Hamburgare</td>
                <td class="text-right">22%</td>
                <td class="text-right">16</td>
                <td class="text-right">23%</td>
              </tr>
            </tbody>
          </q-markup-table>
        </q-carousel-slide>
      </q-carousel>

      <div class="row justify-center">
        <q-btn-toggle
          v-model="slide"
          :options="[
            { label: 1, value: '1' },
            { label: 2, value: '2' },
            { label: 3, value: '3' },
            { label: 4, value: '4' },
            { label: 5, value: '5' }
          ]"
        />
      </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'Statuspage',
  data () {
    return {
      slide: 1
    }
  }
}
</script>
