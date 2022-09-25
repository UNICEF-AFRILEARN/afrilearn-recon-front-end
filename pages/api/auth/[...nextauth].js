

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
            async authorize(credentials, req) {
                const payload = {
                  email: credentials.email,
                  password: credentials.password,
                };
                'https://afrilearn-backend-01.herokuapp.com/api/v1/auth/login'
                const res = await fetch('https://afrilearn-backend-01.herokuapp.com/api/v1/auth/login', {
                  method: 'POST',
                  body: JSON.stringify(payload),
                  headers: {
                    'Content-Type': 'application/json',
                    tenant: credentials.tenantKey,
                    'Accept-Language': 'en-US',
                  },
                });
        
                const user = await res.json();
                if (!res.ok) {
                  throw new Error("Invalid Credentials");
                }
                // If no error and we have user data, return it
                if (res.ok && user) {
                  return user;
                }
        
                // Return null if user data could not be retrieved
                return null;
              },
            }),
    ],
    pages: {
        signIn: '/login',
    }
}
export default NextAuth(authOptions)