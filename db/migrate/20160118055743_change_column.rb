class ChangeColumn < ActiveRecord::Migration
  def change
    change_column :movies, :year, :string
  end
end
