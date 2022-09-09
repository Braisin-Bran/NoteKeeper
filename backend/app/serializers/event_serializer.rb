class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :activity, :description, :location, :starts, :ends

  # t.string "title"
  # t.string "activity"
  # t.text "description"
  # t.string "location"
  # t.datetime "starts"
  # t.datetime "ends"
  # t.datetime "created_at", null: false
  # t.datetime "updated_at", null: false
end
