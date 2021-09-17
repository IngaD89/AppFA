import * as React from 'react';


export const Alerts = (props) => {
    return (
        <div>
            <section>
                <div>{props.pacientes.nhc}</div>
                <div>{props.pacientes.fechaRegistro}</div>
            </section>
        </div>
    )
}
