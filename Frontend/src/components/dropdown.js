import React from 'react'
import {useState} from 'react';
import './navbar.css';
function Dropdown(){
    const[isOpen, setIsOpen] = useState(false)
    const handleClick = () => setIsOpen(!isOpen)

  return (
    <div className='dd-menu' onClick={handleClick}>
        <button className='dd-button'onClick={()=> setIsOpen(!isOpen)}>
        
        {!isOpen?
        (
            <p>poop</p>
        )
        :
        (   
           
           <p>poop2</p>
        )

        }
    </button>
    
    <div className='dd-options'>
            {isOpen?
                    (<ul className='dd-options'>
                        <li>Booking</li>
                        <li>Booking</li>    
                        <li>Booking</li>
                    </ul>)
                    :
                    (<p></p>)} 
                </div>
</div>
  )
}

export default Dropdown