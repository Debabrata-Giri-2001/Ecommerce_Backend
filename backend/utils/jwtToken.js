// create token 
const sendToken = (user,statusCode,res)=>{
    const token = user.getJWTToken();

    try {
        const option = {
            expires:new Date(Date.now()+process.env.COOKIE_EXPIER * 24 * 60 * 60 * 1000),
            httpOnly:true
        }
        res.status(statusCode).cookie('token',token,option).json({
            scccess:true,
            user,
            token
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, error })
    }
}

module.exports = sendToken;