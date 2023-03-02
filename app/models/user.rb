class User < ApplicationRecord
   has_many :ratings
   has_many :cookies, through: :ratings, source: :cookie

   has_secure_password

   validates :username, uniqueness: true, presence: true
   validates :first_name, :last_name, presence: true
   # validates :date_of_birth, presence: true
   validate :validate_age

   private

   def validate_age
      if date_of_birth.present? && date_of_birth > 18.years.ago.to_d
         errors.add(:date_of_birth, 'You must be over 18 years old.')
      end
   end
end