import React, { useContext } from 'react';
import { MatchCard } from '../../components/MatchCard';
import { RootContext } from '../../context';

export const MainPage = () => {
  const { events } = useContext(RootContext);

  return (
    <main>
      <ul>
        {events.map((match) => (
          <li key={match.id}>
            <MatchCard match={match} />
          </li>
        ))}
      </ul>
    </main>
  );
};
