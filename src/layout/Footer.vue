<template>
  <section class="footer">
    <div class="footer-body">
      <div class="footer-body_router">
        <ul>
          <li class="first">{{ $t('footer.service') }}</li>
          <li v-for="num in 5" :key="num">
            <span>{{ $t(`footer.serviceList[${num}]`) }}</span>
          </li>
        </ul>
        <ul>
          <li class="first">{{ $t('footer.publicInfo') }}</li>
          <li v-for="num in 4" :key="num">
            <span>{{ $t(`footer.publicInfoList[${num}]`) }}</span>
          </li>
        </ul>
        <ul>
          <li class="first">{{ $t('footer.advocacy') }}</li>
          <li v-for="num in 5" :key="num">
            <span>{{ $t(`footer.advocacyList[${num}]`) }}</span>
          </li>
        </ul>
      </div>
      <div class="footer-body_logo">
        <img src="@/assets/image/img_footLogo.png" alt="footLogo" />
        <ul>
          <li class="footer-body_logo-fb" />
          <li class="footer-body_logo-yt" />
          <li class="footer-body_logo-ig" />
        </ul>
      </div>
      <div class="footer-body_contact">
        <p>校址：33302桃園市龜山區文化一路259號</p>
        <p>電話：(03)211-8800</p>
        <p>傳真：(03)211-8700</p>
        <label class="footer-body_contact-search" for="">
          <input type="text" />
        </label>
      </div>
    </div>
    <div class="footer-body_accessibility">
      <div class="footer-body_accessibility-body">
        <p>{{ $t('accessibility') }}</p>
        <img src="@/assets/image/img_accessibility.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>
