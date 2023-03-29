import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PacienteContext from '../Context/PacienteContext';

const Resultados = () => {
  const { pacientes } = useContext(PacienteContext);

  return (
    <div className="container py-5" style={{backgroundColor: '#f5f5f5'}}>
      <h1 className="text-center mb-4">Resultados</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          {pacientes.map((paciente, index) => (
            <div key={index} className="card my-3">
              <div className="card-body">
                <h5 className="card-title">{paciente.nome}</h5>
                <p className="card-text">
                  Idade: {paciente.idade} anos<br />
                  Cidade: {paciente.cidade}<br />
                  Bairro: {paciente.bairro}<br />
                  Telefone: {paciente.telefone}<br />
                  Alergias: {paciente.alergias}<br />
                  Sintomas: {paciente.sintomas}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <Link to="/" className="btn btn-primary">Voltar</Link>
      </div>
    </div>
  );
};

export default Resultados;
