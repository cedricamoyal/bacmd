json.array!(@planes) do |plane|
  json.extract! plane, :id, :name, :rows,:columns
  json.url plane_url(plane, format: :json)
end



  # create_table "planes", force: :cascade do |t|
  #   t.text    "name"
  #   t.integer "rows"
  #   t.integer "columns"
  # end
