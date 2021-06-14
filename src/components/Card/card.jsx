import React, {useState} from 'react'
import history from '../../history'
import './card.css'

export default function Card({title, imageUrl, body, alt, color, textBtn,rota}) {

    const [showButton, setShowButton] = useState(true)

    return (
        <div className="card-container" style={{backgroundColor: color}}>  
            <div className="image-container">
                <img src={imageUrl} alt={alt} />
            </div>
           <div className="card-content">
            <div className="card-title">
                    <h3>
                    {title}
                    </h3>
                </div>
                <div className="card-body">
                    <p>
                        {body}
                    </p>
                </div>
           </div>
            <div className="btn">
                <button>
                    <a onClick={()=>history.push(`${rota}`)}>
                        {textBtn}
                    </a>
                </button>
            </div>
        </div>
    )
}
