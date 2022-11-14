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
        <h4 id="size">${request.size} Sq Ft</h4>
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
  <div class="favorite"><img id="heart" src="../img/heart.svg"></div>
  <div id="information">
    <section>
      <div class="description">
        <h2>Description</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea tempore
          cumque, reiciendis veniam vero consequuntur similique nisi hic
          corrupti voluptatibus, mollitia necessitatibus obcaecati culpa! Et
          numquam fugiat id consectetur quis unde, at doloremque molestias
          provident dolorum, esse est placeat eligendi, ad nobis optio! A
          deserunt labore quasi aut, blanditiis eveniet. Error, nostrum
          officiis non, iste voluptate exercitationem eos, veritatis enim
          cupiditate doloremque in quas temporibus quae ipsam rerum possimus
          recusandae! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Architecto blanditiis delectus in laborum tenetur. Deserunt
          asperiores neque repudiandae eos libero consequatur laborum modi
          reiciendis exercitationem earum pariatur, dolore voluptatibus velit
          quis harum
        </p>
      </div>
    </section>
    <aside>
      <h2>Contact</h2>
      <h3>${request.owner.name}</h3>
      <h4>${request.owner.contact}</h4>
      <img src="../img/testimonial/Alanna.png" alt="" />
    </aside>
  </div>`;

  return propertyDetail;
};
