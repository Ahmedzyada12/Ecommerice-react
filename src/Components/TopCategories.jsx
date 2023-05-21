import React from 'react'
import topdata from './topdata'

function TopCategories() {
  return (
    <div >

      <section className="TopCate background" id="Top Categories">
  <div className="container">
    <div className="heading d_flex">
      <div className="heading-left">
        <i className="fa-solid fa-border-all" />Top Categories</div>
      <hr className="w-25" />
    </div>
    <div className="row">

    {
      topdata.map((prod)=>{
        return(

          <div className="col-md-4" key={prod.id}>
        <div className="card mt-2">
          <div className="box product ">
            <div className="nametop d_flex">
              <h3 className="tleft">{prod.name}</h3>
              <h3 className="tright">{prod.desc}</h3>
            </div>
            <div className="img">
              <img src={prod.img} alt />
            </div>
          </div>
        </div>
      </div>
        )
      })
    }
    </div>
  </div>
</section>
 
    </div>
  )
}

export default TopCategories