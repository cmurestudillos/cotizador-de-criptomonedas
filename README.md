# 💰 Cotizador de Criptomonedas

Una aplicación web moderna y elegante para consultar en tiempo real los precios de las principales criptomonedas del mercado. Construida con React, TypeScript y Vite para ofrecer una experiencia de usuario fluida y profesional.

## 🚀 Demo en Vivo

[Ver aplicación en funcionamiento](https://criptomonedas-cotizador.vercel.app)

## ✨ Características

### 🎯 Funcionalidades Principales
- **Cotización en Tiempo Real**: Precios actualizados de las top 20 criptomonedas
- **Múltiples Monedas**: Soporte para 8+ monedas fiat (USD, EUR, GBP, JPY, etc.)
- **Información Detallada**: Precio actual, máximo/mínimo diario, variación 24h
- **Interfaz Responsive**: Optimizada para desktop, tablet y móvil
- **Manejo Robusto de Errores**: Mensajes informativos y reintentos automáticos

### 💎 Características Técnicas
- **TypeScript**: Tipado fuerte para mayor confiabilidad
- **Hooks Personalizados**: Lógica reutilizable y mantenible
- **Styled Components**: Estilos dinámicos y tema consistente
- **Animaciones Suaves**: Transiciones y efectos visuales elegantes
- **Accesibilidad**: ARIA labels y navegación por teclado
- **Performance Optimizada**: Memoización y lazy loading

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 19** - Biblioteca de interfaz de usuario
- **TypeScript** - Superset de JavaScript con tipado estático
- **Vite** - Herramienta de construcción ultrarrápida
- **Emotion/Styled** - CSS-in-JS para estilos dinámicos

### APIs y Servicios
- **CryptoCompare API** - Datos de criptomonedas en tiempo real
- **Axios** - Cliente HTTP para peticiones API

### Herramientas de Desarrollo
- **ESLint** - Linter para código JavaScript/TypeScript
- **Prettier** - Formateador de código automático

## 📦 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 20 o superior)
- pnpm

### Instalación Local

```bash
# Clonar el repositorio
git clone https://github.com/cmurestudillos/cotizador-de-criptomonedas.git

# Navegar al directorio
cd cotizador-de-criptomonedas

# Instalar dependencias
pnpm install

# Ejecutar en modo desarrollo
pnpm dev

# Construir para producción
pnpm build

# Previsualizar build de producción
pnpm preview
```

## 🏗️ Estructura del Proyecto

```
src/
├── components/          # Componentes React reutilizables
│   ├── Cotizacion.tsx   # Mostrar resultados de cotización
│   ├── Error.tsx        # Manejo y display de errores
│   ├── Formulario.tsx   # Formulario de selección
│   └── Spinner/         # Componente de carga
├── hooks/               # Hooks personalizados
│   ├── useMoneda.tsx    # Hook para selección de moneda
│   └── useCriptomoneda.tsx # Hook para selección de cripto
├── assets/              # Imágenes y recursos estáticos
└── App.tsx              # Componente principal
```

## 🌐 API Utilizada

Esta aplicación utiliza la [CryptoCompare API](https://min-api.cryptocompare.com/) para obtener datos de criptomonedas:

- **Endpoint Principal**: `/data/pricemultifull`
- **Lista de Criptos**: `/data/top/mktcapfull`
- **Rate Limit**: 100,000 requests/mes (plan gratuito)

## 📱 Responsive Design

La aplicación está optimizada para diferentes tamaños de pantalla:

- **Desktop**: Diseño de dos columnas con sidebar
- **Tablet**: Layout adaptativo con elementos apilados
- **Móvil**: Interfaz vertical optimizada para touch

## ♿ Accesibilidad

- ✅ Navegación por teclado completa
- ✅ Labels ARIA para lectores de pantalla
- ✅ Contraste de colores WCAG AA
- ✅ Estados de foco visibles
- ✅ Texto alternativo en imágenes

## 🚧 Roadmap

### Versión 2.0
- [ ] Gráficos históricos de precios
- [ ] Favoritos y watchlist personalizada
- [ ] Notificaciones de precio
- [ ] Modo oscuro/claro
- [ ] PWA capabilities (offline)

### Versión 2.1
- [ ] Calculadora de conversión
- [ ] Comparación entre criptomonedas
- [ ] Integración con portfolios
- [ ] Exportar datos a CSV/PDF

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Para contribuir:

1. Fork del proyecto
2. Crear una branch para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

### Guías de Contribución
- Seguir las convenciones de código existentes
- Añadir tests para nuevas funcionalidades
- Documentar cambios en el README
- Mantener el código TypeScript tipado

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- [CryptoCompare](https://www.cryptocompare.com/) por proporcionar la API gratuita
- [React Community](https://reactjs.org/) por las increíbles herramientas
- [Emotion](https://emotion.sh/) por hacer que los estilos sean divertidos

---

⭐ **¡Si te gusta este proyecto, dale una estrella en GitHub!** ⭐

## 📊 Métricas del Proyecto

![GitHub Stars](https://img.shields.io/github/stars/cmurestudillos/cotizador-de-criptomonedas?style=social)
![GitHub Forks](https://img.shields.io/github/forks/cmurestudillos/cotizador-de-criptomonedas?style=social)
![GitHub Issues](https://img.shields.io/github/issues/cmurestudillos/cotizador-de-criptomonedas)
![GitHub PRs](https://img.shields.io/github/issues-pr/cmurestudillos/cotizador-de-criptomonedas)