import React from 'react';
import {Link} from 'react-router-dom';
import './CSS/nav.css'


function NAV(){
    return(
            <div className='links'>
                
                    <h1>DUKAAN</h1>
                    <ul>
                        <Link to='/'><li>HOME</li></Link>
                        <Link to='/create'><li>CREATE</li></Link>
                        <Link to='/update'><li>UPDATE</li></Link>
                        <Link to='/delete'><li>DELETE</li></Link>
                    </ul>    
                
            </div>
    );
}

export default NAV;