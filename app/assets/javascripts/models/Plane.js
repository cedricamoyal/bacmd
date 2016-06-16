var app = app || {};

app.Plane = Backbone.Model.extend({
  urlRoot: "/planes",
  default: {
    name: "",
    rows: "",
    columns: ""
  },
  initialize: function() {
    console.log("a new plane was create")
  }
})


  //
  // create_table "planes", force: :cascade do |t|
  //   t.text    "name"
  //   t.integer "rows"
  //   t.integer "columns"
  // end
