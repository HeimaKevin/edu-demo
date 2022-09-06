<template>
  <section class="ready">
    <div class="ready-wrap">
      <div class="ready-title">
        <p class="ready-title_text"><span>R</span>EADY to See CGU?</p>
        <p v-if="lang === 'cn'" class="ready-title_small">準備好了嗎?</p>
      </div>
      <div class="ready-content">
        <div>
          <p>以培育知識與德行兼備，能身體力行、終身學習、貢獻社會的人才為教育目標。歡迎來到長庚大學。</p>
        </div>
        <div>
          <div class="ready-content_arrow" />
          <p>READ MORE</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ReadyComponent',
  computed: {
    lang() {
      return localStorage.getItem('lang')
    },
  },
}
</script>
