<template>
  <div>
    <Navbar />
    <Banner />
    <section class="explore">
      <button type="button">{{ $t('explore.visitCampus') }}</button>
      <button type="button">{{ $t('explore.admissionsInfo') }}</button>
      <button type="button">{{ $t('explore.exploreProfession') }}</button>
    </section>
    <Reasons />
    <Event />
    <Awards />
    <Feature />
    <Ready />
  </div>
</template>

<script>
import Navbar from '@/layout/Navbar.vue'
import Banner from '@/components/Banner.vue'
import Reasons from '@/components/Reasons.vue'
import Event from '@/components/Event.vue'
import Awards from '@/components/Awards.vue'
import Feature from '@/components/Feature.vue'
import Ready from '@/components/Ready.vue'

export default {
  name: 'HomePage',
  components: { Navbar, Banner, Reasons, Event, Awards, Feature, Ready },
}
</script>
