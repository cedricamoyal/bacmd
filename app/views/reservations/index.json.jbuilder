json.array!(@reservations) do |@reservation|
  json.extract! @reservation, :id, :content
  json.url secret_url(@reservation, format: :json)


  #association go here
end
