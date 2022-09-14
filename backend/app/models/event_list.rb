class EventList < ApplicationRecord
  belongs_to :admin
  belongs_to :event

  validates :title, :eventType, presence: true
end
