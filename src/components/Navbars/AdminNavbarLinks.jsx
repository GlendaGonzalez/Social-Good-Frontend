/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

class AdminNavbarLinks extends Component {
  render() {
    
    return (
      <div>
        <Nav>
          <NavItem eventKey={1} href="#">
            <p className="hidden-lg hidden-md">Dashboard</p>
          </NavItem>
        </Nav>
        
        <Nav pullRight>

          <NavDropdown
            title="Login"
            id="basic-nav-dropdown"
          >
          
          <input type="text"  class="form-control" placeholder="Username" required="required" ></input>
            <input type="password" class="form-control" placeholder="Password" required="required"></input>
            <input type="submit" class="btn btn-primary btn-block" value="Login" ></input>
            <div class="form-footer">
            <a href="./forgot">Forgot Your password?</a>
            </div>
          </NavDropdown>

          <NavDropdown
            title="Sign up"
            id="basic-nav-dropdown"
          >
            <p class="hint-text"> Fill in this form to create your account</p>
            <div class = "form-group">
              <input type="text"  class="form-control" placeholder="Username" required="required" ></input>
            </div>
            <div class = "form-group">
              <input type="password" class="form-control" placeholder="Password" required="required"></input>
            </div><div class = "form-group">
              <input type="password" class="form-control" placeholder="Confirm Password" required="required"></input>
            </div>
        
            <input type="submit" class="btn-xs btn-primary btn-block" value="Sign up" ></input>

          </NavDropdown>

        </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;
