<template>
  <ul class="awards">
    <li
      v-for="(award, index) in awardList"
      :key="index"
      :class="[`award award-img-${index}`, index === 2 ? 'award-open' : 'award-mask']"
      @click.prevent="Expand($event, award)"
    >
      <p :class="{ 'award-content': index === 2 }">{{ award.content }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AwardsComponent',
  computed: {
    awardList() {
      return [
        { content: this.$t('awardList.content_01'), status: false },
        { content: this.$t('awardList.content_02'), status: false },
        { content: this.$t('awardList.content_03'), status: false },
        { content: this.$t('awardList.content_04'), status: false },
        { content: this.$t('awardList.content_05'), status: false },
      ]
    },
  },
  methods: {
    Expand(evn) {
      const list = document.querySelectorAll('.award')
      const target = evn.target
      const children = target.children
      list.forEach((item) => {
        item.classList.remove('award-open')
        item.classList.add('award-mask')
        item.children[0].classList.remove('award-content')
      })
      target.classList.add('award-open')
      target.classList.remove('award-mask')
      children[0].classList.add('award-content')
    },
  },
}
</script>
