module.exports = app => {

    const vaccinate = require('../modules/controllers/vaccinate');
    const validateuser = require('../middleware/register_validation')
    const userloginValidation = require('../middleware/login_validation')
    const checkauth = require('../middleware/checkAuth')


    app.post('/get_vaccinate', checkauth.user,vaccinate.get_vaccinate );
    app.get('/filter_by_state', checkauth.user,vaccinate.check_state );
    app.get('/filter_by_date_with_time', checkauth.user,vaccinate.check_by_date );
   

}
