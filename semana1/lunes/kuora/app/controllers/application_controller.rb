class ApplicationController < ActionController::Base

  include SessionsHelper

  helper SessionsHelper

  protect_from_forgery with: :exception
  
end
