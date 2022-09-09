class EventListSerializer < ActiveModel::Serializer
  attributes :id, :title, :eventType
  has_one :admin
  has_one :event

  # t.string "title"
  #   t.string "eventType"
  #   t.integer "admin_id", null: false
  #   t.integer "event_id", null: false
  #   t.datetime "created_at", null: false
  #   t.datetime "updated_at", null: false
  #   t.index ["admin_id"], name: "index_event_lists_on_admin_id"
  #   t.index ["event_id"], name: "index_event_lists_on_event_id"
end
