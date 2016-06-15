class PlanesController < ApplicationController


  def index
    @planes = Plane.all


  end

  def show
    @plane = Plane.find params[:id]
  end


  def new
    if @current_user && @current_user.admin
    @plane = Plane.new
    end
  end

  def create
      if @current_user && @current_user.admin
    plane = Plane.create plane_params

    redirect_to plane
     end
  end

  def edit
    if @current_user && @current_user.admin
    @plane = Plane.find params[:id]
    end
  end

  def update
    if @current_user && @current_user.admin
    plane = Plane.find params[:id]
    plane.update plane_params

    redirect_to plane
    end
  end

  def destroy
    if @current_user && @current_user.admin
    plane = Plane.find params[:id]
    plane.destroy

    redirect_to planes_path
    end
  end

  private

  def plane_params
    params.require(:plane).permit(:name, :rows, :columns)
  end


end

#  id      :integer          not null, primary key
#  name    :text
#  rows    :integer
#  columns :integer
