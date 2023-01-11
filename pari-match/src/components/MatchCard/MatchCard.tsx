import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IMatch } from '../../types';

export const MatchCard = ({ match }: { match: IMatch }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/match/${match.id}`)}>
      <p>
        {match.host} - {match.guest}
      </p>
      <p>{match.date}</p>
    </div>
  );
};
