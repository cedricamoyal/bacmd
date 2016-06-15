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

require 'test_helper'

class FlightTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
