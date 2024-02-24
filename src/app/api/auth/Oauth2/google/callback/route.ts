import { NextApiRequest, NextApiResponse } from 'next';
const passport = require('passport')

export async function GET(req:Request) {
    passport.authenticate('google', {
        successRedirect: '/protected',
        failureRedirect: '/auth/failure'
    });

    return Response.json({message: "successfully logined through google"});
}
