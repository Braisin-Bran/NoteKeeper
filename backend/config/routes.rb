Rails.application.routes.draw do
  resources :admins
  resources :events
  resources :event_lists

  get "/me", to: "admins#show"
  post "/signup", to:"admins#create"
  get "/events", to: "events#show"
  post "/events", to: "events#create"
  patch "/events", to: "events#update"
  delete "/events", to: "events#destroy"
  post "/eventList", to: "event_lists#create"
  patch "/eventList", to: "event_lists#update"
  delete "/eventList/:id", to: "event_lists#destroy"
  get "/eventList/:admin_id", to: "event_lists#show"
  post "/login", to: "sessions#create_admin" 
  delete "/logout", to: "sessions#destroy_admin"
  

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
