import React from 'react';
import axios from 'axios';

const LandingPage = ({ currentUser }) => {
   console.log('User', currentUser);
   return <div>Index Page!</div>;
};

LandingPage.getInitialProps = async ({req}) => {
   if (typeof window === 'undefined') {
      // We are on the server
      const { data } = await axios.get("http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser",
{
    headers: req.headers,
});
      return data;
   } else {
      // We are on the browser
      const { data } = await axios.get('/api/users/currentuser');
      return data;
   }
   return {};
};

export default LandingPage;
