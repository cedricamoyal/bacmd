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

var seatrow
var seatcolumn
var seatcolumnSent


var createPixel = function(column, row) {
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < column; j++) {
            $('<button/>', {
                'class': 'pixel',
                'data-column': alphabet[j],
                'data-column2':j,
                'data-row': i+1,
                'width': 30 / column + 'vw',
                'height': 3 + 'vh'

            }).appendTo('.seatPanel');
        }
    }
    var selectedSeat=$('fake')


    $('button.pixel').on('click', function(){
      console.log($(this).data("row"));
      console.log($(this).data("column"));
      // selectedSeat.css('background', 'none');
      selectedSeat.css('background', 'none');
      selectedSeat=$(this)
      $(this).css('background', 'red');

      seatrow = $(this).data("row")
      seatcolumn = $(this).data("column")
      seatcolumnSent = $(this).data("column2")
      $('.selectSeatShow').text('Your Seat : ' + seatrow +seatcolumn )
      // $('button[data-column='seatcolumn'"][data-row="'seatrow'"]').css(('background', 'red'))
        $('button[data-column=' + seatcolumn + '][data-row=' + seatrow + ']').css('background', 'green')
      // selectedSeat = $(this)
      // console.log($('button[data-column=' + seatcolumn + '][data-row=' + seatrow + ']'));
    });
    // $('button.pixel"[data-column='seatcolumn']"').css('background', 'red')
  }


var sendToReservation = function () {
  $("#submitSeat").on('click',function(){

    var reservation = new app.Reservation();

// debugger;
      reservation.set({
        flight_id : selectedFlightId,
           columns: seatcolumnSent,
              rows: seatrow,
              user_id: parseInt($("#current_user").val())
      });

      reservation.save();
      // reservations.add(reservation);

          console.log('datashouldbe sendt');

        })
      };


var creatSeatPanel =
 function(column, row){

createPixel(column, row)
createBoard(column, row)
}



var selectedFlightId
var selectedPlanesId

var updateFlightInfo = function(selectedFlight) {

selectedFlight[0].number
selectedFlight[0].destination
 selectedFlightId = selectedFlight[0].id
 selectedPlanesId=selectedFlight[0].plane_id


var tr = $("<tr>");
tr.append($("<td>").text(selectedFlight[0].flightDate));
// a = $("<a>").attr("href", "#flight/" + selectedFlight[0].number);
// a.text(selectedFlight[0].number);
// td = $("<td>").html(a);
//
// tr.append(td);
tr.append($("<td>").text(selectedFlight[0].number));

tr.append($("<td>").text(selectedFlight[0].origin + " > " + selectedFlight[0].destination))



$('#myFlightTable>tbody').append(tr);


  console.log(selectedFlight)

  //from here to put in to the template
}

var planeColume
var planeRow

var updatePlaneInfo = function (slectedPlanes) {
 planeColume = slectedPlanes[0].columns
 planeRow = slectedPlanes[0].rows
 creatSeatPanel(planeColume, planeRow)

 slectedPlanes[0].name



var tr = $("<tr>");
tr.append($("<td>").text(slectedPlanes[0].name));
// a = $("<a>").attr("href", "#flight/" + selectedFlight[0].number);
// a.text(selectedFlight[0].number);
// td = $("<td>").html(a);
//
// tr.append(td);
tr.append($("<td>").text(slectedPlanes[0].rows));

tr.append($("<td>").text(slectedPlanes[0].columns))


tr.append($("<td>").text(slectedPlanes[0].columns * slectedPlanes[0].rows))

$('#myPlaneTable>tbody').append(tr);


  console.log(selectedFlight)


}





app.FlightReserveView = Backbone.View.extend({

    el: "#main", //referere an existing element with the id of main

    render: function(flightNumber) {
        console.log("App view for flight reserve should be rendered now")
        var appViewTemplate = $("#flightReserveTemplate").html();
        //set the html of the element with the id of main to be that appViewTemplate, make sure to use the keyword 'this'
        var flights = new app.Flights();
        var planes = new app.Planes();
        var reservations = new app.Reservations();

        flights.fetch().done(function(flights) {
            allFlights = flights;
            selectedFlight = _.filter(allFlights, function(flight) {
                return flight.number === flightNumber
            })
            updateFlightInfo(selectedFlight);
            planes.fetch().done(function(planes){
              allPlanes = planes;
              slectedPlanes = _.filter(allPlanes, function(plane) {
                return plane.id === selectedPlanesId
              });
              updatePlaneInfo(slectedPlanes);
              reservations.fetch().done(function(reservations) {
                console.log(reservations)
                allReservations = reservations;
                slectedReservation = _.filter(allReservations, function(reservation) {
                  return reservation.flight_id === selectedFlightId
                })

                _.each(slectedReservation, function(reservation) {
                  var row = reservation.data("row");
                  var column = reservation.data("column");

                })
                sendToReservation()

              });
            })
        });


        this.$el.html(appViewTemplate)



}})



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
