<template>
  <div class="banner">
    <!-- <img class="banner-img" src="@/assets/image/banner.png" alt="banner" width="100%" /> -->
    <video class="banner-video" autoplay muted loop src="@/assets/video/info.mp4"></video>
    <section class="banner-video_title">
      <img src="@/assets/image/banner-logo.png" alt="banner-big-logo" />
      <img src="@/assets/image/banner-name.png" alt="banner-name" />
      <p>Launch your future at CGU</p>
    </section>
    <section class="banner-navList">
      <div class="banner-navList_menu" @click.prevent="showMenu = !showMenu">
        <img src="@/assets/image/banner-menu.png" alt="banner-menu" width="50%" />
        <ul v-if="showMenu">
          <li v-for="item in burgerMenu" :key="item.text">
            <a href="#">
              <img src="@/assets/image/icon-burger_arrow.png" alt="burger_arrow" />
              <p>{{ item.text }}</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="banner-navList_logo">
        <div style="padding: 0 12px">
          <img src="@/assets/image/banner-logo.png" alt="banner-small-logo" width="100%" />
        </div>
      </div>
    </section>
    <!-- <section class="banner-ranking">
      <span class="banner-ranking_title">TOPICS</span>
      <p class="banner-ranking_date">2022-08-18</p>
      <p class="banner-ranking_details">2022-23 {{ $t('banner.ranking') }}</p>
    </section> -->
  </div>
</template>

<script>
export default {
  name: 'BannerComponent',
  data: () => ({
    showMenu: false,
  }),
  computed: {
    burgerMenu() {
      return [
        { text: this.$t('banner.campusInfo') },
        { text: this.$t('banner.teaching') },
        { text: this.$t('banner.administrative') },
        { text: this.$t('banner.admissionsInfo') },
        { text: this.$t('banner.library') },
        { text: this.$t('banner.corporateMuseum') },
        { text: this.$t('banner.internationalOffice') },
      ]
    },
  },
}
</script>
