import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/useRequest';

const SignIn = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const { doRequest, errors } = useRequest({
      url: '/api/users/signin',
      method: 'post',
      body: {
         email,
         password,
      },
      onSuccess: () => Router.push('/')
   });

   const onSubmit = async (e) => {
      e.preventDefault();
      await doRequest();     
   };

   return (
      <div className='container d-flex justify-content-center mt-4'>
         <form className='w-50' onSubmit={onSubmit}>
            <h1>SignIn</h1>
            <div className='form-group'>
               <label className='mt-2'>Email</label>
               <input
                  type='text'
                  className='form-control'
                  placeholder='Email Address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />

               <label className='mt-2'>Password</label>
               <input
                  type='password'
                  className='form-control'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />

               {errors}

               <button className='btn btn-primary mt-2'>Signup</button>
            </div>
         </form>
      </div>
   );
};

export default SignIn;
