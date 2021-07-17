import { Button } from 'react-bootstrap';
import './cart.css';
function Cart(props){
    const {cart,clrCart}=props;

    const courseTotal=cart.reduce((acc,curCourse)=>acc+curCourse.price,0)
    const tax=courseTotal/10;
    
    return(
        <div className="cart">
          <h2>Item Order:<b id="item1">{cart.length}</b></h2>
          <h3>Course Price:<b id="item2">{courseTotal}</b></h3>
          <h3>Tax:<b id="item3">{tax}</b></h3>
          <h3 className="price">Grand Total:<b id="item4">{courseTotal+tax}</b></h3>
          
          <Button variant="danger" onClick={clrCart}> Cancel Order</Button>

          <Button variant="success">Place Order</Button>
         
          
        </div>
    );
}
export default Cart;