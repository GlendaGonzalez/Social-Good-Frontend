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
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <div>
        <Nav>
          <NavItem eventKey={1} href="#">
            <i className="fa fa-dashboard" />
            <p className="hidden-lg hidden-md">Dashboard</p>
          </NavItem>

          <NavItem eventKey={3} href="#">
            <i className="fa fa-search" />
            <p className="hidden-lg hidden-md">Search</p>
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Account
          </NavItem>
          <NavDropdown
            eventKey={2}
            title="Login"
            id="basic-nav-dropdown"
          >
            <MenuItem eventKey={2.1}></MenuItem>
            <input type="text"  class="form-control" placeholder="Username" required="required" ></input>

            <MenuItem eventKey={2.2}></MenuItem>
            <input type="password" class="form-control" placeholder="Password" required="required"></input>

            <MenuItem eventKey={2.3}></MenuItem>
            <input type="submit" class="btn btn-primary btn-block" value="Login" ></input>

            <MenuItem eventKey={2.4}>Forgot your password?</MenuItem>

          </NavDropdown>

          <NavItem eventKey={3} href="#">
            Sign Up
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;
