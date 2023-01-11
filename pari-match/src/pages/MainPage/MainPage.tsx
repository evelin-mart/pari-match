import React, { useContext } from 'react';
import { MatchCard } from '../../components/MatchCard';
import { RootContext } from '../../context';

export const MainPage = () => {
  const { events, bet } = useContext(RootContext);

  return (
    <main>
      {bet && (
        <p>
          Спасибо, ваша ставка <strong>{bet}</strong> принята
        </p>
      )}
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
