import React from 'react';
import holderImg from '../assets/holderimg.png'

const placeholder = () => {
  return (
    <>
<div class="card" aria-hidden="true">
  <img src={holderImg} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title placeholder-glow">
      <span class="placeholder col-6"></span>
    </h5>
    <p class="card-text placeholder-glow">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
      <span class="placeholder col-8"></span>
    </p>
  </div>
</div>    
    </>
  )
}

export default placeholder;