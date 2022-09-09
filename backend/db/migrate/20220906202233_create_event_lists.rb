class CreateEventLists < ActiveRecord::Migration[7.0]
  def change
    create_table :event_lists do |t|
      t.string :title
      t.string :eventType
      t.belongs_to :admin, null: false, foreign_key: true
      t.belongs_to :event, null: false, foreign_key: true

      t.timestamps
    end
  end
end
