class PlayersController < ApplicationController
  def show
    render json: {
      player: {
        name: 'SRSLY HE IS THE COOLEST',
        score: '666,666,666',
        date: '1/14/2016',
        video: 'http://techslides.com/demos/sample-videos/small.mp4',
        avatar: 'http://assets0.ordienetworks.com/images/GifGuide/DealWithIt/tumblr_lh6sayYpIJ1qzaxefo1_400.gif'
      }
    }, status: :ok
  end
end
