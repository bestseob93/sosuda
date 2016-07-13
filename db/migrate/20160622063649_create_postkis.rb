class CreatePostkis < ActiveRecord::Migration
  def change
    create_table :postkis do |t|
      t.string :writer
      t.text :content

      t.timestamps null: false
    end
  end
end
