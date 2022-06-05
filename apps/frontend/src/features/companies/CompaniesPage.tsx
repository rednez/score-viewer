import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { List } from './list/List';
import { Details } from './details/Details';

export function CompaniesPage() {
  return (
    <Routes>
      <Route path="/" element={<List />}></Route>
      <Route path="/:company" element={<Details />}></Route>
    </Routes>
  );
}
