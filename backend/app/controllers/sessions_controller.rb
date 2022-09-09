class SessionsController < ApplicationController
    skip_before_action :authenticate_admin

    # POST '/login'
    def create_admin
        admin = Admin.find_by(username: params[:username])
        if admin&.authenticate(params[:password])
            session[:admin_id] = admin.id
            render json: admin, status: :ok
        else
            render json: { errors: 'Invalid credentials' }, status: :unauthorized #401
        end
    end

    # DELETE '/logout'
    def destroy_admin
        if current_admin
            session.clear
        else
            render json: { errors: 'No active session'}, status: :unauthorized #401
        end
    end

end