import React from 'react';

// MAKING COMPONENT TO BRING IN API INFO ON QUEEN CARD
const Queen = ({img, name, quote}) => {
    return(
        <div className="queenCard">
            <img src={img} alt="" />
            {/* <div className="cardContent">
                <h2 className="queenName">{name}</h2>
                <p className="queenQuote">{quote}</p>
            </div> */}
        </div>
    );
}

export default Queen;