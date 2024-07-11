<template>
  <div class="banner">
    <div class="banner-img">
      <img src="@/assets/image/banner.jpg" alt="banner" width="100%" />
      <div class="banner-img_desc">2024 0501 FEIAP Opening Ceremony</div>
    </div>
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
        <img src="@/assets/image/img_search.svg" alt="banner-small-logo" width="32" />
        <p>search</p>
      </div>
    </section>
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
        { text: this.$t('banner.banner_01') },
        { text: this.$t('banner.banner_02') },
        { text: this.$t('banner.banner_03') },
        { text: this.$t('banner.banner_04') },
        { text: this.$t('banner.banner_05') },
        { text: this.$t('banner.banner_06') },
        { text: this.$t('banner.banner_07') },
      ]
    },
  },
}
</script>
