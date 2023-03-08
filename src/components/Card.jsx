const Card = ({name, address, email}) => {
    return <div className="card">
        <p>Nombre del estudiante: {name}</p>
        <p>Dirección del estudiante: {address}</p>
        <p>Correo electronico del estudiante: {email}</p>
    </div>
};

export default Card;
