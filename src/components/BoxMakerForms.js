import React, { useState, useContext } from 'react';
import '../styles/BoxMakerForms.css'
import {BoxesContext} from '../context/boxesContext'


const BoxMakerForms = () => {
    const [width, setWidth] = useState('')
    const [height, setHeight] = useState('')
    const [color, setColor] = useState('')
    const {dispatch} = useContext(BoxesContext)
    const handleSubmit = e => {
        e.preventDefault()
        dispatch({type:'ADD_BOX', color, height, width})
        setWidth('')
        setHeight('')
        setColor('')
    }
    return (
        <div className='sidebarForm'>
            <form onSubmit={handleSubmit} className='sidebarForm-Form'>
                <div className="form-group">
                    <label htmlFor="heigth">Height</label>
                    <input value={height} onChange={e => setHeight(e.target.value)} placeholder='informe a altura...' type="text" className="form-control" id="heigth" ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="width">Width</label>
                    <input value={width} onChange={e => setWidth(e.target.value)} placeholder='informe a largura...' type="text" className="form-control" id="width" ></input>
                </div>

                <div className="form-group">
                    <label htmlFor="color">Color</label>
                    <input onChange={e => setColor(e.target.value)} value={color} placeholder='informe a Cor...' type="text" className="form-control" id="color" ></input>
                </div>
                <button type="submit" className="btn btn-primary">Criar!</button>
            </form>
        </div>
    );
}

export default BoxMakerForms;