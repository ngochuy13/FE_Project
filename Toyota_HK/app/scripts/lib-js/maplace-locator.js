// var Locations = [
//     {
//         lat: 22.445497,
//         lon: 114.026311,
//         title: '元朗壽富街60號好順福大廈地下98-99舖',
//         icon: 'images/store-locator/icon-store-locator-1.png',
//         iconNoActive: 'images/store-locator/icon-store-locator-1.png',
//         iconActive: 'images/store-locator/icon-store-locator-1-active.png',
//         officeID: 'office-1',
//         animation: google.maps.Animation.DROP,
//         zoom: 14,
//         show_infowindow: true
//     },
//     {
//         lat: 22.444791,
//         lon: 114.003609,
//         title: '元朗屏山橋頭圍410地段橋發街25號',
//         icon: 'images/store-locator/icon-store-locator-1.png',        
//         iconNoActive: 'images/store-locator/icon-store-locator-1.png',        
//         iconActive: 'images/store-locator/icon-store-locator-1-active.png',        
//         officeID: 'office-2',
//         animation: google.maps.Animation.DROP,
//         zoom: 14,
//         show_infowindow: true
//     },
//     {
//         lat: 22.385494,
//         lon: 114.187855,
//         title: '新界沙田沙田鄉事會路138號HomeSquare 1樓113 & 115號舖',
//         icon: 'images/store-locator/icon-store-locator-1.png',
//         iconNoActive: 'images/store-locator/icon-store-locator-1.png',
//         iconActive: 'images/store-locator/icon-store-locator-1-active.png',
//         officeID: 'office-3',
//         animation: google.maps.Animation.DROP,
//         zoom: 14,
//         show_infowindow: true
//     },
//     {
//         lat: 22.390955,
//         lon: 114.208964,
//         title: '新界沙田小瀝源安心街11號華順廣場2樓',
//         icon: 'images/store-locator/icon-store-locator-1.png',
//         iconNoActive: 'images/store-locator/icon-store-locator-1.png',
//         iconActive: 'images/store-locator/icon-store-locator-1-active.png',
//         officeID: 'office-4',
//         animation: google.maps.Animation.DROP,
//         zoom: 14,
//         show_infowindow: true
//     }
// ];

var locationData = {
  showroom: [{
    lat: 22.445497,
    lon: 114.026311,
    title: '元朗壽富街60號好順福大廈地下98-99舖',
    icon: 'images/store-locator/icon-store-locator-1.png',
    iconNoActive: 'images/store-locator/icon-store-locator-1.png',
    iconActive: 'images/store-locator/icon-store-locator-1-active.png',
    officeID: 'office-1',
    animation: google.maps.Animation.DROP,
    zoom: 14,
    show_infowindow: true
  }, {
    lat: 22.390955,
    lon: 114.208964,
    title: '新界沙田小瀝源安心街11號華順廣場2樓',
    icon: 'images/store-locator/icon-store-locator-1.png',
    iconNoActive: 'images/store-locator/icon-store-locator-1.png',
    iconActive: 'images/store-locator/icon-store-locator-1-active.png',
    officeID: 'office-2',
    animation: google.maps.Animation.DROP,
    zoom: 14,
    show_infowindow: true
  }],
  commercial: [{
    lat: 22.444791,
    lon: 114.003609,
    title: '元朗屏山橋頭圍410地段橋發街25號',
    icon: 'images/store-locator/icon-store-locator-2.png',
    iconNoActive: 'images/store-locator/icon-store-locator-2.png',
    iconActive: 'images/store-locator/icon-store-locator-2-active.png',
    officeID: 'office-3',
    animation: google.maps.Animation.DROP,
    zoom: 14,
    show_infowindow: true
  }, {
    lat: 22.390955,
    lon: 114.208964,
    title: '新界沙田小瀝源安心街11號華順廣場2樓',
    icon: 'images/store-locator/icon-store-locator-2.png',
    iconNoActive: 'images/store-locator/icon-store-locator-2.png',
    iconActive: 'images/store-locator/icon-store-locator-2-active.png',
    officeID: 'office-4',
    animation: google.maps.Animation.DROP,
    zoom: 14,
    show_infowindow: true
  }],
  service: [{
    lat: 22.385494,
    lon: 114.187855,
    title: '新界沙田沙田鄉事會路138號HomeSquare 1樓113 & 115號舖',
    icon: 'images/store-locator/icon-store-locator-3.png',
    iconNoActive: 'images/store-locator/icon-store-locator-3.png',
    iconActive: 'images/store-locator/icon-store-locator-3-active.png',
    officeID: 'office-5',
    animation: google.maps.Animation.DROP,
    zoom: 14,
    show_infowindow: true
  }, {
    lat: 22.390955,
    lon: 114.208964,
    title: '新界沙田小瀝源安心街11號華順廣場2樓',
    icon: 'images/store-locator/icon-store-locator-3.png',
    iconNoActive: 'images/store-locator/icon-store-locator-3.png',
    iconActive: 'images/store-locator/icon-store-locator-3-active.png',
    officeID: 'office-6',
    animation: google.maps.Animation.DROP,
    zoom: 14,
    show_infowindow: true
  }],
  support: [{
    lat: 22.390955,
    lon: 114.208964,
    title: '新界沙田小瀝源安心街11號華順廣場2樓',
    icon: 'images/store-locator/icon-store-locator-4.png',
    iconNoActive: 'images/store-locator/icon-store-locator-4.png',
    iconActive: 'images/store-locator/icon-store-locator-4-active.png',
    officeID: 'office-7',
    animation: google.maps.Animation.DROP,
    zoom: 14,
    show_infowindow: true
  }]
};
