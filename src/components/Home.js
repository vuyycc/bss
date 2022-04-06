import React from 'react';
import ReadMoreReact from 'read-more-react';
import Header from '../layout/header'
import Footer from '../layout/footer'
import Main from './Main/main'

export default function Home() {
  return <div id='main'>
     <Header/>
     <Main/>
     <Footer/>
  </div>;
}
