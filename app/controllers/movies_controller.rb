class MoviesController < ApplicationController
  before_filter :authenticate_user!

  def index #show all my movies
    @movies = current_user.movies
  end

  def new #form for a new movie/find feature
    @movie = Movie.new
  end

  def create #post for the new
    if user_signed_in?
      movie = params.require(:movie).permit(:year, :genre, :synopsis, :image_url, :title)
      movie[:user_id] = current_user.id
      Movie.create(movie)
      redirect_to movies_path
    end
  end

  def show #show 1 movie
    @movie = Movie.find(params[:id])
  end

  def edit #edit a movie's details form
    @movie = Movie.find(params[:id])
  end

  def update #put/patch to actually update
    movie = Movie.find(params[:id])
    movie.update_attributes(params.require(:movie).permit(:year, :genre, :synopsis, :image_url, :title))
    redirect_to movie_path(movie)
  end

  def destroy #delete a movie
    @movie = Movie.find(params[:id])
    @movie.destroy
    redirect_to movies_path
  end
end
