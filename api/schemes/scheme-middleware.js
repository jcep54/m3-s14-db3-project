const db = require('../../data/db-config')

/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = async(req, res, next) => {
  // try{
  //   const valId = await db('schemes as sc')
  //     .where('sc.scheme_id',req.params.id)
  //   console.log(valId)
  //   if(valId)
  //     next()
  //   else  
  //     next({status:404, message: `scheme with scheme_id ${req.params.id} not found`})
  // }catch(err){
  //   next(err)
  // }
  next()
  
}

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {
  next()
}

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {
  next()
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
