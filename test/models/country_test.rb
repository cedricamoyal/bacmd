# == Schema Information
#
# Table name: countries
#
#  id               :integer          not null, primary key
#  name             :text
#  location_id      :integer
#  capitalCity      :text
#  currency         :text
#  population       :text
#  area             :text
#  popDensity       :text
#  flag             :text
#  visa             :text
#  capitalLatitude  :text
#  capitalLongitude :text
#  language         :text
#

require 'test_helper'

class CountryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
