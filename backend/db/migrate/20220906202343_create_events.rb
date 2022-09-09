class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :title
      t.string :activity
      t.text :description
      t.string :location
      t.datetime :starts
      t.datetime :ends

      t.timestamps
    end
  end
end
