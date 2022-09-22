

import NextAuth, { NextAuthOptions} from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials';

import {loginInitiate } from '../../../redux/actions/auth'
import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';




const authOptions ={
    session: {
        strategy: 'jwt'
    },

    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {},
            async authorize(credentials, req){
                const user = { email, password}

                if(user ){
                    useEffect(()=> {
                        const dispatch = useDispatch()
                        dispatch(loginInitiate())
                        }, [])
                        return user
                   }else{
                    return null
                   }
            },

          
        })
    ] 
}
export default NextAuth(authOptions)