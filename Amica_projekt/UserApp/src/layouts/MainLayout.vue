<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered style='background: #ffff'>
      <q-toolbar >
        <q-toolbar-title style='color: black; font-weight: 800; font-size: 40px'>
          <q-avatar class="q-mb-sm q-pa-none">
            <img src="https://mb.cision.com/Public/12609/2739140/bcd11e7f17a1e50d_org.jpg">
          </q-avatar>
          Food & Co.
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  // components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false
      // essentialLinks: linksData
    }
  }
}
</script>
