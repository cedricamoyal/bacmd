# bacmd $ rails generate model Plane --skip

class CreatePlanes < ActiveRecord::Migration
  def change
    create_table :planes do |t|

      t.text :name
      t.integer :rows
      t.integer :columns

    end
  end
end

# bacmd $ rake db:migrate
# bacmd $ annotate
