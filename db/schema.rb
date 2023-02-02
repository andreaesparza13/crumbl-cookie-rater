ActiveRecord::Schema[7.0].define(version: 2023_01_31_193614) do
  create_table "cookies", force: :cascade do |t|
    t.string "name"
    t.date "release_date"
    t.float "average_stars"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image"
    t.text "description"
  end

  create_table "ratings", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "cookie_id", null: false
    t.float "stars"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cookie_id"], name: "index_ratings_on_cookie_id"
    t.index ["user_id"], name: "index_ratings_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "password_digest"
    t.date "date_of_birth"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "avatar"
  end

  add_foreign_key "ratings", "cookies", column: "cookie_id"
  add_foreign_key "ratings", "users"
end
