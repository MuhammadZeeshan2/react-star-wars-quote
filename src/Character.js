// src/Character.js
import React from 'react';
import Quote from './Quote';

const Character = ({ name, quotes }) => {
    return (
        <div className="container">
            <div className="row border rounded p-4 m-2">
                <div className="row">
                    <h1>{name}</h1>
                </div>
                <div className="row">
                    {quotes.map((quote, index) => (
                        <div className="col-sm-4 mb-2" key={index}>
                            <div className="card">
                                <div className="card-body">
                                    <p className="card-text">{quote}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Character;
