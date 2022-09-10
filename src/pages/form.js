import React from 'react'
import Form from '../components/Form/Form'


export const Home = () => {
  
  return (
    <div 
     style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
     }}
    >
      <Form/>
    </div>    
  )
}

export default Home;
