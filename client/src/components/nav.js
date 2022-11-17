export const header = (_index = false) => {
  const headerComponent = document.createElement('header');
  headerComponent.innerHTML = `
  <div id="location">
    <b>1441 Market St. San Francisco</b>
    <b>(123) 456-7890</b>
    <b>Mon - Sun: 8:00am - 6:00pm</b>
  </div>
  <nav>
  <img
  src=${_index ? './src/img/nav/logo-nav.png' : '../img/nav/logo-nav.png'}
  alt="Logo Casa Royal"
  class="logo"
  />
  <img
  src=${
    _index
      ? './src/img/nav/casa-royal-nav.png'
      : '../img/nav/casa-royal-nav.png'
  }
  alt="Casa Royal"
  class="logotipo"
  />
  <input type="checkbox" name="toggle" id="toggle" />
  <img src=${_index ? './src/img/nav/menu.svg' : '../img/nav/menu.svg'} 
  alt="ícono menú"
  id="menu-icon"
  >
    <div class="links hidden">
    <a href=${
      _index ? './index.html' : '../../index.html'
    } id="home">HOMEPAGE</a>
    <a href=${
      _index ? './src/components/properties.html' : './properties.html'
    } id="properties"
      >PROPERTIES</a
    >
    <a href=${
      _index ? './src/components/favorites.html' : './favorites.html'
    }>FAVORITES</a>
    <a href=${
      _index ? './src/components/agencies.html' : './agencies.html'
    }>AGENCIES</a>
    <a href="${
      _index ? './src/components/about.html' : './about.html'
    }">ABOUT</a>
    <a href=${
      _index ? './src/components/contact.html' : './contact.html'
    }>CONTACT</a>
    <a href="" id="submit-list">SUBMIT LISTING</a>
    </div>
  </nav>
`;

  return headerComponent;
};
