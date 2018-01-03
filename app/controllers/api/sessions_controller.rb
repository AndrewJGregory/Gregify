class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["Incorrect username or password."], status: 422
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: ['Nobody is logged in'], status: 422
    end
  end
end
