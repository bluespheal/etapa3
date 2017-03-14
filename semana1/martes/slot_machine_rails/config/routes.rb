Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "rolls#home"
  post "rolls", to: "rolls#rolling"
end
