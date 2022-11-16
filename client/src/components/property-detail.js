export const showProperty = async () => {
  const SERVER_URL = 'http://localhost:3000/properties/';

  const request = await (
    await fetch(SERVER_URL + sessionStorage.getItem('id'))
  ).json();

  document.getElementById('title').innerHTML = request.type;
  const propertyDetail = document.createElement('div');
  propertyDetail.classList.add('component-container');
  propertyDetail.innerHTML = `
  <style>
    #main-img-container {  background-image: url("../img/cards/${request.img}") }
  </style>
  <main id="main">
  <div id="main-img-container">
  </div>
  <div id="main-info">
    <h1>$${request.price}</h1>
    <h2>${request.location}</h2>
    <h3>${request.address}</h3>
    <h3 id="type">${request.type}<span>${request.status}</span></h3>
    <div class="azul">
      <div id="size-container">
        <h4 id="size">${request.size} m2</h4>
        <img src="../img/cards/area-icon.png" alt="ícono área" />
      </div>
      <div id="details">
        <h4 id="first">${request.bedroom}</h4>
        <img src="../img/cards/bedroom.png" alt="ícono dormitorio" />
        <h4>${request.garage}</h4>
        <img src="../img/cards/garage.png" alt="ícono garaje" />
        <h4>${request.bathroom}</h4>
        <img src="../img/cards/bathroom.png" alt="ícono baño" />
      </div>
    </div>
  </div>
  </main>
  <div class="favorite"><img id="heart" src="../img/cards/heart.svg"></div>
  <div id="information">
    <section>
      <div class="description">
        <h2>Description</h2>
        <p>
          ${request.description}
        </p>
      </div>
    </section>
    <aside>
      <h2>Contact</h2>
      <h3>${request.owner.name}</h3>
      <h4>${request.owner.contact}</h4>
      <img src="../img/index/Alanna.png" alt="Proveedor" />
    </aside>
  </div>`;

  return propertyDetail;
};
