import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const IssuesTypesHeader = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: '1px solid #E0E0E0FF',
      marginBottom: '12px',
    }}
  >
    <Typography variant="body2" sx={{ marginRight: '8px', fontWeight: 500 }}>
      Issue Type
    </Typography>
    <Typography variant="body2" sx={{ fontWeight: 500 }}>
      Findings Number
    </Typography>
  </Box>
);
