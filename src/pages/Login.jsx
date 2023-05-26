import React, {useState} from 'react';
import { useNavigate} from 'react-router-dom';
import Button from './Button';
import Banner from "../images/banner.png";

import Input from './Input';




export default function Login() {


    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const API_URL = 'http://localhost:8000';
    

    const validate = () => {
        const errors = {};
        if (!user) errors.user = "El usuario es requerido";
        if (!password) errors.password = "La contraseña es requerida";
        if (password.length < 6) errors.password = "La contraseña debe tener al menos 6 caracteres";
        return errors;
    };

    const sendData = async () => {
        if (user !== "" && password !== "") {
    
          if (password.length < 6) {
            setErrors({ password: "La contraseña debe tener al menos 6 caracteres" });
            return;
          }
    
          try {
            const datosEnviados = { user, password };
            const response = await fetch(`${API_URL}/auth/login`, {
              method: 'POST',
              body: JSON.stringify(datosEnviados),
              headers: {
                'Content-Type': 'application/json'
              }
            })

    
            if (!response.ok) {
    
              throw new Error("La red no responde");
    
            }
    
            const data = await response.json();
            sessionStorage.setItem('token', data.token);
            navigate('/libreria');
            
          } catch (error) {
            console.error("Problema con el inicio de sesión:", error);
          }
        }
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length === 0) {
    
          console.log("Enviar datos de registro", { user, password });
          sendData();
        } else {
          setErrors(errors);
        }
      };

  return (
    <div>
      <div>
          <h5 style={{textAlign: 'left', fontSize: '30px', marginLeft: '30px'}}>El aroma mágico</h5>
          <hr style={{borderTop: '1px solid gray', margin: '30px'}} />
      </div>
      <div className='container'>
        <img src={Banner} alt="Banner" className='banner_inicio_sesion' />
      </div>
      <div>
        <hr style={{borderTop: '1px solid gray', margin: '30px'}} />
      </div>
      <div className='container2'>

      <h5 style={{textAlign: 'center', fontSize: '15px'}}>Inicio de Sesion</h5>
        <form onSubmit={handleSubmit}>

        <div style={{
          display: 'flex', 
          justifyContent: 'center', 
          height: '100vh'  // Asegúrate de que el contenedor exterior ocupa toda la altura de la ventana
        }}>
            <div style={{
                backgroundColor: 'antiquewhite', 
                padding: '20px',
                width: '30%',  
                height: '200px', 
            }}>
                <form>



                <div style={{ marginLeft: '10px' }}>
                <label style={{ display: 'block', marginBottom: '10px' }}>
                    Nombre:
                </label>
                <Input 
                    type={'text'} 
                    id={'usuario'} 
                    value={user} 
                    onChange={(e) => setUser(e.target.value)} 
                />
                {errors.user && <span>{errors.user}</span>}
                
                <label style={{ display: 'block', marginBottom: '10px' }}>
                    Contraseña:
                </label>
                <Input 
                    type={'password'} 
                    id={'password'} 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                {errors.user && <span>{errors.user}</span>}

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button 
                        name={"form__account"} 
                        id={'bt'} 
                        type="submit" 
                        text={'Ingresar'} 
                        style={{ backgroundColor: 'green', color: 'white' }} 
                    />
                    <Button 
                        name={"form__account"} 
                        id={'bt2'} 
                        type="button" 
                        text={'Cancelar'} 
                        style={{ backgroundColor: 'red', color: 'white' }} 
                    />
                </div>
                <h5 style={{textAlign: 'center', fontSize: '15px'}}>Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico</h5>
            </div>


                </form>
            </div>
        </div>

      </form>
      </div>
    </div>
  )
}
