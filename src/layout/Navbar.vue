<template>
  <div class="navbar">
    <div class="navbar-wrap">
      <div class="navbar-wrap-identity">
        <p>{{ $t('navbar.identity') }}</p>
        <ul class="navbar-wrap-identity-list">
          <li v-for="identity in identityList" :key="identity.text">
            <img class="navbar-wrap-identity-list_imgIn" :src="require(`@/assets/image/${identity.imgIn}`)" alt="identity-icon" width="18px" />
            <img class="navbar-wrap-identity-list_imgOut" :src="require(`@/assets/image/${identity.imgOut}`)" alt="identity-icon" width="18px" />
            <p>{{ identity.text }}</p>
          </li>
        </ul>
      </div>
      <ul class="navbar-wrap-navigation">
        <li>
          <a href="#">
            <span>{{ $t('navbar.siteMap') }}</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>{{ $t('navbar.mobileApp') }}</span>
          </a>
        </li>
        <li>
          <a href="#" @click.prevent="changeLang('en')">
            <span>EN</span>
          </a>
        </li>
        <li>
          <a href="#" @click.prevent="changeLang('cn')">
            <span>繁</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarLayout',
  data: () => ({}),
  computed: {
    identityList() {
      return [
        { imgIn: 'icon-highSchool.png', imgOut: 'icon-highSchool_active.png', text: this.$t('navbar.highSchool') },
        { imgIn: 'icon-newStudent.png', imgOut: 'icon-newStudent_active.png', text: this.$t('navbar.newStudent') },
        { imgIn: 'icon-currentStudents.png', imgOut: 'icon-currentStudents_active.png', text: this.$t('navbar.currentStudents') },
        { imgIn: 'icon-teaching.png', imgOut: 'icon-teaching_active.png', text: this.$t('navbar.teaching') },
        { imgIn: 'icon-alumni.png', imgOut: 'icon-alumni_active.png', text: this.$t('navbar.alumni') },
        { imgIn: 'icon-mediaVisitors.png', imgOut: 'icon-mediaVisitors_active.png', text: this.$t('navbar.mediaVisitors') },
        { imgIn: 'icon-internationalStudents.png', imgOut: 'icon-internationalStudents_active.png', text: 'International Students' },
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
