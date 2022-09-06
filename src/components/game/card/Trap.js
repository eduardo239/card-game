import React from 'react';
import { URL_IMG_GH } from '../../../utils/constants';

const Card = ({ data, handleClick, type = 'none' }) => {
  return (
    <div className="card">
      {type === 'shop' && <span className="price">${data.price}</span>}
      <div className="card-image">
        <img src={URL_IMG_GH + data.poster} alt={data.name} />
      </div>
      <div className="card-content">
        <span>NA: {data.name}</span>
        <span>TY: {data.type}</span>
        <span>MI: {data.min}</span>
        <span>MX: {data.max}</span>
      </div>

      {type === 'shop' && (
        <button className="width100" onClick={handleClick}>
          comprar
        </button>
      )}
      {type === 'use' && (
        <button className="width100" onClick={handleClick}>
          use
        </button>
      )}
      {type === 'select' && (
        <button className="width100" onClick={handleClick}>
          selecionar
        </button>
      )}
    </div>
  );
};

export default Card;