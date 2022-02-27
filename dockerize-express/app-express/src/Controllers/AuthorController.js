const { ENV } = require('../Config/ENV')
const fetch = require('node-fetch')


/**
 * Provide all authors
 * @returns { array } of authors
 */
module.exports.SelectAuthors = function (q = null) {
  console.log('AuthorController -> SelectAuthors')
  q !== null ? q = `?q=${q}` : q = ''
  const query = `http://${ENV.ES_HOST}:${ENV.ES_PORT}/elastic_index/_search${q}`
  console.log(`Fetch of : http://${ENV.ES_HOST}:${ENV.ES_PORT}/elastic_index/_search${q}`)
  return fetch(query)
    .then(res => res.json())
    .then(body => body)
}
