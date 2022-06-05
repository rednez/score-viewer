import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { LetterGrade } from '../../../components/LetterGrade';

export const TotalScore = (props: { score: number }) => {
  const score = props.score;

  const color =
    score >= 90
      ? '#35860d'
      : score >= 80
      ? '#b09908'
      : score >= 70
      ? '#cc872c'
      : score >= 60
      ? '#ec7839'
      : '#e11c1c';

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="h5">Total Score</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h5" color={color}>
          {score.toFixed(2)}
        </Typography>
        <LetterGrade score={score} />
      </Box>
    </Box>
  );
};
