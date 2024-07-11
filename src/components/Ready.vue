<template>
  <section class="ready">
    <div class="ready-wrap">
      <div class="ready-title">
        <p class="ready-title_text"><span>I</span>NTRODUCTION</p>
        <p v-if="lang === 'cn'" class="ready-title_small">學會簡介</p>
      </div>
      <div class="ready-content">
        <div>
          <p style="padding-right: 100px">{{ $t('ready.content') }}</p>
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
