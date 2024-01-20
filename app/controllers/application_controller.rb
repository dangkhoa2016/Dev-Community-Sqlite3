class ApplicationController < ActionController::Base
  # skip_before_action :verify_authenticity_token
  before_action :authenticate_user!
  private 
  
  def render_turbo_stream(action, target, partial = nil, locals = {})
    respond_to do |format|
      format.turbo_stream do
        case action
        when 'replace'
          render turbo_stream: turbo_stream.replace(target, partial: partial, locals: locals)
        when 'append'
          render turbo_stream: turbo_stream.append(target, partial: partial, locals: locals)
        when 'removed'
          render turbo_stream: turbo_stream.remove(target)
        end
      end
    end
  end
end
