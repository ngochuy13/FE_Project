!function(t,o,i,e){var s,n,a;s={activateCurrent:function(t){this.html_element.find("select").val(t)},getHtml:function(){var o,i=this,e="";if(1<this.ln){for(e+='<select class="dropdown controls '+this.o.controls_cssclass+'">',this.ShowOnMenu(this.view_all_key)&&(e+='<option value="'+this.view_all_key+'">'+this.o.view_all_text+"</option>"),o=0;o<this.ln;o+=1)this.ShowOnMenu(o)&&(e+='<option value="'+(o+1)+'">'+(this.o.locations[o].title||"#"+(o+1))+"</option>");e=t(e+"</select>").bind("change",function(){i.ViewOnMap(this.value)})}return(o=this.o.controls_title)&&(o=t('<div class="controls_title"></div>').css(this.o.controls_applycss?{fontWeight:"bold",fontSize:this.o.controls_on_map?"12px":"inherit",padding:"3px 10px 5px 0"}:{}).append(this.o.controls_title)),this.html_element=t('<div class="wrap_controls"></div>').append(o).append(e)}},n={html_a:function(o,i,e){var s=this;return i=i||o+1,e=e||this.o.locations[o].title,o=t('<a data-load="'+i+'" id="ullist_a_'+i+'" href="#'+i+'" title="'+e+'"><span>'+(e||"#"+(o+1))+"</span></a>"),o.css(this.o.controls_applycss?{color:"#666",display:"block",padding:"5px",fontSize:this.o.controls_on_map?"12px":"inherit",textDecoration:"none"}:{}),o.on("click",function(o){o.preventDefault(),o=t(this).attr("data-load"),s.ViewOnMap(o)}),o},activateCurrent:function(t){this.html_element.find("li").removeClass("active"),this.html_element.find("#ullist_a_"+t).parent().addClass("active")},getHtml:function(){var o,i=t("<ul class='ullist controls "+this.o.controls_cssclass+"'></ul>").css(this.o.controls_applycss?{margin:0,padding:0,listStyleType:"none"}:{});for(this.ShowOnMenu(this.view_all_key)&&i.append(t("<li></li>").append(n.html_a.call(this,!1,this.view_all_key,this.o.view_all_text))),o=0;o<this.ln;o++)this.ShowOnMenu(o)&&i.append(t("<li></li>").append(n.html_a.call(this,o)));return(o=this.o.controls_title)&&(o=t('<div class="controls_title"></div>').css(this.o.controls_applycss?{fontWeight:"bold",padding:"3px 10px 5px 0",fontSize:this.o.controls_on_map?"12px":"inherit"}:{}).append(this.o.controls_title)),this.html_element=t('<div class="wrap_controls"></div>').append(o).append(i)}},a=function(){function o(o){this.VERSION="0.1.33",this.loaded=!1,this.markers=[],this.circles=[],this.oMap=!1,this.view_all_key="all",this.infowindow=null,this.ln=this.maxZIndex=0,this.oMap=!1,this.directionsDisplay=this.directionsService=this.Fusion=this.Polygon=this.Polyline=this.current_index=this.current_control=this.controls_wrapper=this.canvas_map=this.map_div=this.oBounds=null,this.o={debug:!1,map_div:"#gmap",controls_div:"#controls",generate_controls:!0,controls_type:"dropdown",controls_cssclass:"",controls_title:"",controls_on_map:!0,controls_applycss:!0,controls_position:i.maps.ControlPosition.RIGHT_TOP,type:"marker",view_all:!0,view_all_text:"View All",pan_on_click:!0,start:0,locations:[],shared:{},map_options:{mapTypeId:i.maps.MapTypeId.ROADMAP},stroke_options:{strokeColor:"#0000FF",strokeOpacity:.8,strokeWeight:2,fillColor:"#0000FF",fillOpacity:.4},directions_options:{travelMode:i.maps.TravelMode.DRIVING,unitSystem:i.maps.UnitSystem.METRIC,optimizeWaypoints:!1,provideRouteAlternatives:!1,avoidHighways:!1,avoidTolls:!1},circle_options:{radius:100,visible:!0},styles:{},fusion_options:{},directions_panel:null,draggable:!1,editable:!1,show_infowindows:!0,show_markers:!0,infowindow_type:"bubble",listeners:{},beforeViewAll:function(){},afterViewAll:function(){},beforeShow:function(t,o,i){},afterShow:function(t,o,i){},afterCreateMarker:function(t,o,i){},beforeCloseInfowindow:function(t,o){},afterCloseInfowindow:function(t,o){},beforeOpenInfowindow:function(t,o,i){},afterOpenInfowindow:function(t,o,i){},afterRoute:function(t,o,i){},onPolylineClick:function(t){},onPolygonClick:function(t){},circleRadiusChanged:function(t,o,i){},circleCenterChanged:function(t,o,i){},drag:function(t,o,i){},dragEnd:function(t,o,i){},dragStart:function(t,o,i){}},this.AddControl("dropdown",s),this.AddControl("list",n),o&&"directions"===o.type&&(!o.show_markers&&(o.show_markers=!1),!o.show_infowindows&&(o.show_infowindows=!1)),t.extend(!0,this.o,o)}return o.prototype.controls={},o.prototype.create_objMap=function(){var o,e=0;for(o in this.o.styles)this.o.styles.hasOwnProperty(o)&&(0===e&&(this.o.map_options.mapTypeControlOptions={mapTypeIds:[i.maps.MapTypeId.ROADMAP]}),e++,this.o.map_options.mapTypeControlOptions.mapTypeIds.push("map_style_"+e));if(this.loaded)this.oMap.setOptions(this.o.map_options);else try{this.map_div.css({position:"relative",overflow:"hidden"}),this.canvas_map=t("<div>").addClass("canvas_map").css({width:"100%",height:"100%"}).appendTo(this.map_div),this.oMap=new i.maps.Map(this.canvas_map.get(0),this.o.map_options)}catch(s){this.debug("create_objMap::"+this.map_div.selector,s.toString())}e=0;for(o in this.o.styles)this.o.styles.hasOwnProperty(o)&&(e++,this.oMap.mapTypes.set("map_style_"+e,new i.maps.StyledMapType(this.o.styles[o],{name:o})),this.oMap.setMapTypeId("map_style_"+e))},o.prototype.add_markers_to_objMap=function(){var t,o;switch(t=this.o.type||"marker"){case"marker":for(t=0;t<this.ln;t++)o=this.create_objPoint(t),this.create.marker.call(this,t,o);break;default:this.create[t].apply(this)}},o.prototype.create_objPoint=function(o){o=t.extend({},this.o.locations[o]);var s=o.visible===e?e:o.visible;return!o.type&&(o.type=this.o.type),o.map=this.oMap,o.position=new i.maps.LatLng(o.lat,o.lon),o.zIndex=o.zIndex===e?1e4:o.zIndex+100,o.visible=s===e?this.o.show_markers:s,this.o.maxZIndex=o.zIndex>this.maxZIndex?o.zIndex:this.maxZIndex,o.image&&(o.icon=new i.maps.MarkerImage(o.image,new i.maps.Size(o.image_w||32,o.image_h||32),new i.maps.Point(0,0),new i.maps.Point((o.image_w||32)/2,(o.image_h||32)/2))),o},o.prototype.create_objCircle=function(o){var i,e,s;return s=t.extend({},o),i=t.extend({},this.o.stroke_options),e=t.extend({},this.o.circle_options),t.extend(i,o.stroke_options||{}),t.extend(s,i),t.extend(e,o.circle_options||{}),t.extend(s,e),s.center=o.position,s.draggable=!1,s.zIndex=0<o.zIndex?o.zIndex-10:1,s},o.prototype.add_markerEv=function(t,o,e){var s=this;i.maps.event.addListener(e,"click",function(i){s.o.beforeShow(t,o,e),s.o.show_infowindows&&!1!==o.show_infowindow&&s.open_infowindow(t,e,i),s.o.pan_on_click&&!1!==o.pan_on_click&&(s.oMap.panTo(o.position),o.zoom&&s.oMap.setZoom(o.zoom)),s.current_control&&s.o.generate_controls&&s.current_control.activateCurrent&&s.current_control.activateCurrent.call(s,t+1),s.current_index=t,s.o.afterShow(t,o,e)}),o.draggable&&this.add_dragEv(t,o,e)},o.prototype.add_circleEv=function(t,o,e){var s=this;i.maps.event.addListener(e,"click",function(){s.ViewOnMap(t+1)}),i.maps.event.addListener(e,"center_changed",function(){s.o.circleCenterChanged(t,o,e)}),i.maps.event.addListener(e,"radius_changed",function(){s.o.circleRadiusChanged(t,o,e)}),o.draggable&&this.add_dragEv(t,o,e)},o.prototype.add_dragEv=function(t,o,e){var s=this;i.maps.event.addListener(e,"drag",function(n){var a;if(e.getPosition)n=e.getPosition();else{if(!e.getCenter)return;n=e.getCenter()}if(s.circles[t]&&s.circles[t].setCenter(n),s.Polyline?a="Polyline":s.Polygon&&(a="Polygon"),a){for(var r=s[a].getPath().getArray(),l=[],c=0;c<r.length;++c)l[c]=t===c?new i.maps.LatLng(n.lat(),n.lng()):new i.maps.LatLng(r[c].lat(),r[c].lng());s[a].setPath(new i.maps.MVCArray(l)),s.add_polyEv(a)}s.o.drag(t,o,e)}),i.maps.event.addListener(e,"dragend",function(){s.o.dragEnd(t,o,e)}),i.maps.event.addListener(e,"dragstart",function(){s.o.dragStart(t,o,e)}),i.maps.event.addListener(e,"center_changed",function(){s.markers[t]&&e.getCenter&&s.markers[t].setPosition(e.getCenter()),s.o.drag(t,o,e)})},o.prototype.add_polyEv=function(t){var o=this;i.maps.event.addListener(this[t].getPath(),"set_at",function(e,s){var n=o[t].getPath().getAt(e),n=new i.maps.LatLng(n.lat(),n.lng());o.markers[e]&&o.markers[e].setPosition(n),o.circles[e]&&o.circles[e].setCenter(n),o.o["on"+t+"Changed"](e,s,o[t].getPath().getArray())})},o.prototype.create={marker:function(t,o,e){var s;return"circle"!=o.type||e||(s=this.create_objCircle(o),o.visible||(s.draggable=o.draggable),e=new i.maps.Circle(s),this.add_circleEv(t,s,e),this.circles[t]=e),o.type="marker",e=new i.maps.Marker(o),this.add_markerEv(t,o,e),this.oBounds.extend(o.position),this.markers[t]=e,this.o.afterCreateMarker(t,o,e),e},circle:function(){var t,o,e,s;for(t=0;t<this.ln;t++)o=this.create_objPoint(t),"circle"==o.type&&(e=this.create_objCircle(o),o.visible||(e.draggable=o.draggable),s=new i.maps.Circle(e),this.add_circleEv(t,e,s),this.circles[t]=s),o.type="marker",this.create.marker.call(this,t,o,s)},polyline:function(){var o,e,s=t.extend({},this.o.stroke_options);for(s.path=[],s.draggable=this.o.draggable,s.editable=this.o.editable,s.map=this.oMap,s.zIndex=this.o.maxZIndex+100,o=0;o<this.ln;o++)e=this.create_objPoint(o),this.create.marker.call(this,o,e),s.path.push(e.position);this.Polyline?this.Polyline.setOptions(s):this.Polyline=new i.maps.Polyline(s),this.add_polyEv("Polyline")},polygon:function(){var o,e,s=this,n=t.extend({},this.o.stroke_options);for(n.path=[],n.draggable=this.o.draggable,n.editable=this.o.editable,n.map=this.oMap,n.zIndex=this.o.maxZIndex+100,o=0;o<this.ln;o++)e=this.create_objPoint(o),this.create.marker.call(this,o,e),n.path.push(e.position);this.Polygon?this.Polygon.setOptions(n):this.Polygon=new i.maps.Polygon(n),i.maps.event.addListener(this.Polygon,"click",function(t){s.o.onPolygonClick(t)}),this.add_polyEv("Polygon")},fusion:function(){this.o.fusion_options.styles=[this.o.stroke_options],this.o.fusion_options.map=this.oMap,this.Fusion?this.Fusion.setOptions(this.o.fusion_options):this.Fusion=new i.maps.FusionTablesLayer(this.o.fusion_options)},directions:function(){var o,e,s,n,a,r=this,l=[],c=0;for(o=0;o<this.ln;o++)e=this.create_objPoint(o),0===o?n=e.position:o===this.ln-1?a=e.position:(s=!0===this.o.locations[o].stopover?!0:!1,l.push({location:e.position,stopover:s})),this.create.marker.call(this,o,e);this.o.directions_options.origin=n,this.o.directions_options.destination=a,this.o.directions_options.waypoints=l,this.directionsService||(this.directionsService=new i.maps.DirectionsService),this.directionsDisplay?this.directionsDisplay.setOptions({draggable:this.o.draggable}):this.directionsDisplay=new i.maps.DirectionsRenderer({draggable:this.o.draggable}),this.directionsDisplay.setMap(this.oMap),this.o.directions_panel&&(this.o.directions_panel=t(this.o.directions_panel),this.directionsDisplay.setPanel(this.o.directions_panel.get(0))),this.o.draggable&&i.maps.event.addListener(this.directionsDisplay,"directions_changed",function(){c=r.compute_distance(r.directionsDisplay.directions),r.o.afterRoute(c)}),this.directionsService.route(this.o.directions_options,function(t,o){o===i.maps.DirectionsStatus.OK&&(c=r.compute_distance(t),r.directionsDisplay.setDirections(t)),r.o.afterRoute(c,o,t)})}},o.prototype.compute_distance=function(t){var o=0,i=t.routes[0],e=i.legs.length;for(t=0;e>t;t++)o+=i.legs[t].distance.value;return o},o.prototype.type_to_open={bubble:function(t){this.infowindow=new i.maps.InfoWindow({content:t.html||""})}},o.prototype.open_infowindow=function(t,o,i){this.CloseInfoWindow(),i=this.o.locations[t];var e=this.o.infowindow_type;i.html&&this.type_to_open[e]&&(this.o.beforeOpenInfowindow(t,i,o),this.type_to_open[e].call(this,i),this.infowindow.open(this.oMap,o),this.o.afterOpenInfowindow(t,i,o))},o.prototype.get_html_controls=function(){return this.controls[this.o.controls_type]&&this.controls[this.o.controls_type].getHtml?(this.current_control=this.controls[this.o.controls_type],this.current_control.getHtml.apply(this)):""},o.prototype.generate_controls=function(){if(this.o.controls_on_map){var o=t('<div class="on_gmap '+this.o.controls_type+' gmap_controls"></div>').css(this.o.controls_applycss?{margin:"5px"}:{}),i=t(this.get_html_controls()).css(this.o.controls_applycss?{background:"#fff",padding:"5px",border:"1px solid rgb(113,123,135)",boxShadow:"rgba(0, 0, 0, 0.4) 0px 2px 4px",maxHeight:this.map_div.find(".canvas_map").outerHeight()-80,minWidth:100,overflowY:"auto",overflowX:"hidden"}:{});o.append(i),this.oMap.controls[this.o.controls_position].push(o.get(0))}else this.controls_wrapper.empty(),this.controls_wrapper.append(this.get_html_controls())},o.prototype.init_map=function(){var t=this;this.Polyline&&this.Polyline.setMap(null),this.Polygon&&this.Polygon.setMap(null),this.Fusion&&this.Fusion.setMap(null),this.directionsDisplay&&this.directionsDisplay.setMap(null);for(var o=this.markers.length-1;o>=0;--o)try{this.markers[o]&&this.markers[o].setMap(null)}catch(e){t.debug("init_map::markers::setMap",e.stack)}for(this.markers.length=0,this.markers=[],o=this.circles.length-1;o>=0;--o)try{this.circles[o]&&this.circles[o].setMap(null)}catch(s){t.debug("init_map::circles::setMap",s.stack)}this.circles.length=0,this.circles=[],this.o.controls_on_map&&this.oMap.controls&&this.oMap.controls[this.o.controls_position].forEach(function(o,i){try{t.oMap.controls[this.o.controls_position].removeAt(i)}catch(e){t.debug("init_map::removeAt",e.stack)}}),this.oBounds=new i.maps.LatLngBounds},o.prototype.perform_load=function(){1===this.ln?(this.o.map_options.set_center?this.oMap.setCenter(new i.maps.LatLng(this.o.map_options.set_center[0],this.o.map_options.set_center[1])):(this.oMap.fitBounds(this.oBounds),this.ViewOnMap(1)),this.o.map_options.zoom&&this.oMap.setZoom(this.o.map_options.zoom)):0===this.ln?(this.o.map_options.set_center?this.oMap.setCenter(new i.maps.LatLng(this.o.map_options.set_center[0],this.o.map_options.set_center[1])):this.oMap.fitBounds(this.oBounds),this.oMap.setZoom(this.o.map_options.zoom||1)):(this.oMap.fitBounds(this.oBounds),"number"==typeof(this.o.start-0)&&0<this.o.start&&this.o.start<=this.ln?this.ViewOnMap(this.o.start):this.o.map_options.set_center?this.oMap.setCenter(new i.maps.LatLng(this.o.map_options.set_center[0],this.o.map_options.set_center[1])):this.ViewOnMap(this.view_all_key),this.o.map_options.zoom&&this.oMap.setZoom(this.o.map_options.zoom))},o.prototype.debug=function(t,o){return this.o.debug&&console.log(t,o),this},o.prototype.AddControl=function(t,o){return t&&o?(this.controls[t]=o,this):(self.debug("AddControl",'Missing "name" and "func" callback.'),!1)},o.prototype.CloseInfoWindow=function(){return this.infowindow&&(this.current_index||0===this.current_index)&&(this.o.beforeCloseInfowindow(this.current_index,this.o.locations[this.current_index]),this.infowindow.close(),this.infowindow=null,this.o.afterCloseInfowindow(this.current_index,this.o.locations[this.current_index])),this},o.prototype.ShowOnMenu=function(t){return t===this.view_all_key&&this.o.view_all&&1<this.ln?!0:(t=parseInt(t,10),"number"==typeof(t-0)&&t>=0&&t<this.ln&&!1!==this.o.locations[t].on_menu?!0:!1)},o.prototype.ViewOnMap=function(t){if(t===this.view_all_key)this.o.beforeViewAll(),this.current_index=t,0<this.o.locations.length&&this.o.generate_controls&&this.current_control&&this.current_control.activateCurrent&&this.current_control.activateCurrent.apply(this,[t]),this.oMap.fitBounds(this.oBounds),this.CloseInfoWindow(),this.o.afterViewAll();else if(t=parseInt(t,10),"number"==typeof(t-0)&&t>0&&t<=this.ln)try{i.maps.event.trigger(this.markers[t-1],"click")}catch(o){this.debug("ViewOnMap::trigger",o.stack)}return this},o.prototype.SetLocations=function(t,o){return this.o.locations=t,o&&this.Load(),this},o.prototype.AddLocations=function(o,i){var e=this;return t.isArray(o)&&t.each(o,function(t,o){e.o.locations.push(o)}),t.isPlainObject(o)&&this.o.locations.push(o),i&&this.Load(),this},o.prototype.AddLocation=function(o,i,e){return t.isPlainObject(o)&&this.o.locations.splice(i,0,o),e&&this.Load(),this},o.prototype.RemoveLocations=function(o,i){var e=this,s=0;return t.isArray(o)?t.each(o,function(t,o){o-s<e.ln&&e.o.locations.splice(o-s,1),s++}):o<this.ln&&this.o.locations.splice(o,1),i&&this.Load(),this},o.prototype.Loaded=function(){return this.loaded},o.prototype._init=function(){this.ln=this.o.locations.length;for(var o=0;o<this.ln;o++){var i=t.extend({},this.o.shared);this.o.locations[o]=t.extend(i,this.o.locations[o]),this.o.locations[o].html&&(this.o.locations[o].html=this.o.locations[o].html.replace("%index",o+1),this.o.locations[o].html=this.o.locations[o].html.replace("%title",this.o.locations[o].title||""))}return this.map_div=t(this.o.map_div),this.controls_wrapper=t(this.o.controls_div),this},o.prototype.Load=function(o){t.extend(!0,this.o,o),o&&o.locations&&(this.o.locations=o.locations),this._init(),i.maps.visualRefresh=!1===this.o.visualRefresh?!1:!0,this.init_map(),this.create_objMap(),this.add_markers_to_objMap(),1<this.ln&&this.o.generate_controls||this.o.force_generate_controls?(this.o.generate_controls=!0,this.generate_controls()):this.o.generate_controls=!1;var e=this;if(this.loaded)this.perform_load();else{i.maps.event.addListenerOnce(this.oMap,"idle",function(){e.perform_load()}),i.maps.event.addListener(this.oMap,"resize",function(){e.canvas_map.css({width:e.map_div.width(),height:e.map_div.height()})});for(var s in this.o.listeners){var n=this.oMap,a=this.o.listeners[s];this.o.listeners.hasOwnProperty(s)&&i.maps.event.addListener(this.oMap,s,function(t){a(n,t)})}}return this.loaded=!0,this},o}(),"function"==typeof define&&define.amd?define(function(){return a}):o.Maplace=a}(jQuery,this,google),jQuery(function(t){if(0!==t("#gmap").length){var o=function(o){t.each(maplace.markers,function(i,e){e.officeID=o[i].officeID,google.maps.event.addListener(e,"click",function(){t.each(maplace.markers,function(t,o){o.setIcon(o.iconNoActive)}),this.setIcon(this.iconActive),"false"==t("h4.panel-title a[href='#"+this.officeID+"']").attr("aria-expanded")&&t("#"+this.officeID).collapse("show").closest(".panel-default").siblings().find(".panel-collapse").collapse("hide")})}),t("#controls-custom .panel-collapse").off("shown.bs.collapse").on("shown.bs.collapse",function(){var o="#"+this.id,i=parseInt(t(this).closest(".panel").find("a.location").attr("data-load"));maplace.current_index!=i-1&&t.each(maplace.markers,function(t,e){o==="#"+e.officeID?(maplace.ViewOnMap(i),e.setIcon(e.iconActive)):e.setIcon(e.iconNoActive)})})},i={"Map Style":[{featureType:"landscape",stylers:[{visibility:"on"},{saturation:8},{lightness:62},{hue:"#ff3300"}]},{featureType:"water",stylers:[{saturation:-100},{lightness:-2}]},{featureType:"poi",stylers:[{visibility:"on"},{hue:"#ff2b00"},{saturation:-9},{lightness:26}]}]};window.maplace=new Maplace({locations:t.extend(!0,[],locationData.showroom),generate_controls:!1,controls_on_map:!1,map_div:"#gmap",controls_type:"list",start:0,styles:i,map_options:{mapTypeControl:!1}}),maplace.Load(),o(t.extend(!0,[],locationData.showroom));var e=t("#controls-custom .nav-tabs");e.length&&e.find("li").on("click",function(i){var e=t(this).find("a").attr("aria-controls");maplace.Load({locations:t.extend(!0,[],locationData[e])}),o(t.extend(!0,[],locationData[e]))}),""!=window.location.hash&&setTimeout(function(){var o=window.location.hash;t(".store-locator-list .nav-tabs a[href="+o+"]").trigger("click")},500)}});