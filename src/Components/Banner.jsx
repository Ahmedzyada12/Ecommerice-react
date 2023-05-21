import React from "react"

const Banner= () => {
 
  return (
    <>
      <section>
        <div className='container mt-4'>
            <div className="card">
            <div className="row">
          <div className="col-md-4">
            <img src= { require('../imeges/banner-1.png')} className="w-100" />
         </div>
         
         <div className="col-md-8">
            <img src={ require('../imeges/banner-2.png')} className="w-100" />
          </div>
          </div>
          </div>
       </div>
      </section>
    </>
  )
}

export default Banner