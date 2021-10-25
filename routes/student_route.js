module.exports = app => {

    const student = require('../modules/controllers/student');
    const validateuser = require('../middleware/register_validation')
    const userloginValidation = require('../middleware/login_validation')
    const checkauth = require('../middleware/checkAuth')
    

    app.post('/student_register',validateuser.studentValidation, student.register);
    app.post('/student_login',userloginValidation.studentloginValidation, student.login);
    app.get('/see_movie',checkauth.student, student.movie);
    app.post('/student_logout', student.logout);
    

}
