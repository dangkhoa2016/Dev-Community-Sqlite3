module HomeHelper
  def avatar_url(id, size = 300)
    "https://i.pravatar.cc/#{size}?u=#{id}"
  end
end
