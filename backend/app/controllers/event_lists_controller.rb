class EventListsController < ApplicationController

    def index
        render json: EventList.all, status: :ok #200
    end
    
    def show
        render json: EventList.find(params[:id]),  status: :ok
    end

    def create
        group = EventList.create!(eventList_params)
        render json: eventList, status: :created # 201 status code
    end

    def update
        eventList = EventList.find(params[:id])
        eventList.update!(eventList_params)
        render json: @eventList, status: :ok
    end

    def destroy
        EventList.find(params[:id]).destroy!
    end


    private

    # t.string :title
    # t.string :eventType
    # t.belongs_to :admin, null: false, foreign_key: true
    # t.belongs_to :event, null: false, foreign_key: true

    def eventList_params
        params.permit(:title, :eventType)
    end
end
