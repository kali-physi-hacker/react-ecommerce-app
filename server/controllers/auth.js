const authRouter = require('express').Router();
const {isEmpty, getAuthToken} = require("../utils.js");
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


/**
 * Register user
 */
authRouter.post('/signup', async (request, response) => {
    const { firstName, lastName, email, password } = request.body;
    if (!isEmpty([firstName, lastName, email, password])) {
        const user = new User(request.body);
        user.password = bcrypt.hashSync(password, 10);
        try {
            await user.save();
            response.status(201).send({status: "User Created"});
        } catch (err) {
            response.status(500).send(err);
        }
    }else {
        response.status(400).json({error: 'All fields are required'});
    }
})


/**
 * Login a user and return user info and auth token
 */
authRouter.post('/login', async (request, response) => {
    // console.log("Handling Authentication")
    console.log("Request Body", request.body)
    const { email, password } = request.body;
    User.findOne({email: email}, (error, user)=> {
        if (error){
            console.log("Error Occurred:\n", error)
            return response.status(500).send({error: "Internal Server Error"})
        }
        if (!user) return response.status(401).json(
            {
                email: "User with that email does not exist"
            })
        const valid = bcrypt.compareSync(password, user.password);
        if (valid) {
            const tokenizingData = {
                email: user.email,
                id: user.id
            }
            const userToSend = {
                token: jwt.sign(tokenizingData, process.env.SECRET),
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName
            }
            response.status(200).send(userToSend);
        }else{
            response.status(401).send({password: "Invalid Password"});
        }
    })
});


authRouter.post('/get-user', async(request, response) => {
    const token = getAuthToken(request);
    try {
        const decryptedData = jwt.verify(token, process.env.SECRET);
        (!token && !decryptedData.id) ? response.status(401).json({error: "NOT AUTHORIZED, INVALID AUTH TOKEN"}) : {}
        const user = await User.findById(decryptedData.id);
        response.status(200).send({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        })
    } catch(exception) {
        console.log(exception);
        response.status(500).send({error: exception});
    }
})


module.exports = authRouter;




















// Auth0login(request, response){
//     const auth_url = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`;
//     return axios.post(auth_url, {
//         client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
//         client_secret: process.env.REACT_APP_AUTH0_CLIENT_SECRET,
//         code: request.query.code,
//         grant_type: 'authorization_code',
//         redirect_uri: `http://${request.headers.host}/auth/calldback`
//     }).then(accessTokenResponse=> {
//         const accessToken = accessTokenResponse.data.access_token;
//         const user_info_request_url = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo?access_token=${accessToken}`
//         return axios.get(user_info_request_url).then(userDataResponse=> {
//             const { name, nickname, email, picture, sub} = userDataResponse.data;
//             User.findOne({auth0_id: sub}, (error, user)=> {
//                 if (err) console.log('Login Error', err);
//                 if (!user){
//                     let newUser = new User({
//                         name: name,
//                         username: nickname,
//                         email: email,
//                         profile_photo: picture,
//                         auth0_id: sub
//                     });
//                     request.session.user = newUser;
//                     request.session.save();
//                     newUser.save();
//                 }
//                 request.session.user = user;
//                 request.session.save();
//                 response.redirect('/');
//             });
//         });
//     }).catch(err=> console.log('Auth0 login Err', err))