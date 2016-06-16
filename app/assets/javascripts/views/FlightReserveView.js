var app = app || {};


var arrayTotal;
var createBoard = function(column, row) {
    arrayTotal = []
    for (var i = 0; i < column; i++) {
        arrayTotal[i] = [];
        for (var j = 0; j < row; j++) {
            arrayTotal[i][j] = ' ';
        }
    }
    return arrayTotal;
}

var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

var createPixel = function(column, row) {
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < column; j++) {
            $('<button/>', {
                'class': 'pixel',
                'data-i': j,
                'data-j': i,
                'width': 30 / column + 'vw',
                'height': 80 / row + 'vh'

            }).appendTo('.seatPanel');
        }
    }
}

var creatSeatPanel =
 function(column, row){

createPixel(column, row)
createBoard(column, row)
}




var slectedPlanesId

var updateFlightInfo = function(slectedFlight) {

slectedFlight[0].number
slectedFlight[0].destination
 slectedPlanesId=slectedFlight[0].plane_id

var tr = $("<tr>");
tr.append($("<td>").text(slectedFlight[0].flightDate));
// a = $("<a>").attr("href", "#flight/" + slectedFlight[0].number);
// a.text(slectedFlight[0].number);
// td = $("<td>").html(a);
//
// tr.append(td);
tr.append($("<td>").text(slectedFlight[0].number));

tr.append($("<td>").text(slectedFlight[0].origin + " > " + slectedFlight[0].destination))


tr.append($("<td>").text(slectedFlight[0].number))

$('#myFlightTable>tbody').append(tr);


  console.log(slectedFlight)

  //from here to put in to the template
}

var planeColume
var planeRow

var updatePlaneInfo = function (slectedPlanes) {
 planeColume = slectedPlanes[0].columns
 planeRow = slectedPlanes[0].rows
 createPixel(planeColume, planeRow)



 slectedPlanes[0].name



var tr = $("<tr>");
tr.append($("<td>").text(slectedPlanes[0].name));
// a = $("<a>").attr("href", "#flight/" + slectedFlight[0].number);
// a.text(slectedFlight[0].number);
// td = $("<td>").html(a);
//
// tr.append(td);
tr.append($("<td>").text(slectedPlanes[0].rows));

tr.append($("<td>").text(slectedPlanes[0].columns))


tr.append($("<td>").text(slectedPlanes[0].columns * slectedPlanes[0].rows))

$('#myPlaneTable>tbody').append(tr);


  console.log(slectedFlight)


}





app.FlightReserveView = Backbone.View.extend({




    el: "#main", //referere an existing element with the id of main

    render: function(flightNumber) {
        console.log("App view for flight reserve should be rendered now")
        var appViewTemplate = $("#flightReserveTemplate").html();
        //set the html of the element with the id of main to be that appViewTemplate, make sure to use the keyword 'this'
        var flights = new app.Flights();
        var planes = new app.Planes();

        flights.fetch().done(function(flights) {
            allFlights = flights;
            slectedFlight = _.filter(allFlights, function(flight) {
                return flight.number === flightNumber
            })

            updateFlightInfo(slectedFlight);


                    planes.fetch().done(function(planes){
                      allPlanes = planes;
                      slectedPlanes = _.filter(allPlanes, function(plane) {
                        return plane.id === slectedPlanesId
                      })


                      updatePlaneInfo(slectedPlanes);

                    })



        });


        this.$el.html(appViewTemplate)

    }
})



//
// app.SecretView = Backbone.View.extend({
//   tagName: 'li', //$("<li>")
//   render: function() {
//
//
// var content = this.model.get("content");
//
//     this.$el.text(content);
//     this.$el.prependTo('#secrets');
//
//   }
// })

// create_table "flights", force: :cascade do |t|
//   t.text    "number"
//   t.text    "origin"
//   t.text    "destination"
//   t.date    "flightDate"
//   t.integer "plane_id"
// end
//
// create_table "planes", force: :cascade do |t|
//   t.text    "name"
//   t.integer "rows"
//   t.integer "columns"
// end
//
// create_table "reservations", force: :cascade do |t|
//   t.integer  "user_id"
//   t.integer  "flight_id"
//   t.integer  "rows"
//   t.integer  "columns"
//   t.datetime "created_at", null: false
//   t.datetime "updated_at", null: false
//   t.text     "name"
// end
