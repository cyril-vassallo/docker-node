module.exports.ENV = {
    NODE_HOST : process.env.NODE_HOST ? process.env.NODE_HOST : '127.0.0.1',
    NODE_PORT : process.env.NODE_PORT ? process.env.NODE_PORT : '8080',
    ES_HOST : process.env.ES_HOST ? process.env.ES_HOST : '127.0.0.1',
    ES_PORT : process.env.ES_PORT ? process.env.ES_PORT : '9200'
 }