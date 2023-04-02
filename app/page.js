import React from 'react'
import NavBar from './navbar/NavBar';
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './hero/Hero';


export default function Page() {
  return (
    <>
      <NavBar />
     <Hero />
    </>
  );
}