/*
A simple code for Wordpress REST API, get using jquery or Axios and display the result on html element.
*/

/* JQuery Approach */

jQuery(document).ready(function($){	
	$.get("http://rvb.test/wp-json/wp/v2/posts/?per_page=12", function (posts) {
        var ourHTMLString = "";  		
    		$.each(posts, function(index, post) {
                ourHTMLString += '<h2>' + post.title['rendered']  + '</h2>';
            });
	/* It will display title and content in html element with ID 'res' */
        document.getElementById('res').innerHTML = ourHTMLString;
    });
});



/* Axios Approach 
Make it sure you add the Axios on your themes
wp_enqueue_script( 'axious-scripts',  get_stylesheet_directory_uri() . '/js/api.js');
wp_enqueue_script( 'axios', 'https://unpkg.com/axios/dist/axios.min.js' );
*/

/* This part should be added on your api.js 
   You can change the link into your own URL "http://your-link/wp-json/wp/v2/posts/?per_page=12"
   It will display title and content in html element with ID 'res'
*/

function displayData() {    
    var restAPI = "";
    axios
    .get("http://rvb.test/wp-json/wp/v2/posts/?per_page=12")        
        .then(response => {
        this.data = response.data;
        this.data.forEach((post) => {
            restAPI += "<h1>" + post.title.rendered + "</h1>";
            restAPI += "<p>" + post.content.rendered + "</p>";
        });
        document.getElementById('res').innerHTML = restAPI;
    })
}
