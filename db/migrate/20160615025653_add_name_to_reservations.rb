# bacmd $ rails generate migration AddNameToReservations name:text

class AddNameToReservations < ActiveRecord::Migration
  def change
    add_column :reservations, :name, :text
  end
end

# bacmd $ rake db:migrate
