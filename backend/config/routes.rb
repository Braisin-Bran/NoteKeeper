Rails.application.routes.draw do
  resources :admins
  resources :events
  resources :event_lists

  get "/me", to: "admins#show"
  get "/events", to: "events#show"
  post "/events", to: "events#create"
  patch "/events", to: "events#update"
  delete "/events", to: "events#destroy"
  get "/eventList", to: "event_lists#show"
  post "/eventList", to: "event_lists#create"
  patch "/eventList", to: "event_lists#update"
  delete "/eventList", to: "event_lists#destroy"
  post "/login", to: "sessions#create_admin" 
  delete "/logout", to: "sessions#destroy_admin"


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
