import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectisLoggingIn, selectHasLoginError } from '../../redux/User/user.selectors';
import { startLogin, unsetLoginError } from '../../redux/User/user.actions';

import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import Form from "react-bootstrap/Form";

class LoginForm extends React.Component {
    state = {
        usr: '',
        pwd: ''
    }
    login = () => {
        if (this.state.usr === '') {
            document.getElementById("usr").style.borderColor = "red";
        }

        if (this.state.pwd === '') {
            document.getElementById("pwd").style.borderColor = "red";
        }

        if (this.state.usr === '' || this.state.pwd === '') {
            return;
        }


        let body = {
            usr: this.state.usr,
            pwd: this.state.pwd
        }

        this.props.login(body);

        this.setState({
            usr: '',
            pwd: '',
        });

        // This should only happen if login was successful
        this.props.hide();


    }

    updateInput = (e) => {
        if(this.props.loginError) this.props.removeLoginError()
        this.setState({ [e.target.name]: e.target.value });
        if (e.target.value) {
            e.target.style.borderColor = 'gray';
        } else {
            e.target.style.borderColor = 'red';
        }
    }

    render() {
        return (
            <Modal
                dialogClassName='custom-dialog'
                show={this.props.show}
                onHide={this.props.hide}
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
                            <input type="text" className="form-control" id="usr" name="usr" onChange={this.updateInput}
                                placeholder="Enter Username..." />
                        </Form.Group>

                        <Form.Group>
                            <label className="col-12" htmlFor="pwd"><i className="fa fa-lock fa-form"></i>Password</label>
                            <input type="password" className="form-control" id="pwd" name="pwd"
                                placeholder="Enter Password..." onChange={this.updateInput} />
                        </Form.Group>

                        <Form.Group>
                            <input type="button" className="btn btn-primary btn-block btn-lg" id="submitLogin"
                                name="submit" value="Login" onClick={this.login} />
                        </Form.Group>

                    </Form>

                </ModalBody>
            </Modal>
        );
    }


}

const mapStateToProps = createStructuredSelector({
    isLoading: selectisLoggingIn,
    loginError: selectHasLoginError
})

const mapDispatchToProps = dispatch => ({
    login: credentials => dispatch(startLogin(credentials)),
    removeLoginError: () => dispatch(unsetLoginError)
})
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);