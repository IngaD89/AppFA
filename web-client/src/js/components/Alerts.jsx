import * as React from 'react';

import logo__section from "./assets/img/FA-APP-logo.svg";


import {DataGrid} from '@mui/x-data-grid';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";

export const Alerts = (props) => {


    const columns = [

        {
            field: 'nhc',
            headerName: 'NHC',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 100,
            /*valueGetter: (params) =>
                `${params.getValue(params.id, 'nhc') || ''}
                ${params.getValue(params.id, 'fechaRegistro') || ''}`,*/
        },
        {
            field: 'fechaRegistro',
            headerName: 'Fecha de Registro',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 150,
            /*valueGetter: (params) =>
                `${params.getValue(params.id, 'nhc') || ''} 
                ${params.getValue(params.id, 'fechaRegistro') || ''}`,*/
        },
    ];

    const rows = [
        {id: 1, fechaRegistro: 'Snow', nhc: 'Jon'},
        {id: 2, fechaRegistro: 'Lannister', nhc: 'Cersei'},
        {id: 3, fechaRegistro: 'Lannister', nhc: 'Jaime'},
    ];



    return (
        <div>
            <section>
                <img className="logo__section" src={logo__section} alt={'LogoApp'}/>

                <div className="pacientes__wrapper">
                    <h2 className="alertas__title">Alertas</h2>

                    <div className="alertas__table">
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />
                    </div>
                </div>
            </section>

            <section>
                <img className="logo__section" src={logo__section} alt={'LogoApp'}/>

                <div className="pacientes__wrapper">
                    <h2 className="pacientes__title">Pacientes</h2>
                    <div className="pacientes__table3">

                        <TableContainer component={Paper}>
                            <Table className="contenedorTabla">
                                <TableHead>
                                    <TableRow className="tcolor">
                                        <TableCell>ID</TableCell>
                                        <TableCell>NHC</TableCell>
                                        <TableCell>Fecha de Registro</TableCell>
                                        <TableCell>Teléfono</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                        <TableRow>
                                            <TableCell>IDX</TableCell>
                                            <TableCell align="left">nhcX</TableCell>
                                            <TableCell align="left">fechaRegistroX</TableCell>
                                            <TableCell align="left">telefonoX</TableCell>
                                        </TableRow>
                                    {/*{data.map(props => (
                                        <TableRow key={props.pacientes.id}>
                                            <TableCell>{props.pacientes.id}</TableCell>
                                            <TableCell align="left">{props.pacientes.nhc}</TableCell>
                                            <TableCell align="left">{props.pacientes.fechaRegistro}</TableCell>
                                            <TableCell align="left">{props.pacientes.telefono}</TableCell>
                                        </TableRow>
                                    ))}*/}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>


                    <div className="buttons__wrapper">
                        <input className="btn"
                               type="submit"
                               value="Editar"
                        />
                        <input className="btn"
                               type="submit"
                               value="Borrar"
                        />
                    </div>

                    {/*<div>{props.pacientes.nhc}</div>
                    <div>{props.pacientes.fechaRegistro}</div>*/}

                </div>

            </section>
        </div>
)
}
