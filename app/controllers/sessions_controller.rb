class SessionsController < ApplicationController
   skip_before_action :authorize, only: [:create]

   def create
      user = User.find_by(username: params[:username])
      if user&.authenticate(params[:password])
         session[:user_id] = user.id 
         render json: user
      else
         render json: { error: "Invalid username or password" }, status: :unauthorized
      end
   end

   def show
      render json: @current_user
   end

   def destroy
      session.delete :user_id
      head :no_content
   end

   def reset_session
      p session 
      @_request.reset_session
      p session
   end

end