'use strict';

jQuery(document).ready(function() {
  (function($) {
    // insert data => can be replaced by server-side
    // if data render from server-side, please comment this code block
    // and call 'Pattern.Mediator.pub('Toyota.OurFamily.loaded')' after HTML rendered
      (function() {
        var carsListCarousel_Back = $('#cars-list-carousel-back');
        var carsListCarousel_Front = $('#cars-list-carousel-front');
        var carItemTemplate_Back = _.template('<div data-index="<%= index %>" data-type="<%= carFamily %>" class="cars-quick-view-item"><img src="<%= carImgSource[0] %>" alt="<%= carName %>" /></div>');
        var carItemTemplate_Front = _.template('<div data-index="<%= index %>" data-type="<%= carFamily %>" class="cars-quick-view-item"><a href="<%= carExploreLink %>" title="Explore"><img src="<%= carImgSource[1] %>" alt="<%= carName %>" /></a><div class="car-info"><p class="car-name"><%= carName %></p><p class="car-short-desc"><%= carDescription %></p><a href="<%= carExploreLink %>" title="Explore" class="common-btn">Explore</a></div></div>');
        var carDataJSON = [
          {
            carFamily: 'family',
            carName: 'Ractis 1',
            carImgSource: ['images/menu/car-1-s.png', 'images/menu/car-1.png'],
            carDescription: 'Giant trunk space, from $168,980',
            carExploreLink: 'car-detail.html'
          },
          {
            carFamily: 'family',
            carName: 'Ractis 2',
            carImgSource: ['images/menu/car-2-s.png', 'images/menu/car-2.png'],
            carDescription: 'Giant trunk space, from $168,980',
            carExploreLink: 'car-detail.html'
          },
          {
            carFamily: 'family',
            carName: 'Ractis 3',
            carImgSource: ['images/menu/car-3-s.png', 'images/menu/car-3.png'],
            carDescription: 'Giant trunk space, from $168,980',
            carExploreLink: 'car-detail.html'
          },
          {
            carFamily: 'family',
            carName: 'Ractis 4',
            carImgSource: ['images/menu/car-4-s.png', 'images/menu/car-4.png'],
            carDescription: 'Giant trunk space, from $168,980',
            carExploreLink: 'car-detail.html'
          },
          {
            carFamily: 'family',
            carName: 'Ractis 5',
            carImgSource: ['images/menu/car-5-s.png', 'images/menu/car-5.png'],
            carDescription: 'Giant trunk space, from $168,980',
            carExploreLink: 'car-detail.html'
          },
          {
            carFamily: 'family',
            carName: 'Ractis 6',
            carImgSource: ['images/menu/car-6-s.png', 'images/menu/car-6.png'],
            carDescription: 'Giant trunk space, from $168,980',
            carExploreLink: 'car-detail.html'
          },
          {
            carFamily: 'family',
            carName: 'Ractis 7',
            carImgSource: ['images/menu/car-7-s.png', 'images/menu/car-7.png'],
            carDescription: 'Giant trunk space, from $168,980',
            carExploreLink: 'car-detail.html'
          },
          {
            carFamily: 'family',
            carName: 'Ractis 8',
            carImgSource: ['images/menu/car-8-s.png', 'images/menu/car-8.png'],
            carDescription: 'Giant trunk space, from $168,980',
            carExploreLink: 'car-detail.html'
          },
          {
            carFamily: 'family',
            carName: 'Ractis 9',
            carImgSource: ['images/menu/car-9-s.png', 'images/menu/car-9.png'],
            carDescription: 'Giant trunk space, from $168,980',
            carExploreLink: 'car-detail.html'
          },
          {
            carFamily: 'family',
            carName: 'Ractis 10',
            carImgSource: ['images/menu/car-10-s.png', 'images/menu/car-10.png'],
            carDescription: 'Giant trunk space, from $168,980',
            carExploreLink: 'car-detail.html'
          },
          {
            carFamily: 'family',
            carName: 'Ractis 11',
            carImgSource: ['images/menu/car-11-s.png', 'images/menu/car-11.png'],
            carDescription: 'Giant trunk space, from $168,980',
            carExploreLink: 'car-detail.html'
          },
          {
            carFamily: 'travel',
            carName: 'Travel 1',
            carImgSource: ['images/menu/car-12-s.png', 'images/menu/car-12.png'],
            carDescription: 'Travel space, from $328,540',
            carExploreLink: 'car-detail-02.html',
          },
          {
            carFamily: 'travel',
            carName: 'Travel 2',
            carImgSource: ['images/menu/car-13-s.png', 'images/menu/car-13.png'],
            carDescription: 'Travel space, from $328,540',
            carExploreLink: 'car-detail-02.html',
          },
          {
            carFamily: 'travel',
            carName: 'Travel 3',
            carImgSource: ['images/menu/car-14-s.png', 'images/menu/car-14.png'],
            carDescription: 'Travel space, from $328,540',
            carExploreLink: 'car-detail-02.html',
          },
          {
            carFamily: 'travel',
            carName: 'Travel 4',
            carImgSource: ['images/menu/car-15-s.png', 'images/menu/car-15.png'],
            carDescription: 'Travel space, from $328,540',
            carExploreLink: 'car-detail-02.html',
          },
          {
            carFamily: 'travel',
            carName: 'Travel 5',
            carImgSource: ['images/menu/car-16-s.png', 'images/menu/car-16.png'],
            carDescription: 'Travel space, from $328,540',
            carExploreLink: 'car-detail-02.html',
          },
          {
            carFamily: 'travel',
            carName: 'Travel 6',
            carImgSource: ['images/menu/car-17-s.png', 'images/menu/car-17.png'],
            carDescription: 'Travel space, from $328,540',
            carExploreLink: 'car-detail-02.html',
          }
        ]
        $.each(carDataJSON, function(index) {
          var itemBack = carItemTemplate_Back( $.extend(true, {}, this, {index: index}) );
          var itemFront = carItemTemplate_Front( $.extend(true, {}, this, {index: index}) );
          carsListCarousel_Back.append( itemBack );
          carsListCarousel_Front.append( itemFront );
        });

        //when all data is loaded and render to HTML, publish the 'loaded' event
        setTimeout(function() { // setTimeout 1000ms just for dummy test loading, remove on production
          Pattern.Mediator.pub('Toyota.OurFamily.loaded');
        }, 1000); 
      })();
  })(jQuery);
});