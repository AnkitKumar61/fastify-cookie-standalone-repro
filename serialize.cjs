const { serialize } = require('@fastify/cookie')

console.log(serialize('sid', 'abc'))
