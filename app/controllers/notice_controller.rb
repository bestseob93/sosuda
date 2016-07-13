class NoticeController < ApplicationController

  def list
    @notice_post = Notice.all.order("id desc")
  end

  def writego
    noticing = Notice.new
    noticing.noticer = params[:sosuda]
    noticing.notice_title = params[:notice_title]
    noticing.notice_content = params[:content]
    noticing.save

    redirect_to "/notice/list"
  end

  def notice_view
    @view_post = Notice.find(params[:notice_id])
  end

end
