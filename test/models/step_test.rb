# == Schema Information
#
# Table name: steps
#
#  id         :integer          not null, primary key
#  name       :text
#  trip_id    :integer
#  visit_id   :integer
#  duration   :text
#  position   :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class StepTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
