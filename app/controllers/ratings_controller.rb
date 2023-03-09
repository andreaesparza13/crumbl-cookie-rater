class RatingsController < ApplicationController
   skip_before_action :authorize, only: [:index, :show]

   def index 
      render json: Rating.all
   end

   def show
      render json: Rating.find(params[:id])
   end

   def create
      if @current_user
         rating = @current_user.ratings.create!(params[rating_params])
         render json: rating, status: :created 
      else
         render json: {error: "Not authorized"}, status: :unauthorized
      end      
   end

   def update
      if @current_user
         rating = @current_user.ratings.find(params[:id]).update!(rating_params)
         render json: rating, status: :accepted
      else
         render json: {error: "Not authorized"}, status: :unauthorized
      end
   end

   def destroy 
      if @current_user
         rating = @current_user.ratings.find(params[:id])
         rating.destroy
      else
         render json: {error: "Not authorized"}, status: :unauthorized
      end
   end

   private

   def rating_params
      params.permit(:user_id, :cookie_id, :stars)
   end
end
