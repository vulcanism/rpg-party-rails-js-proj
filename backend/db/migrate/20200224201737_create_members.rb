class CreateMembers < ActiveRecord::Migration[6.0]
  def change
    create_table :members do |t|
      t.string :name
      t.integer :level
      t.string :gender
      t.string :race
      t.string :role
      t.belongs_to :party

      t.timestamps
    end
  end
end
