import React from 'react';

import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ModalTitle from "react-bootstrap/ModalTitle";
// import "../styles/employeeModal.css"


class InsertCrossModal extends React.Component {
    state = {
        competitors: [],
        manufacturers: [],
        selectedCompetitor: "",
        competitorPart: "",
        selectedPrincipal: "",
        principalPart: "",
        direct: "YES",
        comments: "",
        addNewCompetitor: false,
        newCompetitor: ""
    }

    componentDidMount() {
        let mfgs;

        // https://arizoslocal.herokuapp.com/includes/getPrincipals.php
        fetch("https://arback-node.herokuapp.com/principals")
            .then(res => res.json())
            .then(res => {
                mfgs = res;
                this.setState({ manufacturers: mfgs, selectedPrincipal: mfgs[0].brand_id });
            });

        this.fetchCompetitors();

    }

    fetchCompetitors = () => {
        let comps;

        // https://arizoslocal.herokuapp.com/includes/getCompetitors.php
        fetch("https://arback-node.herokuapp.com/competitors")
            .then(res => res.json())
            .then(res => {
                comps = res;
                this.setState({ competitors: comps, selectedCompetitor: comps[0].competitor_id });
            });
    }

    addNewCompetitor = () => {
        let body = {};
        body.competitor = this.state.newCompetitor.toUpperCase();

        fetch("https://arback-node.herokuapp.com/competitors", {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(body)

        })
            .then(res => res.json())
            .catch(error => alert("something went wrong. :("))
            .then(response => {
                console.log(response);
                this.toggleAddCompetitorButton();
                this.fetchCompetitors();
            });
    }

    

    toggleAddCompetitorButton = () => {
        const isAddingNewComp = this.state.addNewCompetitor;

        let obj = {};
        obj.addNewCompetitor = !isAddingNewComp;

        if (isAddingNewComp) obj.newCompetitor = "";
        this.setState(obj);
    }

    recordChange = (e) => {
        let obj = {};
        obj[e.target.id] = e.target.value;
        this.setState(obj);

        if (e.target.id === "competitorPart" || e.target.id === "principalPart") {
            this.validateForm(e);
        }
    }

    validateForm = (e) => {
        if (e.target.value === "") {
            e.target.classList.add("redBorder");
        } else {
            e.target.classList.remove("redBorder");
        }
    }

    insertCross = (e) => {
        if (this.state.competitorPart === "" || this.state.selectedCompetitor === "" || this.state.direct === "" ||
            this.state.selectedPrincipal === "" || this.state.principalPart === "") {
            alert("Error. Something went Wrong");
            return;
        }

        const { selectedCompetitor, competitorPart, selectedPrincipal, principalPart, direct, comments } = this.state;

        let body = {
            comp_id: selectedCompetitor,
            comp_model: competitorPart,
            brnd_id: selectedPrincipal,
            brnd_model: principalPart,
            direct: direct,
            comments: comments
        }

        console.log(JSON.stringify(body));
        // let body = new FormData();

        fetch("https://arback-node.herokuapp.com/crosses", {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(body)

        })
            .then(res => res.json())
            .catch(error => alert("something went wrong. :("))
            .then(response => {
                if (response.success) {
                    alert(response.success);
                    this.props.updateTable();
                } else if (response.error) {
                    alert(response.error);
                }

                this.props.hide();
            });
    }

    render() {

        return (
            <Modal
                dialogClassName='custom-dialog'
                show={this.props.show}
                onHide={this.props.hide}
                id="insertCrossModal"
                centered>

                <ModalHeader closeButton>
                    <ModalTitle>Insert Cross</ModalTitle>
                </ModalHeader>

                <ModalBody style={{ transition: 'all 0.5s ease-out' }}>
                    <div className="form-group">

                        <div className='row form-group'>

                            <div className='col-12'>
                                <label htmlFor="compSelect">Competitor:</label>
                                <select name="competitor" className="custom-select col-10" style={{ maxWidth: "88%" }} id="selectedCompetitor" onChange={this.recordChange}>
                                    {this.state.competitors.map(
                                        element => <option key={element.competitor_id} value={element.competitor_id}>{element.competitor_name}</option>
                                    )}
                                </select>

                                <button className='form-control' style={{ float: "right", width: "10%" }} onClick={this.toggleAddCompetitorButton}>
                                    {this.state.addNewCompetitor ? <i className="fa fa-minus red" aria-hidden="true"></i> : <i className="fa fa-plus green" aria-hidden="true"></i>}
                                </button>
                            </div>
                        </div>
                    </div>

                    {
                        this.state.addNewCompetitor ?
                            (<div className='row form-group'>
                                <div className='col-12'>
                                    <input type="text" name="compName" id="newCompetitor" className="form-control form-group"
                                        onChange={this.recordChange} onBlur={this.validateForm}
                                        style={{ float: "left", width: "78%" }}
                                        placeholder="New Competitor's name" aria-describedby="newCompetitor" />

                                    {this.state.newCompetitor ? (<button className="btn btn-success form-group" id="addComp"
                                        style={{ width: "20%", float: "right" }}
                                        onClick={this.addNewCompetitor}>
                                        Add
                                    </button>) :
                                        (<button className="btn btn-success form-group" disabled
                                            style={{ width: "20%", float: "right" }}>
                                            Add
                                    </button>)}

                                </div>
                            </div>) : ""
                    }

                    <div className="row form-group">
                        <div className="col-12">
                            <input type="text" name="nombreR" id="competitorPart" className="form-control"
                                onKeyUp={this.recordChange} onBlur={this.validateForm}
                                placeholder="Competitor's Part Number..." aria-describedby="competitorPartNumber" />
                        </div>

                    </div>

                    <div className="form-group">
                        <label htmlFor="compSelect">A&R Manufacturer:</label>
                        <select
                            onChange={this.recordChange}
                            name="principal" className="custom-select" id="selectedPrincipal">
                            {this.state.manufacturers.map(
                                element => <option key={element.brand_id} value={element.brand_id}>{element.brand_name}</option>
                            )}
                        </select>
                    </div>

                    <div className="row form-group">
                        <div className="col-12">
                            <input type="text" name="nombreR" id="principalPart" className="form-control"
                                placeholder="AR Manufacturer's Part Number..." aria-describedby="helpId"
                                onKeyUp={this.recordChange} onBlur={this.validateForm} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="directCross">Direct:</label>
                        <select name="direct" className="custom-select" onChange={this.recordChange} id="direct">
                            <option value="YES">Yes</option>
                            <option value="NO">No</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="comments">Comments</label>
                        <textarea className="form-control" onKeyUp={this.recordChange} id="comments" rows="2"></textarea>
                    </div>

                    {(this.state.competitorPart !== "" && this.state.principalPart !== "") ? <button className="btn btn-AR col-3"
                        id="sendReg" onClick={this.insertCross}>Send</button> : <button disabled className="btn btn-AR col-3"
                            id="sendReg">Send</button>}

                </ModalBody>
            </Modal >
        );
    }


}

export default InsertCrossModal;