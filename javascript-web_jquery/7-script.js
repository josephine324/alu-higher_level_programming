$.ajax({
    type: 'GET',
    url: 'https://swapi-api.alx-tools.com/api/people/5/?format=json'
})
.done(function(data) {
    $('#character').text(data.name);
})
.fail(function(status, errorThrown) {
    console.log(status, errorThrown)
})
.always(function() {
    alert("Request complete")
} )
