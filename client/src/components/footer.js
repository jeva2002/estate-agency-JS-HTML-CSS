export const footer = (_index = false) => {
  const footerComponent = document.createElement('footer');
  footerComponent.innerHTML = `
<div class="logo-container">
  <img
    src=${
      _index
        ? './src/img/footer/logo-footer.png'
        : '../img/footer/logo-footer.png'
    }
    alt="Logo Casa Royal"
    id="logo-footer"
  />
  <img
    src=${
      _index
        ? './src/img/footer/casa-royal-footer.png'
        : '../img/footer/casa-royal-footer.png'
    }
    alt="Casa Royal"
    id="logotipo-footer"
  />
  <div class="caja-1"></div>
  <div class="caja-2"></div>
  <div class="caja-3"></div>
  <div class="caja-4"></div>
</div>
<div class="info-container">
  <ul class="routes">
    <li><strong>INFORMATION</strong></li>
    <li>Our Contacts</li>
    <li>Privacy Policy</li>
    <li>Terms and Conditions</li>
    <li>FAQs</li>
  </ul>
  <ul class="routes">
    <li><strong>PROPERTIES</strong></li>
    <li>Commercial</li>
    <li>House</li>
    <li>Office</li>
    <li>Residential</li>
    <li>Residential Tower</li>
  </ul>
  <ul class="routes">
    <li><strong>LOCATIONS</strong></li>
    <li>Beverly Hills</li>
    <li>Los Angeles</li>
    <li>Mission Viejo</li>
    <li>Newport Beach</li>
    <li>Pasadena</li>
  </ul>
  <ul class="routes">
    <li><strong>USEFULL LINKS</strong></li>
    <li>Blog</li>
    <li>Our Contacts</li>
    <li>Submit Listing</li>
    <li>Support</li>
  </ul>
  <ul class="routes">
    <li><strong>ABOUT CASAROYAL</strong></li>
    <li>casaRoyal - Premium Real Estate</li>
    <li>
      111 Wall Street, USA, New York <br />
      +1(234) 567 8900
    </li>
  </ul>
</div>
<div id="block">
  <b>Privacy Policy</b>
  <b>Terms and Conditions</b>
  <b>Contact Us</b>
</d
`;

  return footerComponent;
};
