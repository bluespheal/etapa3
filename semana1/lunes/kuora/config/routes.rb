Rails.application.routes.draw do

  resources :users do 
    resources :questions do
      resources :answers
    end
    resources :answers
  end



  root 'mainpage#index'
end
