class DashboardController < ApplicationController
  before_filter :authenticate_user!

  def index #all movies for user
    @movies = Movie.first
  end

  def update #update a movie
  end

  def destroy #delete a movie
  end
end
