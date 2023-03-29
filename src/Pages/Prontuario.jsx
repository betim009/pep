import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import PacienteContext from '../Context/PacienteContext';

const Prontuario = () => {
  const { addPaciente } = useContext(PacienteContext);
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [telefone, setTelefone] = useState('');
  const [alergias, setAlergias] = useState('');
  const [sintomas, setSintomas] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPaciente({
      nome,
      idade,
      cidade,
      bairro,
      telefone,
      alergias,
      sintomas,
    });
    setNome('');
    setIdade('');
    setCidade('');
    setBairro('');
    setTelefone('');
    setAlergias('');
    setSintomas('');
  };

  return (
    <div>
      <h1 className="text-center">Prontuário</h1>
      <form className="container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input type="text" className="form-control" id="nome" required value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="idade">Idade:</label>
          <input type="number" className="form-control" id="idade" required value={idade} onChange={(e) => setIdade(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="cidade">Cidade:</label>
          <input type="text" className="form-control" id="cidade" required value={cidade} onChange={(e) => setCidade(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="bairro">Bairro:</label>
          <input type="text" className="form-control" id="bairro" required value={bairro} onChange={(e) => setBairro(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="telefone">Telefone:</label>
          <input type="tel" className="form-control" id="telefone" required value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="alergias">Alergias:</label>
          <textarea className="form-control" id="alergias" rows="4" cols="20" value={alergias} onChange={(e) => setAlergias(e.target.value)}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="sintomas">Sintomas:</label>
          <textarea className="form-control" id="sintomas" rows="4" cols="20" value={sintomas} onChange={(e) => setSintomas(e.target.value)}></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-2">Salvar</button>
      </form>
      <div className="d-flex justify-content-center mt-4">
        <Link to="/resultados" className="btn btn-primary">
          Ver resultados
        </Link>
      </div>
    </div>
  );
};

export default Prontuario;
