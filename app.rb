require 'sinatra'
require 'tilt/handlebars'
require 'sinatra/handlebars'

class MyApp < Sinatra::Base
  helpers Sinatra::Handlebars

  NAV = [
    { label: 'projects', href: '/projects' },
    { label: 'drawings', href: 'http://doeggy.tumblr.com', new_tab: true },
    { label: 'elsewhere',  href: '/elsewhere' }
  ].freeze

  get '/' do
    handlebars :index, locals: { 
      nav_links: NAV 
    }
  end

  get '/projects' do
    handlebars :projects, locals: { 
      nav_links: NAV,
      title: "projects"
    }
  end

  get '/elsewhere' do
    handlebars :elsewhere, locals: { 
      nav_links: NAV,
      title: "contact"
    }
  end
end
