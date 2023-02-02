class AddDescriptionColumnToCookie < ActiveRecord::Migration[7.0]
  def change
    add_column :cookies, :description, :text
  end
end
