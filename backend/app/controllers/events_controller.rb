class EventsController < ApplicationController
    before_action :set_event, only: [:show, :update, :destroy]
    before_action :authenticate_admin, only: [:destroy, :index]

    def index
        render json: Event.all, status: :ok #200
    end

    # get '/events'
    def show 
        render json: @event, serializer: EventDetailSerializer, status: :ok
    end

    def create
        event = current_admin.create_events.create!(events_params)
        render json: event, status: :created
    end

    def update
        event = Event.find(params[:id])
        event.update!(event_params)
        render json: @event, status: :ok
    end

    def destroy
        Event.find(params[:id]).destroy!
    end

    private

    def set_event
        @event = Event.find(params[:id])
    end

    def authorize_admin
        return if  current_admin?
        render json: { errors: "You are not permitted to perform that action." }, status: :forbidden #403
    end

    #   t.string :title
    #   t.string :activity
    #   t.text :description
    #   t.string :location
    #   t.datetime :starts
    #   t.datetime :ends

    def event_params
        params.permit(:title, :activity, :description, :starts, :ends)
    end

end
