Plataforma creada con JS, HTML y CSS. Se trabaja por módulos para lograr una plataforma web de inmuebles que permite
hacer peticiones a una fake API REST, y las renderiza según ciertas necesidades. Se intenta un diseño responsive que
fue desktop first, se utiliza sessionStorage para el buscador de la pantalla inicial y se utiliza el localStorage para
el manejo de las propiedades favoritas del usuario. Las imágenes e íconos al no poder simularse una ruta
externa se consumen desde local.

El buscador de la pantalla de inicio es funcional, si se utiliza este por medio del session storage se redirecciona a
la pestaña de propiedades y se hace el filtro dado. En propiedades por defecto se generan seis cards, también tiene su
propio buscador y permite mostrar todas las tarjetas o sólo algunas. Clickeando cualquier tarjeta podemos acceder a una
pantalla que nos muestra tal propiedad en detalle, y allí podemos agregarla a favoritos clickeando el corazón que sale en la imágen. Con esto aparecerá en la pestaña de favoritos y estará marcada en el resto de pantallas, esto utilizando
el Local Storage.

El cliente funciona por medio de la extensión Go Live y consume un servidor fake que se activa por medio del módulo
JSON Server.
