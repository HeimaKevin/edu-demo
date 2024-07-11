<template>
  <section class="footer">
    <div class="footer-body">
      <div class="footer-body_connection">
        <img src="@/assets/image/img_footLogo.png" alt="footLogo" />
        <div class="connection-info">
          <p>校址：台北市仁愛路二段一號厚生大樓三樓</p>
          <p>電話：(02)23925128</p>
          <p>E-mail：cie@cie.org.tw</p>
        </div>
      </div>
      <div class="footer-body_contact">
        <ul class="footer-body_contact-logo">
          <li class="footer-body_contact-logo-fb" />
          <li class="footer-body_contact-logo-yt" />
          <li class="footer-body_contact-logo-ig" />
        </ul>
        <label class="footer-body_contact-search" for="">
          <input type="text" />
        </label>
      </div>
    </div>
    <div class="footer-body_accessibility">
      <div class="footer-body_accessibility-body">
        <p>Copyright &copy; 中國工程師學會 All Rights Reserved</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>
