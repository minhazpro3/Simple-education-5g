import React from 'react';
import {  Card, Carousel } from 'react-bootstrap';
import './Aboutus.css'


const Aboutus = () => {
    return (


        <div className="my-5 container">

          {/* carusal items */}
           <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://akmis.net/wp-content/uploads/2020/03/AKMIS-21-February-40-365x280.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5 className="text-white">International mother language day.</h5>
      <h6 className="text-white">In this  21 Feb , International mother language day.</h6>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://thedailynewnation.com/library/1397917759_9.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Prize giving ceremony.</h5>
      <h6>Hon'ble Minister of Education is handing over the small student award.</h6>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://www.stsimon.edu.my/srsdsf/wp-content/uploads/2016/04/1-1.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Small students participating in the game.</h5>
      <h6>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h6>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        {/* cards item */}
        <div className="my-5">
        <Card className="bg-dark text-white h-500px">
  <Card.Img height='500px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9tO6vPLt56NJwoArakeI9Z3sWCW4uKF4h1Q&usqp=CAU" alt="Card image" />
  <Card.ImgOverlay  className="text-white">
    <Card.Title className="text-black">Student travel arrangements</Card.Title>
    <Card.Text >
      <br/>
   <h6> There are several vehicles for the transportation of students, they are very environmentally friendly and of high quality</h6>
    </Card.Text>
  </Card.ImgOverlay>
</Card>

        {/* About us */}
        </div>
            <div className=" text-center p-4 aboutUsME">
              <h2>About us</h2>
              <p>Education in the United States of America is provided in public, private, and home schools. State governments set overall educational standards, often mandate standardized tests for K–12 public school systems and supervise, usually through a board of regents, state colleges, and universities. The bulk of the $1.3 trillion in funding comes from state and local governments, with federal funding accounting for only about $200 billion. Private schools are generally free to determine their own curriculum and staffing policies, with voluntary accreditation available through independent regional accreditation authorities, although some state regulation can apply.

              In 2013, about 87% of school-age children (those below higher education) attended state funded public schools, about 10% attended tuition- and foundation-funded private schools,and roughly 3% were home-schooled.

              By state law, education is compulsory over an age range starting between five and eight and ending somewhere between ages sixteen and eighteen, depending on the state. This requirement can be satisfied in public schools, state-certified private schools, or an approved home school program. In most schools, compulsory education is divided into three levels: elementary school, middle or junior high school, and high school. Children are usually divided by age groups into grades, ranging from kindergarten (5- to 6-year-olds) and first grade (6- to 7-year-olds) for the youngest children, up to twelfth grade (17- to 18-year-olds) as the final year of high school.</p>
            </div>
        </div>
    );
};

export default Aboutus;