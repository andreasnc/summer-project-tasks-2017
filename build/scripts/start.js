const logger = require('../lib/logger')

const port = process.env.PORT || 3000

logger.info('Starting server...')
require('../../server/main').listen(port, () => {
  logger.success('Server is running at http://localhost:' + port)
})
