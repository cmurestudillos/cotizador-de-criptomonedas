import { useState, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

// Componentes
import Cotizacion from './components/Cotizacion';
import Formulario from './components/Formulario';
import Spinner from './components/Spinner/Spinner';
import ErrorMessage from './components/Error';

// Assets
import imagen from './assets/img/cryptomonedas.png';
import type { CotizacionData } from './models/CotizacionData';

//---------------------- Styled Components ---------------------//
const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
  height: auto;
`;

const Footer = styled.p`
  text-align: center;
  margin-top: 2rem;
  color: #fff;
  font-size: 0.9rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 2rem;
  margin-top: 5rem;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin-top: 1rem;
  }
`;

const ErrorContainer = styled.div`
  margin: 1rem 0;
`;

//---------------------- App Component ---------------------//
function App() {
  const [moneda, setMoneda] = useState<string>('');
  const [criptomoneda, setCriptomoneda] = useState<string>('');
  const [resultado, setResultado] = useState<CotizacionData>({});
  const [cargando, setCargando] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // Función para cotizar criptomoneda
  const cotizarCriptomoneda = useCallback(async () => {
    if (!moneda || !criptomoneda) return;

    try {
      setCargando(true);
      setError('');

      const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${moneda.toLowerCase()}&ids=${criptomoneda}`;

      const response = await axios.get(url);
      const cotizacion = response.data?.[0];

      // Verificar si hay datos válidos en la respuesta
      if (cotizacion) {
        const formatearPrecio = (valor: number | null | undefined): string | undefined =>
          valor == null
            ? undefined
            : new Intl.NumberFormat('es-ES', { style: 'currency', currency: moneda }).format(valor);

        // Simular delay para mostrar spinner (opcional, puedes removarlo)
        setTimeout(() => {
          setResultado({
            PRICE: formatearPrecio(cotizacion.current_price),
            HIGHDAY: formatearPrecio(cotizacion.high_24h),
            LOWDAY: formatearPrecio(cotizacion.low_24h),
            CHANGEPCT24HOUR:
              cotizacion.price_change_percentage_24h != null
                ? String(cotizacion.price_change_percentage_24h)
                : undefined,
            LASTUPDATE: cotizacion.last_updated,
            FROMSYMBOL: cotizacion.symbol?.toUpperCase(),
            TOSYMBOL: moneda,
          });
          setCargando(false);
        }, 1500);
      } else {
        throw new Error('No se encontraron datos para esta combinación');
      }
    } catch (err) {
      setCargando(false);

      if (axios.isAxiosError(err)) {
        if (err.response?.status === 429) {
          setError('Demasiadas solicitudes. Por favor, espera un momento antes de intentar nuevamente.');
        } else if (!navigator.onLine) {
          setError('Sin conexión a internet. Verifica tu conexión y vuelve a intentar.');
        } else {
          setError('Error al obtener los datos. Por favor, verifica tu conexión e intenta nuevamente.');
        }
      } else {
        setError('Ha ocurrido un error inesperado. Por favor, intenta nuevamente.');
      }

      setResultado({});
    }
  }, [moneda, criptomoneda]);

  // Effect para cotizar cuando cambien moneda o criptomoneda
  useEffect(() => {
    cotizarCriptomoneda();
  }, [cotizarCriptomoneda]);

  // Función para manejar nueva cotización
  const handleNuevaCotizacion = (nuevaMoneda: string, nuevaCriptomoneda: string) => {
    setMoneda(nuevaMoneda);
    setCriptomoneda(nuevaCriptomoneda);
    setError('');
  };

  // Función para limpiar resultados
  const limpiarResultados = () => {
    setResultado({});
    setError('');
    setMoneda('');
    setCriptomoneda('');
  };

  // Determinar qué componente mostrar
  const renderContent = () => {
    if (error) {
      return (
        <ErrorContainer>
          <ErrorMessage mensaje={error} />
        </ErrorContainer>
      );
    }

    if (cargando) {
      return <Spinner />;
    }

    if (Object.keys(resultado).length > 0) {
      return <Cotizacion resultado={resultado} onNuevaCotizacion={limpiarResultados} />;
    }

    return null;
  };

  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt="Aplicación de cotización de criptomonedas" title="Cotizador de Criptomonedas" />
        <Footer>
          Copyright © - Designed and Created by: <strong>Carlos Mur</strong>
        </Footer>
      </div>

      <div>
        <Heading>Cotizador de Criptomonedas</Heading>

        <Formulario onSubmit={handleNuevaCotizacion} isLoading={cargando} />

        {renderContent()}
      </div>
    </Contenedor>
  );
}

export default App;
