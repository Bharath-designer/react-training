import React from 'react'

import "../styles/LandingPage.css"
import dropdown from "../assets/dropdown.svg"
import location from "../assets/location.svg"
import search from "../assets/search.svg"
import bag from "../assets/bag.svg"
import globe from "../assets/globe.svg"
import user from "../assets/user.svg"
import organic from "../assets/organic.svg"
import landingPicture from "../assets/landing-picture.png"
import freshGrocery from "../assets/fresh-grocery.svg"
import salad from "../assets/salads.svg"
import cartValue from "../assets/cart-value.svg"
import grocery from "../assets/grocery.svg"


const LandingPage = () => {
    return (
        <>
        <div className='landing-wrapper'>
            <div className="landing-container">
                <div className="top-bar">
                    <div className="logo">Farmiest!</div>
                    <div className="nav-items">
                        <div className="nav-item nav-link active">Home</div>
                        <div className="nav-item nav-link">Store
                            <img src={dropdown} alt="" />
                        </div>
                        <div className="nav-item nav-link">Contact</div>
                        <div className="nav-item nav-link">About</div>
                    </div>
                    <div className="nav-items">
                        <div className="action-item-pair">
                            <div className="nav-item action-item">
                                <img src={location} alt="" />
                            </div>
                            <div className="nav-item action-item">
                                <img src={search} alt="" />
                            </div>
                        </div>
                        <div className="nav-item action-item">
                            <img src={user} alt="" />
                            Account</div>
                        <div className="nav-item action-item">
                            <img src={bag} alt="" />
                            Bag</div>
                        <div className="nav-item action-item">
                            <img src={globe} alt="" />
                            EN
                            <img src={dropdown} alt="" />
                        </div>
                    </div>
                </div>

                <div className="landing-content">
                    <div className="organic-img-container">
                        <img src={organic} alt="" />
                    </div>
                    <div className="text-content">
                        <div className="black-bold">
                            Live on
                        </div>
                        <div className="green-bold">
                            fruits & vegetables
                        </div>
                        <div className="black-bold">
                            to live Healthy
                        </div>
                        <div className="txt-underline">
                            100% Healthy & Fresh
                        </div>
                        <div className="shop">
                            Shop Now
                        </div>
                    </div>
                    <div className="landing-img-container">
                        <img src={landingPicture} alt="" />
                    </div>
                </div>
                
            </div>

        </div>
        <div className="bottom-bar">
                    <div className="card">
                        <div className="card-img">
                            <img src={freshGrocery} alt="" />
                        </div>
                        <div className="card-content">
                            <div className="card-title">Grocery</div>
                            <div className="card-desc">Fresh grocery delivered</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img">
                            <img src={salad} alt="" />
                        </div>
                        <div className="card-content">
                            <div className="card-title">Salads</div>
                            <div className="card-desc">Our nutrition salads</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img">
                            <img src={cartValue} alt="" />
                        </div>
                        <div className="card-content">
                            <div className="card-title">Cart value</div>
                            <div className="card-desc">Cart value review your cart</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img">
                            <img src={grocery} alt="" />
                        </div>
                        <div className="card-content">
                            <div className="card-title">Grocery</div>
                            <div className="card-desc">Fresh grocery delivered</div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default LandingPage
