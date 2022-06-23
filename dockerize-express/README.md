# app-express + elasticsearch

## Install and start

### Install

cd app-express/
npm run npm:install

### start

cd ../
docker-compose up

## Use curl to create index mapping in ES

curl --location --request PUT 'http://127.0.0.1:9200/elastic_index' \
 --header 'Content-Type: application/json' \
 --data-raw '{
"mappings": {
"author": {
"properties": {
"name" : { "type":"text"},
"firstname" : { "type":"text"},
"city" : { "type":"text"}
}}}}
'

## Use curl to insert data in ES

curl --location --request POST 'http://localhost:9200/elastic_index/author/\_bulk' \
 --header 'Content-Type: application/json' \
 --data-raw '{ "create" : { "\_index" : "elastic_index", "\_type" : "author", "\_id": 13 } }
{"name": "lecompte", "firstname": "ébon", "city" : "montpellier"}
{ "create" : { "\_index" : "elastic_index", "\_type" : "author", "\_id": 14 } }
{"name": "lavari", "firstname": "été", "city" : "paris"}
{ "create" : { "\_index" : "elastic_index", "\_type" : "author", "\_id": 15 } }
{"name": "air", "firstname": "france", "city" : "montpellier"}
'

## Query app-express to get ES data

http://localhost:8080
http://localhost:8080/author
http://localhost:8080/author?q=vassallo
http://localhost:8080/author?q=name:vassallo
http://localhost:8080/author?q=firstname:cyril
