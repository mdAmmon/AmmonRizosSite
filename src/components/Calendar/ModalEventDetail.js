import React from 'react'

import { connect } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/User/user.selectors';

const ModalEventDetail = ({element, deleteEvent, isLogged}) => {

    const { principal, id, nombre, tipo, descripcion } = element;

    return (
        <div className="modalEventDetail">
            {(isLogged) ? <span className="del" id={id} onClick={() => deleteEvent(id)} >&times;</span> : ""}
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

const mapStateToProps = state => ({
    isLogged: selectIsLoggedIn(state)
})

const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(ModalEventDetail);