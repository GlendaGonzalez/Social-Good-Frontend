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
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { Form } from "components/Form/Form.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/face-0.jpg";

class UserProfile extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Edit Profile"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-5", "col-md-5"]}
                      properties={[
                        {
                          label: "Organization Name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Organization X",                          
                        },
                        {
                          label: "Username",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Username123",                    
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-5", "col-md-5"]}
                      properties={[
                        {
                          label: "Email address",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "johndoe123@email.com"
                        },
                        {
                          label: "Telephone Number",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "123-456-7890",                          
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Organization Address",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Street Address",                          
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "City",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "City",
                        },
                        {
                          label: "Country",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Country",
                        },
                        {
                          label: "Zip Code",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "ZIP Code",
                        }
                      ]}
                    />
                    <Form>
                    {['checkbox', 'radio'].map(type => (
                      <div key={`inline-${type}`} className="mb-3">
                      <Form.Check inline label="Electronic Methods" type={type} id={`inline-${type}-1`} />
                      <Form.Check inline label="Door to Door" type={type} id={`inline-${type}-2`} />
                      <Form.Check inline label="Phone" type={type} id={`inline-${type}-3`} />
                      <Form.Check inline label="Computer Access" type={type} id={`inline-${type}-4`} />
                      <Form.Check inline label="Radio Notices" type={type} id={`inline-${type}-5`} />
                      <Form.Check inline label="Printed Communications" type={type} id={`inline-${type}-6`} />
                      <Form.Check inline label="Events" type={type} id={`inline-${type}-7`} />
                      <Form.Check inline label="Other" type={type} id={`inline-${type}-8`} />
                      </div>
                      ))}
                      </Form>             
                    

                    <FormInputs
                    ncols={["col-md-4", "col-md-4", "col-md-4"]}
                    properties={[
                      {
                        label: "Facebook Page URL",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "https://www.facebook.com/floridainternational/"
                      },
                      {
                        label: "Instagram Page URL",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "https://www.instagram.com/fiuinstagram/?hl=en"
                      },
                      {
                        label: "Website URL",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "https://miamicensus.org/"
                      }
                    ]}

                    />

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>About Us</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Here can be the description of your organization"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="info" pullRight fill type="submit">
                      Update Profile
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={4}>
              <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={avatar}
                name="Organization Name"
                userName="Username"
                description={
                  <span>Organization Bio</span>
                }
                socials={
                  <div>
                    <Button simple>
                      <i className="fa fa-facebook-square" 
                      onClick= "window.location.href= https://www.facebook.com/"/>
                    </Button>
                    <Button simple>
                      <i className="fa fa-instagram" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-globe" />
                    </Button>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default UserProfile;
