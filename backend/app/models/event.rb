class Event < ApplicationRecord
    has_many :eventLists
    has_many :admins, through: :eventLists

    validates :title, :activity, :description, :location, :starts, :ends, presence: true
        validates :title, uniqueness: { 
        scope: [:location, :starts],
        message: 'already used for an event at this location starting at the same time'
        }
end
