require 'sinatra'
require 'tilt/handlebars'
require 'sinatra/handlebars'

class MyApp < Sinatra::Base
  helpers Sinatra::Handlebars

  NAV = [
    { label: 'projects', href: '/projects' },
    { label: 'drawings', href: 'http://doeggy.tumblr.com' },
    { label: 'contact',  href: '/contact' }
  ].freeze

  get '/' do
    handlebars :index, locals: { nav_links: NAV }
  end

  get '/projects' do
    handlebars :projects, locals: { nav_links: NAV }
  end

  get '/contact' do
    handlebars :contact, locals: { nav_links: NAV }
  end
end
