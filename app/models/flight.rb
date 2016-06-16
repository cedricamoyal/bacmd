# == Schema Information
#
# Table name: flights
#
#  id          :integer          not null, primary key
#  number      :text
#  origin      :text
#  destination :text
#  flightDate  :date
#  plane_id    :integer
#

class Flight < ActiveRecord::Base
  belongs_to :plane
  has_many :reservations
end
