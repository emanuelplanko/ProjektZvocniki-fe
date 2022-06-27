import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Nav />

      <main>
        <Welcome />
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <Card />
            </div>
          </div>
        </div>
      </main>
    <Footer />
    </>
  );
}

export default App;
