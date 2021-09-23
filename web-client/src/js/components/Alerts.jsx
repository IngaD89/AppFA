import * as React from 'react';
import {DataGrid} from "@mui/x-data-grid";

import logo__section from "./assets/img/FA-APP-logo.svg";
import background from "./assets/img/hClinic2.jpg";


export const Alerts = (props) => {

    const [rows, setRows] = React.useState(defaultRows);

    const handleCellEditCommit = React.useCallback(
        ({id, value}) => {
            const [nhc, fechaRegistro, telefono] = value.toString().split(' ');
            const updatedRows = rows.map((row) => {
                if (row.id === id) {
                    return {...row, nhc, fechaRegistro, telefono};
                }
                return row;
            });
            setRows(updatedRows);
        },
        [rows],
    );

    /*const handleSubmit = (event) => {
        event.preventDefault();

        const api = new PacientesApi()

        api.savePaciente(datos)
            .then(() => setEnviado(true))
            .then(props.cuandoTermines)
    }*/


    return (
        <div className="bk__image"
             style={{backgroundImage: `url(${background})`}}>
            <section>
                <img className="logo__section" src={logo__section} alt={'LogoApp'}/>

                <div className="pacientes__wrapper">
                    <h2 className="alertas__title">Alertas</h2>

                    <div style={{height: 400, width: '100%'}}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            onCellEditCommit={handleCellEditCommit}
                        />
                    </div>

                    <div className="buttons__wrapper">
                        <input className="btn"
                               type="submit"
                               value="Guardar"
                            // onSubmit={handleSubmit}
                        />
                    </div>

                </div>


            </section>
        </div>
    )
}
const columns = [
    {field: 'nhc', headerName: 'NHC', width: 120, editable: true},
    {field: 'fechaRegistro', headerName: 'Fecha de Registro', width: 130, editable: true},
    {field: 'telefono', headerName: 'Teléfono', width: 130, editable: true},
];

const defaultRows = [
    {id: 1, nhc: '12345', fechaRegistro: '00/00/00', telefono: '+34123456789'},
    {id: 2, nhc: '12345', fechaRegistro: '00/00/00', telefono: '+34123456789'},
    {id: 3, nhc: '12345', fechaRegistro: '00/00/00', telefono: '+34123456789'},
];

{/*<div>{props.pacientes.nhc}</div>
<div>{props.pacientes.fechaRegistro}</div>*/
}