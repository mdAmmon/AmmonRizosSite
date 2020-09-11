import React from 'react';

const EmployeeCard = ({employee, showModal}) => {
        const {priority, position, email, url} = employee;
        const name = employee.nombre;
        const phone = employee.direct_phone;
        const mobile = employee.mobile_phone;
        const extension = employee.ext;
        const manager = employee.Manager;
        const cardImageClass="employeeImage priority" + priority;

        // const img = (url)? require(`../../img/${url}`): null;
        const img = require(`../../img/gray_square.png`)
        
        return (
            <div onClick={()=>{showModal({name, position, email, phone, mobile, extension, manager, priority, url})} }
            className="card shadowing" key={email}>
                <div className={cardImageClass} style={{backgroundImage: `url(${img})`}}></div>
                <h1 className="registryEmpTitle">{name}</h1>
                <p className="registryEmpPosition">{position}</p>
                <p className="registryEmpEmail">{email}</p>
            </div>
        );

}

export default EmployeeCard;