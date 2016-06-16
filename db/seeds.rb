User.destroy_all

cedric = User.create :name => 'Cedric', :email => 'cedric@ga.co', :password => 'chicken', :password_confirmation => 'chicken', :admin => true

monali = User.create :name => 'Monali', :email => 'monali@ga.co', :password => 'chicken', :password_confirmation => 'chicken', :admin => true

donn = User.create :name => 'Donn', :email => 'donn@ga.co', :password => 'chicken', :password_confirmation => 'chicken', :admin => true
