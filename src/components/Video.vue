<template>
  <section class="video">
    <div class="video-style" />
    <div class="video-wrap">
      <div class="video-wrap_body">
        <div class="video-wrap_body-title">
          <p class="video-wrap_body-title_text"><span>V</span>IDEO</p>
          <p v-if="lang === 'cn'" class="video-wrap_body-title_small">影音線上看</p>
        </div>
        <ul class="video-wrap_list">
          <li class="video-wrap_list-item" v-for="(video, index) in videoList" :key="index">
            <img :class="['video-wrap_list-item-image', { active: index === 1 }]" :src="video.image" alt="video-image" width="550px" />
            <img class="video-wrap_list-item-start" src="@/assets/image/icon_start.png" alt="" />
          </li>
        </ul>
        <div class="video-wrap_control">
          <img src="@/assets/image/icon_arrow-left.png" alt="arrow-left" />
          <BorderButton class="video-wrap_control-button" />
          <img src="@/assets/image/icon_arrow-right.png" alt="arrow-right" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BorderButton from '@/components/BorderButton.vue'

export default {
  name: 'VideoComponent',
  components: { BorderButton },
  data: () => ({
    videoList: [
      { image: require('@/assets/image/img_video_01.jpg') },
      { image: require('@/assets/image/img_video_02.png') },
      { image: require('@/assets/image/img_video_03.jpg') },
    ],
  }),
  computed: {
    lang() {
      return localStorage.getItem('lang')
    },
  },
}
</script>
