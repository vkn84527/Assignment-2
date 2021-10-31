const joi = require("joi");
const responses = require('../modules/common_functions/responses')
const constants = require('../modules/constants/constants')

const validation = joi.object({
	userName: joi.string().alphanum().min(3).max(25).required(),
	email: joi.string().email().required(),
	password: joi.string().min(5).required(),
	mobileNumber: joi.string().length(10).required(),
	adhar_number: joi.string().length(12).required(),
	state :joi.string().required()
});

const userValidation = async (req, res, next) => {
	const payload = {
		userName: req.body.user_name,
		email: req.body.user_email,
		password: req.body.user_password,
		mobileNumber: req.body.user_phone,
		adhar_number:req.body.adhar_number,
		state: req.body.state
	};
	const { error } = validation.validate(payload);
	if (error) {
		responses.sendResponse(res, `Error in user Data : ${error.message}`, constants.STATUS_CODES.UNAUTHORIZED)
	} else {
		next();
	}
};



module.exports = { userValidation}