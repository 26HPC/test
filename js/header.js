$(document).ready(function(){
    // Use jQuery's AJAX function to load the header content from header.html
    $.ajax({
        url: 'transclusion/header.html',
        method: 'GET',
        success: function(data) {
            $('#header-loc').replaceWith(data);
        },
        error: function() {
            $('#header-loc').html('<h1>Error loading header</h1>');
        }
    });
});
