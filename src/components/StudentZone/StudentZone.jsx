import React from 'react'
import './studentzone.css'
function StudentZone() {
  return (
    <div style={{marginTop:'4.7rem'}}>
        <div className='zone-banner'>
            <h3>Student Zone</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, animi consectetur culpa in dolore commodi molestiae. Quod laudantium doloribus sapiente perferendis asperiores, eum molestias soluta quos autem laboriosam consectetur culpa!</p>
        </div>
        <section className='iq' style={{textAlign:"center"}}>
            <span style={{fontWeight:700,fontSize:"1.5rem",borderBottom:"5px solid red"}}>interview questions</span>
            <section></section>
            <div></div>
        </section>
    </div>
  )
}

export default StudentZone