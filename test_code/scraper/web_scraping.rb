require 'open-uri'
require 'nokogiri'
require 'httparty'
require 'pry-byebug'

def scraper
  url = "https://blockwork.cc"
  unparsed_page = HTTParty.get(url)
  parsed_page = Nokogiri::HTML(unparsed_page)
  binding.pry
end

scraper
