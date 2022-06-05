import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const IssueTypeItem = (props: { name: string; findings: number }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: '1px solid #E0E0E0FF',
      marginBottom: '12px',
    }}
  >
    <Typography variant="body2">{props.name}:</Typography>
    <Typography
      variant="body2"
      color={props.findings > 0 ? 'error' : 'primary'}
    >
      {props.findings}
    </Typography>
  </Box>
);
