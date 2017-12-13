    $(function () {
        console.log("it works!");
        document.getElementById("product").style.display = "none";

        document.getElementById("homecontent").style.display = "block";



    $.ajax({
        url :"js/acme.json",
        dataType : "json",
        success : function(data) {
            console.log(data);
            var i_one = data.items.item_one;
            var i_two = data.items.item_two;
            var i_three = data.items.item_three;
            var i_four = data.items.item_four;

            console.log("items" + i_one );
            console.log("items" + i_two);
            console.log("items" + i_three );
            console.log("items" + i_four );



                $("#anvils").text(i_one);
                $("#explosive").text(i_two);
                $("#decoys").text(i_three);
                $("#traps").text(i_four);



        }
    });


        // Insert links in the nav
        function getData(itemName) {
            // Get the data from the local from acme folder
            if(itemName==="Home"){
                document.getElementById("product").style.display = "none";

                document.getElementById("homecontent").style.display = "block";

                $("title").html(itemName + ' | ACME');

            }
            else{

                document.getElementById("homecontent").style.display = "none";

                document.getElementById("product").style.display = "block";


                $.ajax({
                    url :"js/acme.json",
                    dataType : "json",
                    success : function(data) {
                        console.log(data);
                        var name = data[itemName].name;
                        var description = data[itemName].description;
                        var manufacturer = data[itemName].manufacturer;
                        var price = data[itemName].price;
                        var reviews = data[itemName].reviews;
                        var path =data[itemName].path;
                        console.log(" data" + itemName);
                        console.log("name is " + name);
                        console.log("descriptiop is " + description);
                        console.log('manufacturer is: ' + manufacturer);
                        console.log('price is: ' + price);
                        console.log(' reviews is: ' + reviews);
                        console.log("image is" + path);
                        $("title").html(itemName + ' | ACME');
                        $("#displayName").text(name);
                        $("#displayImage").html("<img src=' " + path +" 'alt='anvil'>");
                        $("#displayDescription").text(description);
                        $("#displayManufacturer").text("Made by:" + manufacturer);
                        $("#displayReviews").text("Reviews: " + reviews + " /5 starts");
                        $("#displayPrice").text("Price: $ " + price);

                    }


                });
            }
        }

        // Intercept the menu link clicks
        $("#page-nav").on("click", "a", function (evt) {
            evt.preventDefault();
            console.log('click occured');
            //get the value
            var itemName = $(this).text();
            console.log(itemName);
            getData(itemName);


        });
    });
