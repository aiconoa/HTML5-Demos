/**
 * Created by thomasgros on 2/4/14.
 */

var geo = document.getElementById("geolocation");
navigator.geolocation.getCurrentPosition(function(position){


    var div = document.createElement("div");
    div.innerHTML = sprintf("<p>You're here (%s, %s)</p>", position.coords.latitude, position.coords.longitude)
        +"<div id='basicMap'></div>";

    //cleaning content
    while (geo.hasChildNodes()) {
        geo.removeChild(geo.lastChild);
    }
    //updating content
    geo.appendChild(div);

    //loads the map
    map = new OpenLayers.Map("basicMap");
    var mapnik         = new OpenLayers.Layer.OSM();
    var fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
    var toProjection   = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
    var position       = new OpenLayers.LonLat(position.coords.longitude, position.coords.latitude).transform( fromProjection, toProjection);
    var zoom           = 15;

    map.addLayer(mapnik);

    var markers = new OpenLayers.Layer.Markers( "Markers" );
    markers.addMarker(new OpenLayers.Marker(position));

    map.addLayer(markers);

    map.setCenter(position, zoom);
});