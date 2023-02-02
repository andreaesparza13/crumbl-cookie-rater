class UsersController < ApplicationController
   skip_before_action :authorize, only: [:create]

   def show
      render json: @current_user
   end

   def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
   end

   def update 
      user = @current_user.update!(user_params)
      render json: user, status: :accepted
   end

   def destroy
      user = User.find(params[:id])
      user.destroy
   end

   private

   def user_params
      params.permit(:first_name, :last_name, :username, :date_of_birth, :password, :avatar)
   end

end
