// Current Location Scripts
$(function () {

    var status = $('#status');

    (function getGeoLocation() {
        status.text('Getting Location...');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;

                // Call the getData function, send the lat and long
                getData(lat, long);

            });
        } else {
            status.text("Your browser doesn't support Geolocation or it is not enabled!");
        }

    })();

    // Get the data from the wunderground API
    function getData(lat, long){
        $.ajax({
            url : "http://api.wunderground.com/api/11c33fe5e1c8a83a/geolookup/conditions/forecast/q/" + lat + "," + long + ".json",
            dataType : "jsonp",
            success : function(data) {
                var location_c = data['location']['city'];
                var location_s = data['location']['state'];
                var temp_f = data['current_observation']['temp_f'];
                var overview = data['current_observation']['weather'];
                var imgrep = data['current_observation']['icon_url'];
                var blow = data['current_observation']['wind_mph'];
                var direc = data['current_observation']['wind_dir'];
                var rain = data.forecast.simpleforecast.forecastday[1].pop;
                var temp_high = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
                var temp_low = data.forecast.simpleforecast.forecastday[0].low.fahrenheit;

                //            console.log(data);
                //
                //            console.log(temp_high, temp_low);

                $("#city-name-add").prepend(location_c + ', ' + location_s);

                $("#city-name").html(location_c + ', ' + location_s);

                let round = Math.round(temp_f);
                $("#cur-temp").html(round + '&deg;F');

                //            $("#outlook").html('<span> <img src=' + imgrep + '><b>' + overview + '</b></span>');
                $("#outlook").html('<span> <b>' + overview + '</b></span>');
                $("#icon").html('<img src='+ imgrep +'>')

                $("#w-info").html('<b>Wind: </b>' + direc + ' ' + blow + ' mph');

                $("#rain-info").html('<b>Precipitation: </b>' + rain + ' %');

                $("#show-high-low").html('<b>' + temp_high + '&deg;F / ' + temp_low + '&deg;F</b>')

                $("#cover").fadeOut(250);
            }
        });
    }

    // A function for changing a string to TitleCase
    function toTitleCase(str){
        return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
});
