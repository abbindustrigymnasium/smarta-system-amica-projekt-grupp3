<template>
  <q-page class="flex flex-center">
    <q-table
      title="Treats"
      :data="data"
      :columns="columns"
      row-key="name"
    />
  </q-page>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Maträtter',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'votes', align: 'center', label: 'Votes', field: 'votes', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
      data: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        }
      ]
    }
  }
}
</script>
