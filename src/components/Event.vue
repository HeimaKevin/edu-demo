<template>
  <section class="event-wrap">
    <div class="event">
      <div class="event-more">
        <div>
          <p class="event-more_title"><span>E</span>VENTS</p>
          <p v-if="lang === 'cn'" class="event-more_small">接下來的活動</p>
        </div>
        <BorderButton class="event-more_button" />
      </div>
      <ul class="event-list">
        <li class="event-list_item" v-for="item in eventList" :key="item.date">
          <img src="@/assets/image/icon-burger_arrow.png" alt="" />
          <div class="event-list_item-date">
            <p class="week">{{ item.week }}</p>
            <p class="date">{{ item.date }}</p>
            <p class="month">{{ item.month }}</p>
          </div>
          <p>{{ item.content }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import BorderButton from '@/components/BorderButton.vue'

export default {
  name: 'EventComponent',
  components: { BorderButton },
  computed: {
    lang() {
      return localStorage.getItem('lang')
    },
    eventList() {
      return [
        { month: 'AUG', week: 'Thu', date: '25', content: this.$t('eventList.content_01') },
        { month: 'AUG', week: 'Mon', date: '22', content: this.$t('eventList.content_02') },
        { month: 'AUG', week: 'Wed', date: '17', content: this.$t('eventList.content_03') },
        { month: 'AUG', week: 'Tue', date: '09', content: this.$t('eventList.content_04') },
      ]
    },
  },
}
</script>
