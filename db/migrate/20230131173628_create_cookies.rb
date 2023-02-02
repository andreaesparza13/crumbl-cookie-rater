class CreateCookies < ActiveRecord::Migration[7.0]
  def change
    create_table :cookies do |t|
      t.string :name
      t.date :release_date
      t.float :average_stars

      t.timestamps
    end
  end
end
