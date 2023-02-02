Rails.application.routes.draw do
	resources :ratings, only: [:index, :show, :create, :update, :destroy]
	resources :cookies, only: [:index, :show]
	resources :users, only: [:create, :update, :destroy]

	post '/login', to: "sessions#create"
	get '/me', to: "users#show"

	delete '/logout', to: "sessions#destroy"

	get '/failsafe', to: "sessions#reset_session"

	# Routing logic: fallback requests for React Router.
	# Leave this here to help deploy your app later!
	# get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
