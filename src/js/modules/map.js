const setPlacemark = map  => {
  const windowWidth = window.innerWidth;
  var myPlacemark;

  if (windowWidth >= 728) {
    myPlacemark = new ymaps.Placemark(coordinates, {}, {
      iconLayout: 'default#image',
      iconImageHref: '/img/sprite.svg#location-mark',
      iconImageSize: [52, 52],
    });
  } else {
    myPlacemark = new ymaps.Placemark(coordinates, {}, {
      iconLayout: 'default#image',
      iconImageHref: '/img/sprite.svg#location-mark',
      iconImageSize: [42, 42],
    });
  }

  map.geoObjects.add(myPlacemark);
};

const coordinates = [55.791363, 37.589078];
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: coordinates,
    zoom: 15,
    controls: [],
  });

  setPlacemark(myMap);
}