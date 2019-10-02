import React from 'react';
import './css/normalize.css';
import './css/style.css';
import TextBox from './components/TextBox';
import Image from './components/Image';
import SmallImage from './components/SmallImage';

const App = () => {
  return(
    <div className="container">
      <div className="column-1">
        <Image/>
        <Image/>
        <TextBox/>
      </div>
      <div className="column-2">
        <TextBox/>
        <Image/>
        <TextBox/>
        <SmallImage/>
      </div>
    </div>
  );
}

export default App;
