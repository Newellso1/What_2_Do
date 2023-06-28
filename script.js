

// Function to add input to list

$('#button').click(function () {
    if ($('ol li').length < 14) {
        let toAdd = $('input[name=listItem]').val();
        $('ol').append('<li> ' + toAdd + ' <span><i class="fa-solid fa-circle-xmark"></i></span>' + '</li>');
        $('input[name=listItem]').val('');
    } else {
        $('#button').css('color', 'rgba(255, 99, 71, 0.877)');
        $('#trash').effect('shake', {distance: 1});
    }
});

// Function to delete whole list

$('#trash').click(function () {
    $('.listContainer li').remove();
    $('#button').css('color', 'var(--cerulean)')
})

// Code to make list sortable (desktop only)

$('ol').sortable();

// Function to delete individual list items

$('ol').on('click', 'li span', function () {
    $(this).closest('li').remove();
    $('#button').css('color', 'var(--cerulean)')
})



