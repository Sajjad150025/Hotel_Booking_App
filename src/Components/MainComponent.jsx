import React from 'react'
import Header from './Header/Header';
import BodyComponent from './Body/BodyComponent';
import Footer from './Footer/Footer';

const MainComponent = () => {
  return (
    <div>
        <Header/>
        <BodyComponent/>
        <Footer/>
    </div>
  )
}

export default MainComponent;