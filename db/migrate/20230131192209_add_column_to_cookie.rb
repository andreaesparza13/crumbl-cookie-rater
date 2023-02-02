class AddColumnToCookie < ActiveRecord::Migration[7.0]
  def change
    add_column :cookies, :image, :string
  end
end
