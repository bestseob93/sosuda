class CreateNotices < ActiveRecord::Migration
  def change
    create_table :notices do |t|
      t.string :noticer
      t.text :notice_title
      t.text :notice_content

      t.timestamps null: false
    end
  end
end
