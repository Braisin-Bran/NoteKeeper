class Event < ApplicationRecord
    has_many :eventLists
    has_many :admins, through: :eventLists

    validates :title, :activity, :description, :location, :starts, :ends, presence: true
        
end
