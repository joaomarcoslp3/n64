const { connect } = require('mongoose')
const MONGODB_URI = process.env.DATABASE

module.exports  = () => {
  const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex : true,
    useFindAndModify: false
  }
  return connect(process.env.DATABASE, options)
}
