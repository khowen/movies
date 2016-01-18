$(document).ready(function(){
  $('#find-movie').on('click', function() {
     $('.movie-search').html('');
     var $name = $('.quick-find').val();
     var movieData = {};

    $.get('http://www.omdbapi.com/?t=' + $name + '&y=&plot=short&r=json&type=movie&tomatoes=true', function(data) {
      console.log(data);
      if(data.Response === "False") {
        $('.movie-search').append('<p>It looks like we couldn\'t find your movie in our database. Please use the form below!</p>');
      } else {
        $(data).each(function() {
          $('.movie-search').append('<div class="col s10 offset-s1"><div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + data.Poster + '"></div><div class="card-content"><span class="card-title activator grey-text text-darken-4">' + data.Title + '<i class="material-icons right">more_vert</i></span><p><a class="add-movie btn-floating btn-large waves-effect waves-light lime accent-3"><i class="material-icons">add</i></a></p></div><div class="card-reveal"><span class="card-title grey-text text-darken-4">' + data.Title + '<i class="material-icons right">close</i></span><ul><li>Year:' + data.Year +'</li><li>Rated:' + data.Rated +'</li><li>Runtime:' + data.Runtime +'</li><li>IMDB Rating:' + data.imdbRating +'</li><li>Rotten Tomatoes Rating:' + data.tomatoRating +'</li></ul><p>' + data.Plot + '</p></div></div></div>');
        });
        $('.add-movie i').on('click', function(e) {
          $('#title').val(data.Title);
          $('#year').val(data.Year);
          $('#genre').val(data.Genre);
          $('#synopsis').val(data.Plot);
          $('#image').val(data.Poster);
        });
      }
    });
  });
});

