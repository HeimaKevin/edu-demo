<template>
  <section class="feature">
    <div class="feature-body">
      <div>
        <p class="feature-body_title"><span>F</span>EATURE</p>
        <p v-if="lang === 'cn'" class="feature-body_subscript">發展重點與特色</p>
      </div>
      <ul class="feature-body_list">
        <li class="feature-body_item" v-for="(feature, index) in featureList" :key="index">
          <img class="feature-body_item-bg" src="@/assets/image/img_triangle.png" alt="" />
          <div class="feature-body_item-content">
            <img :src="require(`@/assets/image/${feature.img}`)" alt="" />
            <p>{{ feature.text }}</p>
          </div>
          <div class="feature-body_item-bar" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeatureComponent',
  computed: {
    lang() {
      return localStorage.getItem('lang')
    },
    featureList() {
      return [
        { text: this.$t('feature.development'), img: 'icon_development.png' },
        { text: this.$t('feature.teaching'), img: 'icon_teaching.png' },
        { text: this.$t('feature.research'), img: 'icon_research.png' },
        { text: this.$t('feature.features'), img: 'icon_features.png' },
      ]
    },
  },
}
</script>
