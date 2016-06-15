# bacmd $ rails generate model Flight --skip

class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|

      t.text :number
      t.text :origin
      t.text :destination
      t.date :flightDate

      t.integer :plane_id


    end
  end
end

# bacmd $ rake db:migrate
# bacmd $ annotate
# bacmd $ rails generate controller Flights index new show edit
