import React from "react";
import {useNavigate} from "react-router-dom";

const Card = ({cardData}:{cardData:any}) => {

    const navigate = useNavigate()
    return (
        <>
            <div className="col">
                <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                         xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                         preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c"/>
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                    </svg>

                    <div className="card-body">
                        <h5>{cardData.title}</h5>
                        <p className="card-text">{cardData.content}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button onClick={() => navigate('/post/' + cardData.id)} type="button" className="btn btn-sm btn-outline-secondary">View
                                </button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit
                                </button>
                            </div>
                            <small className="text-muted">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;