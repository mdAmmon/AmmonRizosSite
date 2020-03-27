import React, { Component } from 'react'

class ModalEventDetail extends Component {
    render() {
            const { principal, id, nombre, tipo, descripcion } = this.props.element;

            return (
                <div className="modalEventDetail">
                    {(this.props.isLogged)?<span className="del" id={id} onClick={()=>this.props.deleteEvent(id)} >&times;</span>: ""}
                    <div className={"principalTag " + principal}></div>
                    <div className="modalEventData">
                        <p><b>Nombre</b>: {nombre}</p>
                        <p><b>Principal</b>: {principal}</p>
                        <p><b>Tipo</b>: {tipo}</p>
                        <p><b>Descripcion</b>: {descripcion}</p>
                    </div>


                    <hr />

                </div>
            );
    }
}

    export default ModalEventDetail;