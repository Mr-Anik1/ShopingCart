import { Button } from 'react-bootstrap';
import './CourseData.css';
function CourseData(props){
    const {name,instructor,img,price}=props.course;
    return(
        <div className="CourseData">


           <div>
             <img src={img} alt=""/>
           </div>

           <div>
             <h2>Name:<i id="name">{name}</i></h2>
             <h3>Instructor:<b id="instructor">{instructor}</b></h3>
             <h3>Price:<b id="price">{price}</b></h3>
             
             <Button variant="warning" onClick={()=>(props.handelButton(props.course))}>Enrol Now</Button>
           </div>
        </div>
    );
}
export default CourseData;