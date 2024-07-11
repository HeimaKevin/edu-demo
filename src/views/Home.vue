<template>
  <div>
    <Navbar />
    <Banner />
    <section class="explore">
      <div class="btn-list">
        <button type="button">{{ $t('explore.btn_01') }}</button>
        <button type="button">{{ $t('explore.btn_02') }}</button>
        <button type="button">{{ $t('explore.btn_03') }}</button>
      </div>
    </section>
    <Reasons />
    <Event />
    <Awards />
    <!-- <Feature /> -->
    <Video />
    <Ready />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/layout/Navbar.vue'
import Banner from '@/components/Banner.vue'
import Reasons from '@/components/Reasons.vue'
import Event from '@/components/Event.vue'
import Awards from '@/components/Awards.vue'
// import Feature from '@/components/Feature.vue'
import Video from '@/components/Video.vue'
import Ready from '@/components/Ready.vue'
import Footer from '@/layout/Footer.vue'

export default {
  name: 'HomePage',
  components: { Navbar, Banner, Reasons, Event, Awards, Ready, Video, Footer },
}
</script>
