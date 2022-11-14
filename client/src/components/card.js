export const createCard = (_data, _isFavorite) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div class="img-container">
      <img src="../img/cards/${_data.img}" alt="inmueble en ${
    _data.location
  }" />
    </div>
    <div class="info-card">
      <b class="location">${_data.location}</b>
      <h3>${_data.address}</h3>
      <div class="author">
        <img src="../img/cards/agent.png" alt="" />
        <b class="author-name">${_data.owner}</b>
        <b class="update-time">${_data.update}</b>
    </div>
    <div class="features">
      <img src="../img/cards/area-icon.png" alt="ícono" class="size" />
      <b>${_data.size} Sq Ft</b>
      <img src="../img/cards/bedroom.png" alt="ícono dormitorio" class="bedroom" />
      <b>${_data.bedroom}</b>
      <img src="../img/cards/garage.png" alt="ícono garaje" class="garage" />
      <b>${_data.garage}</b>
      <img src="../img/cards/bathroom.png" alt="ícono baño" class="bathroom" />
      <b>${_data.bathroom}</b>
    </div>
    <h4 class="type">${_data.type}</h4>
    <h4 class="status">${_data.status}</h4>
    <h5 class="price">$${_data.price}</h5>
    <div class="cuadro-azul" id=${
      _isFavorite ? 'myFavorite' : ''
    }><img id="heart" src="../img/heart.svg"></div>
    <div class="cuadro-negro uno"></div>
    <div class="cuadro-negro dos"></div>
  </div>`;

  card.addEventListener('click', (e) => {
    window.location.href = `http://${window.location.host}/src/components/property.html`;
    sessionStorage.setItem('id', _data.id);
  });
  return card;
};
