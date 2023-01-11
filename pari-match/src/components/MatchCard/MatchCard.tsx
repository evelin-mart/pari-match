import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IMatch } from '../../types';
import { Wrapper } from './MatchCard.styles';

export const MatchCard = ({ match }: { match: IMatch }) => {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate(`/match/${match.id}`)}>
      <p>
        {match.host} - {match.guest}
      </p>
      <p>{match.date}</p>
    </Wrapper>
  );
};
