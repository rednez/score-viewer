import React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { CompaniesPage } from './features/companies/CompaniesPage';

function App() {
  return (
    <Grid container justifyContent="center">
      <Card
        sx={{
          width: '100%',
          maxWidth: 800,
          height: 'calc(100vh - 60px)',
          overflow: 'scroll',
          boxShadow: `0 7px 34px 6px rgba(0, 0, 0, 0.02), 0 18px 28px 2px 
            rgba(0, 0, 0, 0.04), 0 9px 11px -5px rgba(0, 0, 0, 0.08)`,
          borderRadius: '12px',
          margin: '20px 60px',
        }}
      >
        <CompaniesPage />
      </Card>
    </Grid>
  );
}

export default App;
