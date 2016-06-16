json.array!(@flights) do |flight|
  json.extract! flight, :id, :number,:origin,:destination, :flightDate, :plane_id


  json.url flight_url(flight, format: :json)
  json.plane flight.plane
end
