class Admin < ApplicationRecord
    has_many :eventLists
    has_many :event, through: :eventLists

    has_secure_password
    validates :username, presence: true, uniqueness: true
end
