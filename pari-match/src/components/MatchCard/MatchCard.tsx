import React from 'react';
import { NavLink } from 'react-router-dom';
import { IMatch } from '../../types';

export const MatchCard = ({ match }: { match: IMatch }) => {
  return <NavLink to={`/match/${match.id}`}></NavLink>;
};
