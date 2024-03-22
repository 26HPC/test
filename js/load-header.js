$(document).ready(function(){
    // Use jQuery's AJAX function to load the header content from header.html
    $.ajax({
        url: 'transclusion/load-header.html',
        method: 'GET',
        success: function(data) {
            $('#load-header').replaceWith(data);
        },
        error: function() {
            $('#load-header').html('<h1>Error 404: Failed to load header</h1>');
        }
    });
});
