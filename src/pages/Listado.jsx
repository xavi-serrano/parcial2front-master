import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CustomCard from './CustomCard'; // Asegúrate de tener este archivo y componente


function Listado() {

    const URL = 'http://localhost:3001/cafes';

    const [cafes, setCafes] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                console.log("Se ha cargado la lista de cafés: " + data);
                setCafes(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className="container-fluid" style={{ height: '100vh' }}>
            <div className="row" style={{ height: '100%' }}>
                <div className="col-8">
                    <div className='container'>
                        <div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombre</th>
                                        <th>Tipo</th>
                                        <th>Región</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cafes.map(cafe => (
                                        <tr key={cafe.id} onClick={() => fetch(`http://localhost:3001/cafes/${cafe.id}`)
                                            .then(response => response.json())
                                            .then(data => setSelectedCard(data))
                                            .catch(error => {
                                                console.error('Error:', error);
                                            })}>
                                            <td>{cafe.id}</td>
                                            <td>{cafe.nombre}</td>
                                            <td>{cafe.tipo}</td>
                                            <td>{cafe.region}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    {selectedCard && (
                        <CustomCard
                          title={selectedCard.nombre}
                          image={selectedCard.imagen}
                          cultivationDate={selectedCard.fecha_cultivo}
                          region={selectedCard.region}
                          notes={selectedCard.notas}
                          style={{ width: '18rem' , backgroundColor : '#FFCCCC'}}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Cafe;
