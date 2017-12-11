$(function() {
    $("#nav-items").append('<li id="home"><a href="link" title="Go to home page.">Home</a></li>');


    $.getJSON('js/acme.json',function(result) {
        $.each(result.navigation, function(i, nav){
            console.log(result);
            var name = result.navigation[i].name;
            console.log(name);

            $("#nav-items").append('<li id="' + name.toLowerCase() + '"><a href="link" title="Go to ' + name + '.">' + name + '</a></li>');

        })
        $('#home').on("click", function( event ){
            event.preventDefault();
            $(document).attr("title", "ACME Home Page");
            $('#homecontent').show();
            $('#product').css('visibility','hidden');
        })
        $('#page-nav').on("click", ":not(:first-child) a", function( event ){
            event.preventDefault();
            var itemname = this.text;
            $("#homecontent").hide();
            $("#product").css('visibility', 'visible');
            var decider;
            if (itemname == result.navigation[0].name){
                decider = 0;
            }
            if (itemname == result.navigation[1].name){
                decider = 1;
            }
            if (itemname == result.navigation[2].name){
                decider = 2;
            }
            if (itemname == result.navigation[3].name){
                decider = 3;
            }
            var tion = result.navigation[decider].description;
            $('#deets').remove();
            $('#details').remove();
            $('#showcase > h1').remove();
            var wholename = result.navigation[decider].name;
            $(document).attr("title", wholename + " | ACME");
            $('#showcase').append('<h1>' + wholename + '</h1>');
            $('#showcase').append('<div id="details">');
            var imgpath = result.navigation[decider].path;
            $('#details').append('<img src="' + imgpath + '" alt="' + itemname + '">');
            $('#details').append('<ul id="deets">');
            $('#deets').append('<li class="description"><strong>Description:</strong><br> ' + tion + '</li>');
            var man = result.navigation[decider].manufacturer;
            $('#deets').append('<li class="manufacturer"><strong>Manufacturer:</strong><br> ' + man + '</li>');
            var score = result.navigation[decider].reviews;
            $('#deets').append('<li class="reviewscore"><strong>Reviews:</strong><br> ' + score + '/5 Stars</li>');
            var price = result.navigation[decider].price;
            $('#deets').append('<li class="price"><strong>Price:</strong> $' + price + '</li>');
            $('#deets').append('</ul>');
            $('#deets').append('</div');
            console.log("Success");
        })

    })
