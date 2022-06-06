import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { useAppSelector } from '../../../app/hooks';
import { selectCurrentCompany } from '../companiesSlice';
import { IssuesTypesHeader } from './IssuesTypesHeader';
import { IssueTypeItem } from './IssueTypeItem';
import { TotalScore } from './TotalScore';

export function Details() {
  const navigate = useNavigate();
  const details = useAppSelector(selectCurrentCompany);

  const handleBackClick = () => {
    navigate(`/`);
  };

  const renderNotFound = () => (
    <Typography variant="body1">Company not found</Typography>
  );

  return (
    <CardContent sx={{ padding: '24px' }}>
      {details ? (
        <Box>
          <IconButton sx={{ marginBottom: '10px' }} onClick={handleBackClick}>
            <ArrowBack />
          </IconButton>

          <Typography variant="h4" gutterBottom>
            {details.company}
          </Typography>

          <IssuesTypesHeader />
          {details.issueTypes.map((issueType) => {
            return (
              <IssueTypeItem
                key={issueType.key}
                name={issueType.name}
                findings={issueType.findings}
              />
            );
          })}
          <TotalScore score={details.score} />
        </Box>
      ) : (
        renderNotFound()
      )}
    </CardContent>
  );
}
