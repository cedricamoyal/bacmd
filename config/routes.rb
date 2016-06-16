Rails.application.routes.draw do

  resources :users, :planes, :flights, :reservations

  get "/login" => 'session#new', :as => 'login'
  post "/login" => 'session#create'
  delete "/logout" => 'session#destroy', :as => 'logout'

  get "/search" => "flights#search", :as => 'flight_search'
root "session#new"

end
