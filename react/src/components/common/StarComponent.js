import React from "react";
import {Image} from "react-bootstrap";
import img from "assets/img/g42.png"

const StarComponent = ({promo, price}) => {
    return (
        <div className="position-absolute me-2 mt-2 fs--2 z-index-2" style={{
            bottom: 0, right: 0, width: "35%"
        }}>
            <Image src={img} alt="Blue Star" fluid style={{zIndex: 9999}}/>
            <div style={{
                position: 'absolute',
                bottom: '10%',
                left: '30%',
                transform: 'translate(-50%, -50%)',
                color: '#fff',
                fontSize: "13px"
            }}>
                {price} TND
            </div>
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '65%',
                transform: 'translate(-50%, -50%)',
                color: '#fff',
                fontSize: "13px"
            }}>
                -{promo}%
            </div>
        </div>
    );
};

export default StarComponent