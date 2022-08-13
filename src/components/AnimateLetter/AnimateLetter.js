import React from 'react';
import './AnimateLetter.css'

const AnimateLetter = ({letterClass,StrArray,idx}) => {
  
  return (
    <span>
      {
        StrArray.map((char,i)=>(
          <span key={char + i} className={`${letterClass} _${i + idx}`}>
            {char}
          </span>
        ))
      }
    </span>
  );
};

export default AnimateLetter;