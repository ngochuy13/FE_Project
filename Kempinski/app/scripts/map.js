jQuery(document).ready(function($) {
    var styles = [{
        url: $("#map-marker-cluster").get(0).src,
        textColor: 'white',
        height: 46,
        width: 46,
        textSize: 20,
        fontFamily: 'Source Sans Pro'
    }];
    var markerClusterer = null;
    var map = null;
    var imageUrl = $("#map-marker").get(0).src;

    var image = {
        url: imageUrl,
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(27, 41),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(1, 41)
    };

    // TODO: Overwrite this function for loading marker on the map
    //This handler for refreshing the map
    function refreshMap() {
        if (markerClusterer) {
            markerClusterer.clearMarkers();
        }

        var markers = [];

        var markerImage = new google.maps.MarkerImage(imageUrl,
            new google.maps.Size(27, 41));

        for (var i = 0; i < 1000; ++i) {
            var latLng = new google.maps.LatLng(data.photos[i].latitude,
                data.photos[i].longitude)
            var marker = new google.maps.Marker({
                position: latLng,
                draggable: false,
                icon: markerImage,
                avatar_url: data.photos[i].photo_file_url,
                url: data.photos[i].photo_url,
                title: data.photos[i].photo_title
            });
            markers.push(marker);
        }
        var infowindow = null;
        /* now inside your initialise function */
        infowindow = new google.maps.InfoWindow({
            content: "holding..."
        });

        for (var i = 0; i < markers.length; i++) {
            var marker = markers[i];
            google.maps.event.addListener(marker, 'click', function() {
                // where I have added .html to the marker object.
                var content = "<div class='info-window'>"
                +"<a href='"+this.url+"' class='img-link'><img src='"+this.avatar_url+"' /></a>"
                +"<label>"+this.title+"</label>"
                +"<a class='btn-view' href='"+this.url+"'>View Details</a>";
                infowindow.setContent(content);
                infowindow.disableAutoPan = false;
                infowindow.open(map, this);

                //style with script
                $('.gm-style-iw').prev().hide();
                $('.gm-style-iw').next().hide();
                $('.gm-style-iw').css("transform", "translateX(10px) translateY(45px)").find(">div").css("overflow", "visible").find(">div").css("overflow", "visible");
            });
        }
        markerClusterer = new MarkerClusterer(map, markers, {
            maxZoom: 3,
            gridSize: null,
            styles: styles
        });
    }

    // This function for clearing json data    
    function clearClusters(e) {
        e.preventDefault();
        e.stopPropagation();
        markerClusterer.clearMarkers();
    }

    function initialize() {
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 3,
            center: new google.maps.LatLng(39.91, 116.38),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        refreshMap();
    }

    google.maps.event.addDomListener(window, 'load', initialize);
});