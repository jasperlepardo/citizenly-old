require 'json'
require 'airtable'
require 'active_support/all'
# require 'active_support/all'

# Pass in api key to client
@client = Airtable::Client.new("keyYNKSvUkGgLCqAq")

# Pass in the app key and table name

@table = @client.table("appPlDH4gCeLBVFx5", "Residents")
@records = @table.records(:filterByFormula => "published", :sort => ["date", :desc], :limit => 100)

# Change the filename here below but make sure it's in the _data folder.
File.open("_data/residents.json", "w") do |f|
    data = @records.map { |record| record.attributes }
    f.write(data.to_json)
end