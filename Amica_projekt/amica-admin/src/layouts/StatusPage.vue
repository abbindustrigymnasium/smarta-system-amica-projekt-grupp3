<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered style="background: #ffff">
      <q-toolbar >

        <q-toolbar-title style="color: black; font-weight: 800; font-size: 40px">Food & Co.</q-toolbar-title>
        <q-btn flat style="color: #0c2461;" label="overveiw" class="q-ma-sm" to="/"/>
        <q-btn outline style="color: #0c2461" label="status" to="/statuspage"/>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default {
  name: 'Statuspage',
  data () {
    return {
      leftDrawerOpen: true,
      essentialLinks: linksData,
      statuspage: false
    }
  }
}
</script>
