class CookieSerializer < ActiveModel::Serializer
	attributes :id, :name, :average_stars, :release_date, :image, :description

	def average_stars
		sum=0
		self.ratings.each do |x|
			sum += x.stars
		end
		average = sum / self.ratings.count
		return average
	end
end
