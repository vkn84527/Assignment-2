const { json } = require("body-parser")

const sendResponse = (res, msg, status) => {
    return res.json({
        message: msg,
        status: status
    })
}

const sendmessResponse = (res, msg, movie, status) => {
    
    return res.json({
        message: msg,
        Movies: movie,
        status: status
    })
}

const sendtokenstudentResponse = (res, msg, token, student_email, student_id, status) => {
    return res.json({
        Message: msg,
        Token: token,
        student_email: student_email,
        student_ID: student_id,
        Status: status
    })
}


module.exports = { sendResponse, sendmessResponse, sendtokenstudentResponse }
