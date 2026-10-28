const adminAuth=(req, res, next)=>{
    let token ='xyssz';
    let isAuthrised = token === 'xyz';

    if(isAuthrised){
        next();
    }
    else{
        console.log(req, res, next)
        res.send('unauthorised error')
    }
}

module.exports = {
    adminAuth
}