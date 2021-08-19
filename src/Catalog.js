import React, {useState} from "react";
import dishes from "./dishes"
import Btn from "./button-for-goat";


const Catalog = () => {

    const [meal] = useState(dishes)

    return (
        <div className='row'>
            {
                meal.map(item => (
                    <div className='col-4' key={item.id}>
                        <div className='box-catalog'>
                            <img src={item.img} alt=''/>
                            <div className='name-p'>
                                <p>{item.title}</p><p>{item.price}</p>
                            </div>
                            <p className='desc'>{item.desc}</p>
                            <div className='rating-btn'>
                                <Btn/>
                                <div>
                                    <i className='bx bxs-star'/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Catalog