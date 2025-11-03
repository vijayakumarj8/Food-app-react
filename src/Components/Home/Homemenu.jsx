import React from 'react'
import './Homemenu.css';
import Offerimg from '../../Assets/burger.jpg';
import pizz from '../../Assets/pizz.jpg'
import Menuitemimg1 from '../../Assets/pizza.png';

export default function Homemenu() {
  return (

        <section className="homemenuec">
            <div className="menutop">
                <div className="offerbox">
                    <div className="imgpart">
                        <img src={Offerimg} alt="offer" />
                    </div>
                    <div className="offercontent">
                        <h2>Tasty Thursdays</h2>
                        <h1>20% Off</h1>
                        <button>Order Now</button>
                       
                    </div>
                </div>
             
                <div className="offerbox">
                    <div className="imgpart">
                        <img src={pizz} alt="offer" />
                    </div>
                    <div className="offercontent">
                        <h2>Tasty Thursdays</h2>
                        <h1>20% Off</h1>
                        <button>Order Now
                        
                            {/* <i class='bxr  bx-cart'  ></i> */}
                        
                        </button>
                       
                    </div>
                </div>
                
            </div>

            <div className="heading">
                <h1>Our Menus</h1>
            </div>
            <div className="ourmenus">
                <div className="menuitem">
                    <div className="itemimg">
                        <img src={Menuitemimg1} alt="menus" />
                    </div>
                    <div className="itemcontent">
                        <h2>Delicious Pizza</h2>
                        <p>Delicious PizzaVeniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                    </div>
                    <div className="price">
                        <h3>$20</h3>
                        <div className="itemicon">
                            <i class='bxr  bx-cart'  ></i>
                        </div>
                    </div>
                </div>
                <div className="menuitem">
                    <div className="itemimg">
                        <img src={Menuitemimg1} alt="menus" />
                    </div>
                    <div className="itemcontent">
                        <h2>Delicious Pizza</h2>
                        <p>Delicious PizzaVeniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                    </div>
                    <div className="price">
                        <h3>$20</h3>
                        <div className="itemicon">
                            <i class='bxr  bx-cart'  ></i>
                        </div>
                    </div>
                </div>
                <div className="menuitem">
                    <div className="itemimg">
                        <img src={Menuitemimg1} alt="menus" />
                    </div>
                    <div className="itemcontent">
                        <h2>Delicious Pizza</h2>
                        <p>Delicious PizzaVeniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                    </div>
                    <div className="price">
                        <h3>$20</h3>
                        <div className="itemicon">
                            <i class='bxr  bx-cart'  ></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  
}
