$('#button').click(function (){
    let toAdd = $('input[name=listItem]').val();
    $('ol').append('<li>' + toAdd + '</li>');
});