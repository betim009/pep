import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PacienteContext from './PacienteContext';

const PacienteProvider = ({ children }) => {
  const [pacientes, setPacientes] = useState([]);

  const addPaciente = (paciente) => {
    setPacientes((prevState) => [...prevState, paciente]);
  };

  const values = {
    pacientes,
    addPaciente,
  };

  return <PacienteContext.Provider value={values}>{children}</PacienteContext.Provider>;
};

PacienteProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PacienteProvider;
