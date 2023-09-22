const db = require('../../data/db-config')

/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = async (req, res, next) => {
  try{
    const {scheme_id} = req.params
    const valId = await db('schemes')
      .where('scheme_id',scheme_id)
      .first()
    console.log(valId)
    if(valId){
      next()
    }else {
        next({status:404, message: `scheme with scheme_id ${scheme_id} not found`})
        }
      
  }catch(err){
    // console.log()
    next(err)
  }
  
  
}

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {
  const { scheme_name } = req.body

  if(!scheme_name || typeof scheme_name !== 'string')
    next({status:400, message:"invalid scheme_name"})
  else
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
  const { instructions, step_number } = req.body
  const err = {status:400, message:"invalid step"} 

  if(!instructions || typeof instructions !== "string")
    next(err)
  else if(!step_number || typeof step_number !=='number'|| step_number<1)
    next(err)
  else
    next()
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
