puts "seeding..."

user1 = User.create(first_name: "Andrea", last_name: "Esparza", username: "aesparza", password: "12345", date_of_birth: Date.new(1994, 10, 20))

cookie1 = Cookie.create(name: "Chocolate Chip", release_date: Date.new(2022, 03, 05), average_stars: nil)

rating1 = Rating.create(user: user1, cookie: cookie1, stars: 4.8)

puts "...done"