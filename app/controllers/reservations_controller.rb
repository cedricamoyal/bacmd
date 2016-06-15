class ReservationsController < ApplicationController

    def index
      @reservations = Reservation.all
      @users = User.all
    end

    def show
          @reservation = Reservation.find params[:id]
    end

    def new
      @reservation = Reservation.new
    end

    def create
      reservation = Reservation.create reservation_params

      redirect_to reservation
    end

    def edit
      @reservation = Reservation.find params[:id]
    end

    def update
      reservation = Reservation.find params[:id]
      reservation.update reservation_params

      redirect_to reservation
    end

    def destroy
      reservation = Reservation.find params[:id]
      reservation.destroy

      redirect_to reservations_path
    end

    private

    def reservation_params
      params.require(:reservation).permit(:user_id, :flight_id, :rows, :columns, :name)
    end

end


# t.integer :user_id
# t.integer :flight_id
#
# t.integer :rows
# t.integer :columns
