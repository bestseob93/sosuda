class HomeController < ApplicationController
  def index
    @posts = Postki.all
  end

  def write
    postki = Postki.new
    postki.writer = params[:writer]
    postki.content = params[:content]
    postki.save

    redirect_to "/home/index/"
  end

  def reply_write
   replyki = Replyki.new
   replyki.replier = params[:replier]
   replyki.reply_content = params[:recontent]
   replyki.postki_id = params[:id_of_postki]

   if replyki.save
   redirect_to "/home/index"
       else
     render :text => post.errors.messages[:title].first #모델 post에 있는 에러 메시지를 불러옴
   end
   end
end
