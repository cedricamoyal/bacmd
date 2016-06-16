
# Make sure you start the app with ` rails new YOURAPPNAMEHERE -d postgresql `
# Then you will need to run ` rake db:create `
# If something doesn’t work, make sure the elephant is at the top of your screen!

class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :fetch_user

  private

    def fetch_user
        @current_user = User.find_by( :id => session[:user_id] ) if session[:user_id].present?
        session[:user_id] = nil unless @current_user.present?
    end

end
