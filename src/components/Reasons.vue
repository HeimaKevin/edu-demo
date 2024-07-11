<template>
  <section class="reasons">
    <div class="reasons-body">
      <p class="reasons-body_title"><span>H</span>ONOR ROLL</p>
      <p v-if="lang === 'cn'" class="reasons-body_subscript">榮譽榜</p>
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
      <section>
        <div class="reasons-body_alumni">
          <button
            v-for="(alumni, index) in alumniList"
            :key="index"
            :class="['reasons-body_alumni-btn', { active: btn_active === index }]"
            @click.prevent="btn_active = index"
          >
            {{ alumni.text }}
          </button>
        </div>
        <ul class="reasons-body_news">
          <li v-for="(news, i) in newsList" :key="i">
            <span>{{ news.date }}</span>
            <span>{{ news.content }}</span>
          </li>
        </ul>
        <div class="reasons-body_button-more">
          <BorderButton />
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import BorderButton from '@/components/BorderButton.vue'

export default {
  name: 'ReasonsComponent',
  components: { BorderButton },
  data: () => ({
    btn_active: 0,
    newsList: [
      { date: '2024/07/08', content: 'WFEO第57期電子報出刊,歡迎前往瀏覽。' },
      { date: '2024/06/28', content: '「2024 WFEO GREE Women in Engineering Award」推薦至8月31日止' },
      { date: '2024/06/25', content: '113年中國工程師學會學生分會工程論文競賽得獎名單' },
      { date: '2024/06/24', content: '第74屆會員代表大會代表當選名單公告' },
      { date: '2024/06/13', content: '賀！CIE通過亞太及國際工程師協議之國際稽核，延續6年正會員資格' },
      { date: '2024/06/07', content: '賴總統清德接見並嘉勉本學會113年得獎人' },
    ],
  }),
  computed: {
    lang() {
      return localStorage.getItem('lang')
    },
    advantagesList() {
      return [
        { title: this.$t('advantages.title_01'), small: 'Distinguished Engineering Professor', img: 'image-advantages_box1.png' },
        { title: this.$t('advantages.title_02'), small: 'Distinguished Engineer', img: 'image-advantages_box2.png' },
        { title: this.$t('advantages.title_03'), small: 'Outstanding Young Engineer', img: 'image-advantages_box3.png' },
      ]
    },
    alumniList() {
      return [{ text: this.$t('alumni.btn_01') }, { text: this.$t('alumni.btn_02') }, { text: this.$t('alumni.btn_03') }]
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
