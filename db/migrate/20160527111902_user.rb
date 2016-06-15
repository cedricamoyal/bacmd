# project2cedric $  rails generate migration User

class User < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.text :name
      t.text :email
      t.text :password_digest
      t.boolean :admin, :default => false

      t.timestamps null: false
    end
  end
end

# project2cedric $ rake db:create
#
# project2cedric $ rake db:migrate
#
# project2cedric $ rake db:seed
