import React from 'react';
import { Navbar, NavDropdown, Nav, Form, FormControl, Button} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Player from './Player';
import Venue from './Venue';
import Manager from './Manager';
import Team from './Team';
import './Navigation.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function Navigation(){
  

    return(
      <div>
        <div>
         <Router> 
          <Navbar expand="lg" bg="dark" variant="dark" fixed-top className="mainFile">
          <Navbar.Brand href="#home">Indian Premier League</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav text-white" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home"><i class="fas fa-home icons" aria-hidden="true"></i></Nav.Link>
            <Nav.Link href="/signUp"><i class=" fas fa-user-plus icons"></i></Nav.Link>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2 search_btn" />
            <Button variant="outline-primary">Search</Button>
          </Form>
          <Nav activeKey={window.location.pathname}>
            <NavDropdown title="Search with Filters" id="basic-nav-dropdown">
              <LinkContainer to="/Team">
                  <NavDropdown.Item>Team</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Player">
                  <NavDropdown.Item>Players</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Manager">
                  <NavDropdown.Item>Manager</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Venue">
                  <NavDropdown.Item>Venue</NavDropdown.Item>
                </LinkContainer>
            </NavDropdown>
            </Nav>
          </Nav>          
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path="/Team" component={Team}/>                        
        <Route path="/Player" component={Player}/>
        <Route path="/Manager" component={Manager}/>
        <Route path="/Venue" component={Venue}/>                     
      </Switch>
      </Router>
    </div>
    <div>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 h-100"
      src="https://hdsportsnews.com/wp-content/uploads/2020/01/1578248592_vivo-ipl-2020-schedule-pdf-download-time-table-match-list-date.jpg"
      alt="First slide"
    />
  </Carousel.Item>
 
  <Carousel.Item>
    <img
      className="d-block w-100 h-100"
      src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/09/12/924640-924485-twitter-3.jpg"
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 h-100"
      src="https://wallpapercave.com/wp/wp3991167.jpg"
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 h-100"
      src="https://wallpapercave.com/wp/wp2682706.jpg"
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 h-100"
      src="https://wallpapercave.com/wp/wp5751816.jpg"
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 h-100"
      src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/09/09/924118-rcb.jpg"
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 h-100"
      src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fres.cloudinary.com%2Fdwzmsvp7f%2Fimage%2Ffetch%2Fq_75%2Cf_auto%2Fhttps%253A%252F%252Fmedia.insider.in%252Fimage%252Fupload%252Fc_crop%252Cg_custom%252Fv1582185124%252Fiki3sncyzvk48d32sjug.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
</div>

</div>
    );
}
export default Navigation;