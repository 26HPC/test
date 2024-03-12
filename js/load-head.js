$(document).ready(function(){
    // Use jQuery's AJAX function to load the header content from header.html
    $.ajax({
        url: 'transclusion/load-head.html',
        method: 'GET',
        success: function(data) {
            $('#load-head').replaceWith(data);
        },
        error: function() {
            $('#load-head').html('<h1>Error 404: Failed to load `head` element</h1>');
        }
    });
});

$.ajax({
  url: "js/load-header.js",
  success: function(response) {
    const scriptContent = response.match(/<script>(.*?)<\/script>/)[1]; // Extract script content
    eval(scriptContent); // Execute the script content (use with caution)
  }
});
