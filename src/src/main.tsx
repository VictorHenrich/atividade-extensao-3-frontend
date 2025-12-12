import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, createSystem, defineConfig, defaultConfig } from '@chakra-ui/react'
import App from './App.tsx'
import 'leaflet/dist/leaflet.css';

const config =  defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: "#3FA666",
        secondary: "#D64545",
        container: "#EDEDED",
        white: "#FFFFFF",
        black: "#303030",
        detail: "#2D5A3A"
    },
      components: {
        Button: {
          baseStyle: {
            borderRadius: 'md',
          },
          variants: {
            solid: (props) => ({
              bg: props.colorScheme === 'primary' ? 'primary.500' : undefined,
              color: 'white',
              _hover: {
                bg: props.colorScheme === 'primary' ? 'primary.600' : undefined,
              },
            }),
          },
          defaultProps: {
            colorScheme: 'primary',
          },
        },
        Card: {
          baseStyle: {
            container: {
              bg: 'container.500',
              borderRadius: 'lg',
            },
          },
        }
      },
    }
  }
});

const system = createSystem(
  defaultConfig, 
  config
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
  </StrictMode>,
)
