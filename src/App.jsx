import "./App.css";
import Card from "./components/Card";
import {useState} from 'react';

function App() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const [showCard, setShowCard] = useState(false);
    const [formInfo, setFormInfo] = useState();

    const handleSubmit = (e) => {
      e.preventDefault();

      setShowCard(false);
      
      if (name === '' || name.length < 3 || name.startsWith(' ')) {
        return setError(true);
      }
      
      if (address === '' || address.length < 6 || address.startsWith(' ')) {
        return setError(true);
      }
      
      if (email === '' || email.length < 6 || email.startsWith(' ')) {
        return setError(true);
      }

      setFormInfo({
        name,
        address, 
        email
      });

      setName('');
      setAddress('');
      setEmail('');

      setShowCard(true);
      setError(false);
     
    }


    return (
      <div className="App">
        <h1> Informacion del estudiantes </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre estudiante</label>
            <input id="name" name="name" value={name}  onChange={(event) => setName(event.target.value)} />
          </div>        
          <div className="form-group">
            <label htmlFor="address">Dirección</label>
            <input id="address" name="address" value={address}  onChange={(event) => setAddress(event.target.value)} />
          </div>        
          <div className="form-group">
            <label htmlFor="email">correo electronico</label>
            <input id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </div>
          <button type="submit" className="btn">Enviar</button>
        </form>
        {error && <p>Por favor ingresa toda la información</p>}
        {showCard && <Card name={formInfo.name} address={formInfo.address} email={formInfo.email}/>}
      </div>
    );
}

export default App;

