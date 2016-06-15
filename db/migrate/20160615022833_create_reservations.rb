# bacmd $ rails generate model Reservation --skip

class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|

      t.integer :user_id
      t.integer :flight_id

      t.integer :rows
      t.integer :columns

      t.timestamps null: false
    end
  end
end

# bacmd $ rake db:migrate
# bacmd $ annotate
# bacmd $ rails generate controller Reservations index new show edit
