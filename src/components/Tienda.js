import React from "react";
import Card from 'react-bootstrap/Card';
import './tienda.css';
import { FormattedMessage } from "react-intl";


function Tienda() {
    const [cafes, setcafes] = React.useState([]);
    const [cafe, setCafe] = React.useState(null);

    React.useEffect(() => {
        fetch("http://localhost:3001/cafes", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => setcafes(data));
    });

    const handlecafeselection = async (cafe) => {
        try {
            const response = await fetch(`http://localhost:3001/cafes/${cafe.id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await response.json();
            setCafe(data);
        } catch (error) {
            console.error(error);
        }
    };


    const crearFila = cafes.map((cafe) => {
        return (
            <tr
                key={cafe.id}
                onClick={() => handlecafeselection(cafe)}
            >
                <th scope="row">{cafe.id}</th>
                <td>{cafe.nombre}</td>
                <td>{cafe.tipo}</td>
                <td>{cafe.region}</td>
            </tr >
        );
    });


    return (
        <>
            <h1 id="h1css">El aroma mágico</h1>
            <img id='banner' src='assets/cafe.png' alt='Cafe' />
            <div id="div11">


                <table >
                    <thead id="thead1">
                        <tr>
                            <th id="uno" >#</th>
                            <th id="dos" ><FormattedMessage id="Nombre" /></th>
                            <th id="tres" ><FormattedMessage id="Tipo" /></th>
                            <th id="cuatro" ><FormattedMessage id="Region" /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {crearFila}
                    </tbody>
                </table >

                <div>
                    {cafe && <Card id='card1' >
                        <Card.Body id="cardbody">
                            <Card.Title id="cardtitle" >{cafe.nombre}
                            </Card.Title>
                            <Card.Text id="cardtext" >
                                {cafe.fecha_cultivo}
                            </Card.Text>
                            <Card.Img id="cardimage" src={cafe.imagen} />
                            <Card.Text id="cardtext2">
                                {cafe.notas}
                            </Card.Text>
                            <Card.Text id="cardtext3" >
                                <FormattedMessage id="AlturaCultivo" />
                                : {cafe.altura} msnm
                            </Card.Text>
                        </Card.Body>
                    </Card>}
                </div>

            </div>
            <p id="bottom" ><FormattedMessage id="InfoContacto" />: +57 3102105253 - info@elaromamagico.com - @elaromamagico</p>
        </>
    );
}

export default Tienda;
