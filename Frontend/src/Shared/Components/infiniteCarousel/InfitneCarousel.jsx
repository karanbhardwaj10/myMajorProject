import React from 'react';
import test2 from '../../../assets/test2.jpg';
import test3 from '../../../assets/test3.jpg';
import test4 from '../../../assets/test4.jpg';
import test5 from '../../../assets/test5.jpg';

import'./style.css';


const InfiniteCarousel = () => {
  const row1 = [test2, test3];
  const row2 = [test4, test5];

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height:'200px'
        }}
      >
        HI
        {row1.map((src, index) => (
          <div key={index}  >
            <img src={src} style={{height:'100px',width:'50px' ,}} alt={`image${index + 1}`  } />
          </div>
        ))}
      </div>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        HI
        {row2.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`image${index + 1}`} />
          </div>
        ))}
      </div> */}
    </>
  );
};

export default InfiniteCarousel;
