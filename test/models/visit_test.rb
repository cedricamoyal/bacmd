# == Schema Information
#
# Table name: visits
#
#  id             :integer          not null, primary key
#  name           :text
#  country_id     :integer
#  theme_id       :integer
#  description    :text
#  image          :text
#  visitLatitude  :text
#  visitLongitude :text
#

require 'test_helper'

class VisitTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
