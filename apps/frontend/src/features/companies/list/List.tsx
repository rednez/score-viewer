import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import CircularProgress from '@mui/material/CircularProgress';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  loadCompanies,
  selectCompaniesRows,
  selectIsFail,
  selectIsLoading,
  setCurrentCompany,
} from '../companiesSlice';
import { LetterGrade } from '../../../components/LetterGrade';

export function List() {
  const navigate = useNavigate();
  const tableRaws = useAppSelector(selectCompaniesRows);
  const isLoading = useAppSelector(selectIsLoading);
  const isFail = useAppSelector(selectIsFail);
  const dispatch = useAppDispatch();
  const [sortBy, setSortBy] = useState<'company' | 'score'>('company');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    dispatch(loadCompanies({ sortBy, order: sortDirection }));
  }, []);

  const handleSort = (by: 'company' | 'score') => {
    const direction =
      sortBy === by
        ? sortDirection === 'asc'
          ? 'desc'
          : 'asc'
        : sortDirection;
    setSortBy(by);
    setSortDirection(direction);
    dispatch(loadCompanies({ sortBy: by, order: direction }));
  };

  const handleTableRowClick = (company: string) => {
    dispatch(setCurrentCompany(company));
    navigate(`/${company}`);
  };

  const renderTable = () => (
    <TableContainer>
      <Table aria-label="companies table">
        <TableHead>
          <TableRow>
            <TableCell>
              Company
              <TableSortLabel
                direction={sortDirection}
                onClick={() => handleSort('company')}
                active={sortBy === 'company'}
              ></TableSortLabel>
            </TableCell>
            <TableCell>
              Score
              <TableSortLabel
                direction={sortDirection}
                onClick={() => handleSort('score')}
                active={sortBy === 'score'}
              ></TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRaws.map((row) => (
            <TableRow
              key={row.company}
              hover
              onClick={(event) => handleTableRowClick(row.company)}
            >
              <TableCell>{row.company}</TableCell>
              <TableCell sx={{ display: 'flex' }}>
                {row.score.toFixed(2)}
                <LetterGrade score={row.score} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  const renderLoader = () => (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <CircularProgress />
      <Box sx={{ marginLeft: '12px' }}>Loading</Box>
    </Box>
  );

  const renderFailedState = () => <div>Failed loading :-(</div>;

  return (
    <CardContent
      sx={
        isLoading || isFail
          ? {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }
          : {}
      }
    >
      {isFail
        ? renderFailedState()
        : isLoading
        ? renderLoader()
        : renderTable()}
    </CardContent>
  );
}
