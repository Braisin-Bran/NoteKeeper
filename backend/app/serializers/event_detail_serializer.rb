class EventDetailSerializer < ActiveModel::Serializer

    has_many :admins
    has_many :eventLists

    def admin
        object.admin.username
    end

    def time
        "From #{object.starts_at.strftime("%A %m/%d/%y %l:%m %p")} to #{object.ends_at.strftime("%A %m/%d/%y %l:%m %p")}"
    end

end