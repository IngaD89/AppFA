import * as React from 'react';


export const Alerts = (props) => {
    return (
        <div>
            <section>
                <div>{props.pacientes.fechaRegistro}</div>
                <div>{props.pacientes.nhc}</div>
            </section>
        </div>
    )
}
