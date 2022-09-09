class AdminsController < ApplicationController
    skip_before_action :authenticate_admin, only: [:show]

    def index
        render json: Admin.all 
    end

    # get '/me'
    def show 
        current_admin = Admin.find_by_id(session[:admin_id])
        if current_admin
            render json: current_admin, status: :ok
        else
            render json: { errors: "No Active Sessions" }, status: :unauthorized #401
        end
    end

    private

    # t.string :name
    # t.string :username
    # t.string :email

    def admin_params
        params.permit(:username, :password, :password_confirmation)
    end

end
