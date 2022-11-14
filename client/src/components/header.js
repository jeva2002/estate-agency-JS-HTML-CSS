export const header = (_index = false) => {
  const headerIndex = document.createElement('header');
  headerIndex.innerHTML = `
  <div id="location">
    <b>1441 Market St. San Francisco</b>
    <b>(123) 456-7890</b>
    <b>Mon - Sun: 8:00am - 6:00pm</b>
  </div>
  <nav>
  <img
  src=${_index ? './src/img/logo-header.png' : '../img/logo-header.png'}
  alt="Logo Casa Royal"
  class="logo"
  />
  <img
  src=${
    _index ? './src/img/casa-royal-header.png' : '../img/casa-royal-header.png'
  }
  alt="Casa Royal"
  class="logotipo"
  />
  <input type="checkbox" name="toggle" id="toggle" />
  <img src=${_index ? './src/img/menu.svg' : '../img/menu.svg'} 
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
    <a href="">AGENCIES</a>
    <a href="">ABOUT</a>
    <a href="">CONTACT</a>
    <a href="" id="submit-list">SUBMIT LISTING</a>
    </div>
  </nav>
`;

  return headerIndex;
};
