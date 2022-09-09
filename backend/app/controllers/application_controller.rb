class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :render_validation_errors
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    before_action :authenticate_admin

private

  def current_admin
    @current_admin ||= Admin.find_by_id(session[:admin_id])
  end

  def authenticate_admin
    return if current_admin
    render json: {errors: {Admin: "not authorized"}}, status: :unauthorized #401
  end

  def render_uprocessable_entity(invalid)
    render json: {errors: invalid.record.errors}, status: :unprocessable_entity #422
  end

  def render_not_found(e)
    render json: { errors: e.message }, status: :not_found #404
  end

      
end
