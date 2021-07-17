import { useState } from 'react';
import Cart from '../Cart/Cart';
import CourseData from '../CourseData/CourseData';
import FakeData from '../FakeData/FakeData';
import './Shop.css';
function Shop(){

    const [course]=useState(FakeData);
    const [cart,setCart]=useState([]);
    
    const handelButton=(course)=>{
       const newCart=[...cart,course];
       setCart(newCart);
    }
    
    const clrCart=()=>{
        setCart([]);
    }

    return(
        <div className="shop">

            <div className="course-container">
              {
                  course.map((course)=>(
                      <CourseData course={course} handelButton={handelButton}/>
                  ))
              }
            </div>

            <div className="cart-container">
                <Cart cart={cart} clrCart={clrCart}/>
            </div>

        </div>
    );
}
export default Shop;