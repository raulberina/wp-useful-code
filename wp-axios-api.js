/* Query Approach */

jQuery(document).ready(function($){	
	$.get("http://rvb.test/wp-json/wp/v2/posts/?per_page=12", function (posts) {
        var ourHTMLString = "";  		
    		$.each(posts, function(index, post) {
                ourHTMLString += '<h2>' + post.title['rendered']  + '</h2>';
            });
        document.getElementById('res').innerHTML = ourHTMLString;
    });
});


/* Axios Approach */
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