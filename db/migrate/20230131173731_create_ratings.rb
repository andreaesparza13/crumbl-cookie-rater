class CreateRatings < ActiveRecord::Migration[7.0]
  def change
    create_table :ratings do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :cookie, null: false, foreign_key: true
      t.float :stars

      t.timestamps
    end
  end
end
