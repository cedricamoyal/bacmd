# == Schema Information
#
# Table name: planes
#
#  id      :integer          not null, primary key
#  name    :text
#  rows    :integer
#  columns :integer
#

class Plane < ActiveRecord::Base
  has_many :flights
  has_many :reservations, :through => :flights
end
