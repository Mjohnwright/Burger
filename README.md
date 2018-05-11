# :hamburger: Burger! Burger! Burger!

### Overview

A Node, Express, Handlebars, and MySQL burger app that lets users input the names of burgers they'd like to eat... and then devour them! Please check out the launched app on Heroku here: <strong> https://ancient-reef-11912.herokuapp.com/</strong>

### Functionality
Using an home-grown ORM, the app has 3 basic functions...
  1. <strong>GET</strong> all entries from the MySQL database and display them to the DOM using Handlebars.
  2. <strong>PUT<strong> a selected burger by clicking "Devour It", which...
    * hits an `/burger/eat/:id` route in Express to change its "devoured" status in the MySQL database
    * re-routes the webpage back to the index, where the burger is now in the devoured column (via Handlebars)
  3. <strong>POST<strong> a new burger using the "Place Order" form, which...
    * hits a `/burger/create` route in Express to insert a new burger into the MySQL database
    * re-routes the webpage back to the index, where the burger is now ready to be eaten column (via Handlebars)

### Screenshot
	<img src="public/assets/image/burger_screen_shot.png"  style="width:500px;height:400px;" alt="burger_screen_shot">

