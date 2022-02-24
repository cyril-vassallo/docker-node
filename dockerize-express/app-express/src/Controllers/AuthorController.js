const { ENV } = require('../Config/ENV')
const fetch = require('node-fetch')


/**
 * Provide all authors
 * @returns { array } of authors
 */
module.exports.SelectAuthors = function () {
  console.log('AuthorController -> SelectAuthors')
  return fetch(`http://${ENV.ES_HOST}:${ENV.ES_PORT}/elastic_index/_search?q=vassallo`)
    .then(res => res.json())
    .then(body => body)
}
