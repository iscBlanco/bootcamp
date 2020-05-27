import React from 'react'

const BookItem = (props) =>{


    return(
        <article className="media">
            <div className="media-left">
                <span class="tag is-rounded is-large">
                    {props.item.id}
                </span>
            </div>
            <figure className='media-left'>
                <p className='image is-64x64'>
                    <img src={props.item.img}></img>
                </p>
            </figure>
            <div className="media-content">
        <div className="content">
          <p className="title is-6 is-marginless">
            <a>{props.item.title}</a>
          </p>
        </div>
        
      </div>
      <div className="media-right">
        {props.item.sold}
        <div>sold</div>
      </div>
     
        </article>
    )
}
export default BookItem