module ApplicationHelper

  def get_connection_status(user)
    return nil if current_user == user
    
    current_user.my_connection(user).last.status
  end

  def link_active_class(url)
    current_page?(url) ? ' active' : ''
  end
end
