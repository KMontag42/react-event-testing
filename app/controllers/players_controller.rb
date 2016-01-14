class PlayersController < ApplicationController
  def show
    render json: {
      player: {
        name: 'SRSLY HE IS THE COOLEST',
        score: '666,666,666',
        date: '1/14/2016',
        video: 'http://techslides.com/demos/sample-videos/small.mp4'
      }
    }, status: :ok
  end
end
