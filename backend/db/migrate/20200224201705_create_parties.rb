class CreateParties < ActiveRecord::Migration[6.0]
  def change
    create_table :parties do |t|
      t.string :name
      t.string :quest
      t.string :color

      t.timestamps
    end
  end
end
