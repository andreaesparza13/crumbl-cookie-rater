puts "seeding..."

user1 = User.create(first_name: "Andrea", last_name: "Esparza", username: "aesparza", password: "12345", date_of_birth: Date.new(1994, 10, 20), avatar: "https://picresize.com/popup.html?images/rsz_330-3303815_hermione-harrypotter-hermionegranger-hermione-granger-cartoon-character.jpg")
user2 = User.create(first_name: "Darth", last_name: "Vader", username: "dvader", password: "12345", date_of_birth: Date.new(1977, 05, 04), avatar: "https://picresize.com/popup.html?images/rsz_141hb9ikmyhl_sr600pct2c315_piwhitestrippct2cbottomleftpct2c0pct2c35_sclzzzzzzz_fmpng_bg255pct2c255pct2c255.jpg")

cookie1 = Cookie.create(name: "Almost Everything Bagel", release_date: Date.new(2022, 03, 05), average_stars: nil, image: "https://pbs.twimg.com/media/FfnMRYMVQAAB6B2?format=jpg&name=360x360", description: "A cookie rolled in seed mix and topped with cream cheese.")
cookie2 = Cookie.create(name: "Chocolate Potato Chip", release_date: Date.new(2020, 10, 18), average_stars: nil, image: "https://pbs.twimg.com/media/FWmO_PxUYAEdpJH?format=jpg&name=360x360", description: "A savory cookie filled with semi-sweet chocolate chunks and toasted coconut rolled in crushed potato chips and pretzels.")
cookie3 = Cookie.create(name: "Double Trouble", release_date: Date.new(2023, 01, 11), average_stars: nil, image: "https://pbs.twimg.com/media/FGw1KXXVIAENNfF?format=jpg&name=360x360", description: "Semi-sweet chocolate chip cookie and a rich chocolate cookie baked together in perfect harmony.")
cookie4 = Cookie.create(name: "Galaxy Brownie", release_date: Date.new(2019, 11, 10), average_stars: nil, image: "https://pbs.twimg.com/media/FXfZomRVUAAG8Xc?format=jpg&name=360x360", description: "Chocolate brownie cookie, fudge glaze, and candy bits.")
cookie5 = Cookie.create(name: "Sticky Bun", release_date: Date.new(2021, 10, 19), average_stars: nil, image: "https://pbs.twimg.com/media/FHPXJmGUUAACRSr?format=jpg&name=360x360", description: "A butter-vanilla sugar cookie filled with cinnamon roll filling and topped with butterscotch caramel topping, finished with a sprinkle of pecans.")

Rating.create(user: user1, cookie: cookie1, stars: 4.8)
Rating.create(user: user1, cookie: cookie2, stars: 3.9)
Rating.create(user: user1, cookie: cookie3, stars: 2.7)
Rating.create(user: user2, cookie: cookie1, stars: 4.6)
Rating.create(user: user2, cookie: cookie4, stars: 3.7)

puts "...done"