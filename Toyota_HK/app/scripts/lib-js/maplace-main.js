jQuery(function($) {
  if($("#gmap").length===0){
   return;
  }
  // var Locations = locationData['showroom'];

  var maplaceInitCustom = function (location){

    $.each(maplace.markers, function(i, marker){
      marker.officeID = location[i].officeID;
      google.maps.event.addListener(marker, 'click', function() {      
        $.each(maplace.markers, function(i, m){
          m.setIcon(m.iconNoActive);
        });
        this.setIcon(this.iconActive);

        if($("h4.panel-title a[href='#" + this.officeID + "']").attr('aria-expanded') == 'false'){
          $("#" + this.officeID).collapse('show')
            .closest('.panel-default').siblings().find('.panel-collapse').collapse('hide');
        }

      });
    });

    $("#controls-custom .panel-collapse").off('shown.bs.collapse').on('shown.bs.collapse', function(){
      var id = "#"+this.id;
      var indexActive = parseInt($(this).closest('.panel').find('a.location').attr('data-load'));
      if (maplace.current_index != (indexActive - 1)) {
        $.each(maplace.markers, function(i, m){
          if(id === "#"+m.officeID){
            maplace.ViewOnMap(indexActive);
            m.setIcon(m.iconActive);
          } else {
            m.setIcon(m.iconNoActive);
          }
        });
      }
    });

    // setTimeout(function(){
    //   var tabLocation = $("#controls-custom .tab-pane.active");
    //   if(tabLocation.length){
    //     tabLocation.find(".panel-title a.location").off('click').on('click',function(e){
    //       e.preventDefault();
    //       var _oThis = $(this);
    //       var id = _oThis.attr('href');
    //       var indexActive = parseInt(_oThis.attr('data-load'));
    //       if (maplace.current_index != (indexActive - 1)) {
    //         $.each(maplace.markers, function(i, m){
    //           if(id === "#"+m.officeID){
    //             maplace.ViewOnMap(_oThis.attr('data-load'));
    //             m.setIcon(m.iconActive);
    //           } else {
    //             m.setIcon(m.iconNoActive);
    //           }
    //         });
    //       }

    //     });
    //   }
    // } , 300 );
  }

  var styleCustom = {
          'Map Style':[
                  {
                    "featureType": "landscape",
                    "stylers": [
                      { "visibility": "on" },
                      { "saturation": 8 },
                      { "lightness": 62 },
                      { "hue": "#ff3300" }
                    ]
                  },{
                    "featureType": "water",
                    "stylers": [
                      { "saturation": -100 },
                      { "lightness": -2 }
                    ]
                  },{
                    "featureType": "poi",
                    "stylers": [
                      { "visibility": "on" },
                      { "hue": "#ff2b00" },
                      { "saturation": -9 },
                      { "lightness": 26 }
                    ]
                  }
                ]
      };
  window.maplace = new Maplace({
      locations: $.extend(true, [], locationData['showroom']),
      generate_controls: false,
      controls_on_map: false,
      map_div: '#gmap',
      controls_type: 'list',
      start: 0,
      styles: styleCustom,
      map_options: {
        mapTypeControl: false
      }
  }); 
  maplace.Load();
  maplaceInitCustom($.extend(true, [], locationData['showroom']));

  var tabNav = $("#controls-custom .nav-tabs");
  if(tabNav.length){
    tabNav.find("li").on('click',function(e){
      var locationActive = $(this).find('a').attr('aria-controls');

      maplace.Load({
        locations: $.extend(true, [], locationData[locationActive])
      });
      maplaceInitCustom($.extend(true, [], locationData[locationActive]));

      // maplace.RemoveLocations([0,1], true);
      // switch(locationActive) {
      //   case "showroom":
      //     maplace.Load({
      //       locations: locationData['showroom']
      //     });
      //     break;
      //   case "commercial":
      //     maplace.Load({
      //       locations: locationData['commercial']
      //     });
      //     break;
      //   case "service":
      //     maplace.Load({
      //       locations: locationData['service']
      //     });
      //     break;
      //   case "support":
      //     maplace.Load({
      //       locations: locationData['support']
      //     });
      //     break;
      // };
      // maplace.o.locations = Locations;
      // maplace.init_map();

    });
  }

  if(window.location.hash != ''){
    setTimeout(function(){
      var locationActive = window.location.hash;
      $('.store-locator-list .nav-tabs a[href='+locationActive+']').trigger('click');
    },500);
  }

});