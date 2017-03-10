Rails.application.routes.draw do

  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'

  get    '/answer_one', to: 'questions#answer_one'

  resources :questions do 
    resources :answers
  end

  resources :users do 
    resources :questions do
      resources :answers
    end
    resources :answers
  end



  root 'mainpage#index'
end
