class EventsController < ApplicationController
  def index
  end

  def show
    render json: {
        event: {
            logo: 'http://25.media.tumblr.com/ab97c5a03e4d193543fdb4f37cdf5de1/tumblr_mpqlmhjfff1qz4u07o1_500.gif',
            title: 'aowihvaoiwevhawovh',
            time: '6:00pm-10:00pm PST',
            prize: '$10K',
            match_code: 'GDC2016'
        },
        player: {
            name: 'KYLERULES',
            video: 'http://www.quirksmode.org/html5/videos/big_buck_bunny.mp4'
        },
        game: {
            title: 'Trivia Burst',
            publisher_name: 'E5 Interactive LLC'
        }
    }, status: :ok
  end
end
