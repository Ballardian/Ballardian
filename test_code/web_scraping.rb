require 'open-uri'
require 'nokogiri'
require 'pry-byebug'

html_content = open('http://www.espn.com/boxing/story/_/id/21675272/boxing-rankings-division-division').read
website = Nokogiri::HTML(html_content)

website.search('table.inline-table td').each_with_index do |element, index|
  puts "#{element.text.strip}"
  'yey'
end
