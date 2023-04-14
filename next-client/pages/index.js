import BuildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
   console.log('User', currentUser);
   return <div>Index Page!</div>;
};

LandingPage.getInitialProps = async (context) => {
   const client = BuildClient(context);
   const { data } = await client.get('/api/users/currentuser');
   return data;
};

export default LandingPage;
