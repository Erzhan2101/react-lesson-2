import React from "react";
import Catalog from "./Catalog";
import BtnLearn from "./btn-learn";

const Menu = () => {
    return (
        <div className='menu container'>
            <div className='heading'>
                <h5 className='title'>menu</h5>
                <h2 className='subtitle'>Food Full of treaty Love</h2>
                <h6 className='desc-title'>There are many things are needed to start the Fast Food Business. You need not only Just Food
                    Stalls<br/> with Persons but also specialized equipment, Skills to manage Customers, </h6>
            </div>
            <Catalog />
            <div className='BtnLearn'>
                <BtnLearn />
            </div>

        </div>
    )
}

export default Menu