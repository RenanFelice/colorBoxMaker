import React, { useContext} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Box from './Box'
import {BoxesContext} from '../context/boxesContext'
import '../styles/BoxList.css'


const BoxList = () => {
    const {boxes} = useContext(BoxesContext)
    
    return (
        <div className='BoxList'>
        {boxes.map(box => {
            return <Box key={uuidv4()} style={box}/>
        })}
        </div>
     );
}

export default BoxList;