class FlightsController < ApplicationController


  def index
    @flights = Flight.all


  end

  def show
    @flight = Flight.find params[:id]
  end


  def new
    if @current_user && @current_user.admin
    @flight = Flight.new
    end
  end

  def create
      if @current_user && @current_user.admin
    flight = Flight.create flight_params

    redirect_to flight
     end
  end

  def edit
    if @current_user && @current_user.admin
    @flight = Flight.find params[:id]
    end
  end

  def update
    if @current_user && @current_user.admin
    flight = Flight.find params[:id]
    flight.update flight_params

    redirect_to flight
    end
  end

  def destroy
    if @current_user && @current_user.admin
    flight = Flight.find params[:id]
    flight.destroy

    redirect_to flights_path
    end

  end

def search

end


  private

  def flight_params
    params.require(:flight).permit(:number, :origin, :destination, :flightDate, :plane_id)
  end


end

# t.text :number
# t.text :origin
# t.text :destination
# t.date :flightDate
#
# t.integer :plane_id
