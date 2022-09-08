<template>
  <section class="reasons">
    <div class="reasons-body">
      <p class="reasons-body_title"><span>W</span>HY CHOOSE CGU?</p>
      <p v-if="lang === 'cn'" class="reasons-body_subscript">為什麼選擇長庚大學?</p>
      <div class="reasons-body-advantages">
        <div v-for="(advantages, index) in advantagesList" :key="index" :class="`reasons-body-advantages_box slide-${index}`">
          <div class="reasons-body-advantages_box-mask"></div>
          <img :src="require(`@/assets/image/${advantages.img}`)" alt="" width="100%" />
          <div class="reasons-body-advantages_box-text">
            <p>
              {{ advantages.title }}
              <span v-if="lang === 'cn'">{{ advantages.small }}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="reasons-body_button-more">
        <BorderButton />
      </div>
      <div class="reasons-body_alumni">
        <div v-for="(alumni, index) in alumniList" :key="index" class="reasons-body_alumni-box">
          <div>
            <p class="reasons-body_alumni-box_info">{{ alumni.info }}</p>
            <p class="reasons-body_alumni-box_name">{{ alumni.name }}<br />{{ alumni.dep }}</p>
          </div>
          <img :src="require(`@/assets/image/${alumni.img}`)" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BorderButton from '@/components/BorderButton.vue'

export default {
  name: 'ReasonsComponent',
  components: { BorderButton },
  computed: {
    lang() {
      return localStorage.getItem('lang')
    },
    advantagesList() {
      return [
        { title: this.$t('advantages.youth'), small: 'Sunshine youth', img: 'image-advantages_box1.png' },
        { title: this.$t('advantages.innovation'), small: 'Innovation & Creativity', img: 'image-advantages_box2.png' },
        { title: this.$t('advantages.innovation'), small: 'Interdisciplinary', img: 'image-advantages_box3.png' },
      ]
    },
    alumniList() {
      return [
        { info: this.$t('alumni.wongTaiHungContent'), name: this.$t('alumni.wongTaiHung'), dep: this.$t('alumni.department'), img: 'alumni_01.png' },
        { info: this.$t('alumni.wangXuanContent'), name: this.$t('alumni.wangXuan'), dep: this.$t('alumni.department'), img: 'alumni_02.png' },
      ]
    },
  },
  mounted() {
    window.addEventListener('scroll', this.getTransform)
  },
  methods: {
    getTransform() {
      const boxList = document.querySelectorAll('.reasons-body-advantages_box')
      const windowTop = window.scrollY
      const windowBottom = window.scrollY + window.innerHeight
      boxList.forEach((box) => {
        let boxSide = box.offsetTop + box.offsetHeight / 2
        if (boxSide < windowBottom && boxSide > windowTop) box.classList.add('active')
      })
    },
  },
}
</script>
