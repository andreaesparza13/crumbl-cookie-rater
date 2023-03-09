class UsersController < ApplicationController
   skip_before_action :authorize, only: [:create, :index]

   def index
      render json: User.all
   end

   def show
      render json: @current_user, include: [:cookies, :ratings], status: :ok
   end

   def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :ok
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
