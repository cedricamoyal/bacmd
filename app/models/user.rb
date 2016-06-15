# login $ rails generate model User name:text email:text password_digest:text

# add gems:
      # gem 'annotate'
      # gem 'pry-rails'
      # login $ bundle
      # login $ annotate
# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  name            :text
#  email           :text
#  password_digest :text
#  admin           :boolean          default(FALSE)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  has_secure_password
  has_many :reservations
  has_many :flights, :through => :reservations
end
