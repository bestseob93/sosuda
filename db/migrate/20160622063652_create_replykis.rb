class CreateReplykis < ActiveRecord::Migration
  def change
    create_table :replykis do |t|
      t.string :replier
      t.text :reply_content

      t.integer :postki_id

      t.timestamps null: false
    end
  end
end
