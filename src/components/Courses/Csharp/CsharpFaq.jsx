import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
const Csharpfaq = () => {
    const [toggle, setToggle] = useState(false);

    function handleClick(index) {
        setToggle(toggle === index? null : index); // Toggle the state
    }
  return (
    <div>
    <Container>
        <div className="toggle">
            <div className='toggleH' onClick={()=>handleClick(1)} style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <p>Heading</p>
                <i className={`fa-solid ${toggle ? 'fa-minus' : 'fa-plus'}`}></i>
            </div>
            {toggle === 1 && (
                <div className='toggleContent'>
                    <p>This is the content of the FAQ item.</p>
                </div>
            )}
        </div>
        <div className="toggle">
            <div className='toggleH' onClick={()=>handleClick(2)} style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <p>Heading</p>
                <i className={`fa-solid ${toggle ? 'fa-minus' : 'fa-plus'}`}></i>
            </div>
            {toggle===2 && (
                <div className='toggleContent'>
                    <p>This is the content of the FAQ item.</p>
                </div>
            )}
        </div>
        <div className="toggle">
            <div className='toggleH'onClick={()=>handleClick(3)} style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <p>Heading</p>
                <i className={`fa-solid ${toggle ? 'fa-minus' : 'fa-plus'}`}></i>
            </div>
            {toggle===3 && (
                <div className='toggleContent'>
                    <p>This is the content of the FAQ item.</p>
                </div>
            )}
        </div>
        <div className="toggle">
            <div className='toggleH' onClick={()=>handleClick(4)} style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <p>Heading</p>
                <i className={`fa-solid ${toggle ? 'fa-minus' : 'fa-plus'}`}></i>
            </div>
            {toggle===4 && (
                <div className='toggleContent'>
                    <p>This is the content of the FAQ item.</p>
                </div>
            )}
        </div>
        <div className="toggle">
            <div className='toggleH' onClick={()=>handleClick(5)} style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <p>Heading</p>
                <i className={`fa-solid ${toggle ? 'fa-minus' : 'fa-plus'}`}></i>
            </div>
            {toggle===5 && (
                <div className='toggleContent'>
                    <p>This is the content of the FAQ item.</p>
                </div>
            )}
        </div>
    </Container>
</div>
  )
}

export default Csharpfaq