

// Function to add input to list

$('#button').click(function (){
    let toAdd = $('input[name=listItem]').val();
    $('ol').append('<li> ' + toAdd + ' <span><i class="fa-solid fa-circle-xmark"></i></span>' + '</li>');
    $('input[name=listItem]').val('');
});

// Function to delete whole list

$('#trash').click(function(){
    $('.listContainer li').remove();
})

// Code to make list sortable (desktop only)

$('ol').sortable();

// Function to delete individual list items

$('ol').on('click', 'li span', function(){
    $(this).closest('li').remove();
})