const responce = require('../common_functions/responses')
const status_code = require('../constants/constants')
const execute_query = require('./db_query').execute_query

module.exports.get_vaccinate = async function (req, res) {

    try {
        var sql_query = 'SELECT * FROM user WHERE user_id = ?'
        var values = req["user_id"]
        var results = await execute_query(sql_query, values)


        var sql_query1 = 'INSERT INTO vaccinated(user_id,adhar_number,state,ip_address) values(?,?,?,?)'
        var values1 = [results[0].user_id, results[0].Adhar_number, results[0].state, results[0].ip_address]

        const results1 = await execute_query(sql_query1, values1)

        if (results1) {
            return responce.sendResponse(res, `Congratulation !! You vaccinated sucessfully and your id is : ${results1.insertId}`, status_code.STATUS_CODES.SUCCESS)
        }
        else {
            return responce.sendResponse(res, 'Please Enter all Required Filed', status_code.STATUS_CODES.UNAUTHORIZED)
        }
    }
    catch {
        return responce.sendResponse(res, 'There are some error with query', status_code.STATUS_CODES.UNAUTHORIZED)
    }
}

module.exports.check_state = async function (req, res) {

    try {
        var sql_query = 'SELECT * FROM user WHERE user_id = ?'
        var values = req["user_id"]
        var results = await execute_query(sql_query, values)


        var sql_query1 = 'SELECT * FROM vaccinated WHERE state = ?'
        var values1 = [results[0].state]

        const results1 = await execute_query(sql_query1, values1)


        return responce.sendResponse2(res, "Total vaccinated People", results1, status_code.STATUS_CODES.SUCCESS)

    }
    catch {
        return responce.sendResponse(res, 'There are some error with query', status_code.STATUS_CODES.UNAUTHORIZED)
    }
}

module.exports.check_by_date = async function (req, res) {

    try {
        var sql_query = 'SELECT * FROM user WHERE user_id = ?'
        var values = req["user_id"]
        var results = await execute_query(sql_query, values)


        var sql_query1 = 'SELECT * FROM vaccinated WHERE created_at = ?'
        var values1 = [req.body.date]
        console.log(req.body)

        const results1 = await execute_query(sql_query1, values1)


        return responce.sendResponse2(res, "Total vaccinated People", results1, status_code.STATUS_CODES.SUCCESS)

    }
    catch {
        return responce.sendResponse(res, 'There are some error with query', status_code.STATUS_CODES.UNAUTHORIZED)
    }
}