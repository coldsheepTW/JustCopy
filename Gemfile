source 'https://rubygems.org'
ruby RUBY_VERSION

gem 'nokogiri'
gem 'rack', '~> 2.0.1'
gem 'rspec'
require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem "github-pages", group: :jekyll_plugins

source 'https://rubygems.org'

group :jekyll_plugins do
  gem "jekyll-paginate-v2", "~> 1.7"
  gem "jekyll-feed"
end

gem 'wdm', '>= 0.1.0' if Gem.win_platform?
