import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Electronics = () => {
    return (

        <>

            <div>
                <h2 className='EL'>Electronics</h2>
                <Routes>
                    <Route path="/Tv" element={<div>TV Page</div>} />
                    <Route path="/Iron" element={<div>Electric Iron Page</div>} />
                    <Route path="/Speakers" element={<div>Speakers Page</div>} />
                </Routes>
            </div>




        </>

    );
};

export default Electronics;
