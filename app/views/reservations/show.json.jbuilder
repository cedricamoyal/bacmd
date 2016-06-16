json.extract! @reservation, :id,:user_id, :flight_id, :rows,:columns, :name
json.url reservation_url(@reservation, format: :json)
