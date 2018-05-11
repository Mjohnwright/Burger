<h2> Burger! Burger! Burger! </h2>

<h3><strong>Overview</strong></h3>

<p>A Node, Express, Handlebars, and MySQL burger app that lets users input the names of burgers they'd like to eat... and then devour them! Please check out the launched app on Heroku here: https://ancient-reef-11912.herokuapp.com/<p>

<h3>Functionality</h3>
<p>Using an home-grown ORM, the app has 3 basic CRUD functions...</p>

<p><strong>READ</strong> all entries from the MySQL database and display them to the DOM using Handlebars.</p>
<br>
<p><strong>UPDATE</strong> a selected burger by clicking "Devour It", which...</p>
<br>
<ul>
<p>hits an /burger/eat/:id route in Express to change its "devoured" status in the MySQL database</p>
<br>
<p>re-routes the webpage back to the index, where the burger is now in the devoured column (via Handlebars)</p>
<br>

<p><strong>CREATE</strong> a new burger using the "Place Order" form, which...</p>
<br>
<ul>
<p>hits a /burger/create route in Express to insert a new burger into the MySQL database<p>
<br>
<p>re-routes the webpage back to the index, where the burger is now ready to be eaten column (via Handlebars)</p>

<h3><strong>Screenshot</strong></h3>


