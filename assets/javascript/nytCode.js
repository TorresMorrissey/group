$(document).ready(function(){
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "a617980394da4c8592d6328db5533de0",
      'q': "guns",
      //'begin_date': "",
      //'end_date' : "",
      //'hl' : "",
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      console.log(result.response.docs)
    }).fail(function(err) {
      throw err; 
    });
});