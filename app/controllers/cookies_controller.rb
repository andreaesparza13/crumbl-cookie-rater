class CookiesController < ApplicationController
   skip_before_action :authorize, only: [:index, :show]

   def index 
      render json: Cookie.all, include: :ratings, status: :ok 
   end

   def show
      cookie = Cookie.find(params[:id])
      render json: cookie, status: :ok 
   end

end
