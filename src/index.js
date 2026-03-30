import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'

export default function Board(){
  return(
    <div className='ttt'>
    <div>
  <button className='square'>X</button>
  <button className='square'>X</button>
  <button className='square'>X</button>
    </div>

   <div>
  <button className='square'>X</button>
  <button className='square'>X</button>
  <button className='square'>X</button>
   </div>

   <div>
  <button className='square'>X</button>
  <button className='square'>X</button>
  <button className='square'>X</button>
   </div>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Board />
  </React.StrictMode>
);


