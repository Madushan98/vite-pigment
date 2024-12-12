import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { pigment } from '@pigment-css/vite-plugin';
import { createTheme } from '@mui/material';

const pigmentConfig = {
  transformLibraries: ['@mui/material'],
  theme: createTheme({
     cssVariables: true,
     palette: {
       primary: {
         main: '#1976d2',
       },
       secondary: {
         main: '#dc004e',
       },
     },}),
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    pigment(pigmentConfig),
  ],
  
})
