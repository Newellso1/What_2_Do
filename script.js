$('#button').click(function (){
    let toAdd = $('input[name=listItem]').val();
    $('ol').append('<li>' + toAdd + '</li>');
    $('input[name=listItem]').val('');
});

$('#trash').click(function(){
    $('.listContainer li').remove();
})
$('ol').sortable();