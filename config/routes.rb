Rails.application.routes.draw do
  root 'events#index'

  get 'events', to: 'events#show'
  get 'players', to: 'players#show'
end
