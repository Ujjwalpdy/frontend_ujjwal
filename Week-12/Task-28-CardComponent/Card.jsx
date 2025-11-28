// Example Card component (React)
import React from 'react';
export default function Card({img, title, desc}){ return (<div className='card'><img src={img} alt=''/><h3>{title}</h3><p>{desc}</p></div>); }
