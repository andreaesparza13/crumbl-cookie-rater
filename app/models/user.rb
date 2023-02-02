class User < ApplicationRecord
   has_many :ratings
   has_many :cookies, through: :ratings, source: :cookie

   has_secure_password
end
