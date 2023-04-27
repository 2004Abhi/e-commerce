import React from 'react';
import Layout from '../components/layout/layout';
import { useAuth } from '../context/auth';

const Homepage = () => {
  const [auth,setAuth]=useAuth()
  return (
    <Layout title={"Best offers "}>
      <h4>home</h4>
      <p>{JSON.stringify(auth,null,4)}</p>
    </Layout>
  );
}

export default Homepage