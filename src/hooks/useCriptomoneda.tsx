import { useState, type JSX } from 'react';
import styled from '@emotion/styled';
import type { CriptoOpcion } from '../models/CriptoOpcion';

//---------------------- Styled Components ---------------------//
const Container = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid transparent;
  font-size: 1rem;
  background-color: #fff;
  color: #333;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #66a2fe;
    box-shadow: 0 0 0 3px rgba(102, 162, 254, 0.1);
  }

  &:hover {
    border-color: rgba(102, 162, 254, 0.3);
  }

  option {
    padding: 8px;
  }

  &:disabled {
    background-color: #f5f5f5;
    color: #999;
    cursor: not-allowed;
  }
`;

//---------------------- Hook ---------------------//
const useCriptomoneda = (
  label: string,
  stateInicial: string,
  opciones: CriptoOpcion[]
): [string, () => JSX.Element, (value: string) => void] => {
  const [state, setState] = useState<string>(stateInicial);

  const SelectCripto = (): JSX.Element => (
    <Container>
      <Label htmlFor="criptomoneda">{label}</Label>
      <Select
        id="criptomoneda"
        name="criptomoneda"
        onChange={e => setState(e.target.value)}
        value={state}
        disabled={opciones.length === 0}
        aria-label={label}>
        <option value="">{opciones.length === 0 ? 'Cargando opciones...' : '- Seleccione una opción -'}</option>
        {opciones.map(opcion => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.name} ({opcion.symbol.toUpperCase()})
          </option>
        ))}
      </Select>
    </Container>
  );

  return [state, SelectCripto, setState];
};

export default useCriptomoneda;
