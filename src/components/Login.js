import React from "react";
import './login.css'
import { FormattedMessage } from "react-intl";
function Login() {
    const [user, setuser] = React.useState('');
    const [contrasena, setcontrasena] = React.useState('');
    const [errorAutenticacion, setErrorAtenticacion] = React.useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const a = {
            "login": user,
            "password": contrasena
        };
        fetch("http://localhost:3001/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(a)
        })
            .then(response => response.json())
            .then(data => data.status === 'success' ? window.location.href = '/tienda' : setErrorAtenticacion(<FormattedMessage id="ErrorAutenticacion" />));
    }

    const resetearLogin = () => {
        setuser('');
        setcontrasena('');
    };

    return (
        <div>
            <h1 id="h1css">El aroma mágico</h1>
            <img id='banner' src='assets/cafe.png' alt='Cafe' />
            <div>
                <div id="div1">
                    <h3 id="text1"><FormattedMessage id="PaginaPrincipal" /></h3>
                    <form id='form1'>
                        <div>
                            <p className="label1"><FormattedMessage id="NombreUsuario" /></p>
                            <input className='input1' type="text"
                                value={user} onChange={(e) => setuser(e.target.value)} />
                        </div>
                        <div>
                            <p className="label1" ><FormattedMessage id="Contrasena" /></p>
                            <input className="input1" type="password"
                                value={contrasena} onChange={(e) => setcontrasena(e.target.value)} />
                        </div>
                        <div>
                            <div>
                                <button id="boton1" type="submit" onClick={handleSubmit}><FormattedMessage id="Enviar" /></button>
                                <button id="boton2" type="button" onClick={resetearLogin}><FormattedMessage id="Resetear" />
                                </button>
                            </div>
                        </div>
                        <p id="autenticacion" style={{ color: '#e75d5d', textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>{errorAutenticacion}</p>
                    </form>
                </div>
                <p id='text'><FormattedMessage id="InfoContacto" />:+57 3102105253 - info@elaromamagico.com - @elaromamagico</p>
            </div>
        </div>
    );
}

export default Login;
