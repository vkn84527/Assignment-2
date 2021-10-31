const { json } = require("body-parser")

const sendResponse = (res, msg, status) => {
    return res.json({
        message: msg,
        status: status
    })
}

const sendResponse2 = (res, msg,msg2, status) => {
    return res.json({
        message: msg,
        Total: msg2,
        status: status
    })
}

const sendtokenuserResponse = (res, msg, token, student_email, student_id, status) => {
    return res.json({
        Message: msg,
        Token: token,
        student_email: student_email,
        student_ID: student_id,
        Status: status
    })
}


module.exports = { sendResponse, sendtokenuserResponse ,sendResponse2}
