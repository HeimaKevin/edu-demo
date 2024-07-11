<template>
  <div class="navbar">
    <div class="navbar-wrap">
      <a href="#">
        <img src="@/assets/image/img_headerLogo.png" alt="頭部圖標" />
      </a>
      <ul class="navbar-wrap-navigation">
        <li v-for="(item, i) in navList" :key="i">
          <a href="#">
            <span>{{ item.text }}</span>
          </a>
        </li>
        <li v-if="lang === 'cn'">
          <a href="#" @click.prevent="changeLang('en')">
            <span>English</span>
          </a>
        </li>
        <li v-else>
          <a href="#" @click.prevent="changeLang('cn')">
            <span>中</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NavbarLayout',
  computed: {
    ...mapState({
      lang: (state) => state.lang,
    }),
    navList() {
      return [
        { text: this.$t('navbar.nav_01') },
        { text: this.$t('navbar.nav_02') },
        { text: this.$t('navbar.nav_03') },
        { text: this.$t('navbar.nav_04') },
        { text: this.$t('navbar.nav_05') },
        { text: this.$t('navbar.nav_06') },
        { text: this.$t('navbar.nav_07') },
        { text: this.$t('navbar.nav_08') },
      ]
    },
  },
  methods: {
    changeLang(lang) {
      localStorage.setItem('lang', lang)
      this.$store.dispatch('setLang', lang)
      return history.go(0)
    },
  },
}
</script>
