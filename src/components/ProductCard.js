import React, { useState } from 'react'
import '../styles/ProductCard.css';


const ProductCard = (props) => {
    const [readMore, setReadMore] = useState(false)
const handleReadMore = ()=>{
setReadMore(true)
}
const handleReadLess = ()=>{
    setReadMore(false)
    }
    return (
    <>
<div className="card-div card">
    <div className="upr-card-div">
        <div className="img-div">
            <img src={props.data.image} alt="card" className="card-img " />
        </div>
        <p className="card-category">{props.data.category}</p>
    </div>
    <div className="lwr-card-div">
        <h5 className="card-title">{props.data.title}</h5>
        <p className="card-desc">{props.data.description.length>100 && !readMore ? `${props.data.description.substring(0,100)}...` :  props.data.description}</p>
{props.data.description.length>100 && !readMore ? 
<h6 className="read-link" onClick={handleReadMore}>Read more</h6>
: props.data.description.length>100 && readMore ?
<h6 className="read-link" onClick={handleReadLess}>Read less</h6> 
: null
}
    </div>
</div>

    </>
  )
}

export default ProductCard