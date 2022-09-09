class EventList < ApplicationRecord
  belongs_to :admin
  belongs_to :event

  validates :title, :eventType, presence: true
    validates :title, uniqueness: { 
    scope: [:title, :eventType],
    message: 'already used that title and that category type for that event list'
    }
end
