import React from 'react';

import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LoginForm = (props) => {

    return (
        <Modal
            dialogClassName='custom-dialog'
            show={props.show}
            onHide={props.hide}
            id="loginModal"
            centered
        >

            <ModalHeader closeButton>
                <ModalTitle>Admin Login</ModalTitle>
            </ModalHeader>

            <ModalBody>
                <Form>
                    <Form.Group>
                        <label className="col-12" htmlFor="usr"><i className="fa fa-user fa-form"></i>Username</label>
                        <input type="text" className="form-control" id="usr" name="usr"
                            placeholder="Enter Username..." />
                    </Form.Group>

                    <Form.Group>
                        <label className="col-12" htmlFor="pwd"><i className="fa fa-lock fa-form"></i>Password</label>
                        <input type="password" className="form-control" id="pwd" name="pwd"
                            placeholder="Enter Password..." />
                    </Form.Group>

                    <Form.Group>
                        <input type="button" className="btn btn-primary btn-block btn-lg" id="submitLogin"
                            name="submit" value="Login"/>
                    </Form.Group>

                </Form>

            </ModalBody>
{/* 
                <ModalFooter>
                    <Button variant="secondary" onClick={props.hide}>Close</Button>
                    <Button id="submitLogin">Login</Button>
                </ModalFooter> */}
        </Modal>
            );
        
        }
        
export default LoginForm;