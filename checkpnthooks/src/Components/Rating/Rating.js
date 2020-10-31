import React from 'react'
import './Rating.css'

function Rating({searchrate, setSearchrate}) {
    const stars = (x) => {
        let starArray = [];
        for (let i = 1; i <= 5; i++) {
          if (i <= x) {
            starArray.push(
              <span className="stars" key={i} onClick={() => setSearchrate(i)}>
                ★
              </span>
            );
          } else {
            starArray.push(
              <span className="stars" key={i} onClick={() => setSearchrate(i)}>
                ☆
              </span>
            );
          }
        }
        return starArray;
      };
    return (
        <div>
         {stars(searchrate)}
        </div>
        

    )
}

export default Rating
