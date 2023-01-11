import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useLocation, useNavigate } from 'react-router';
import { RootContext } from '../../context';
import { coefficient } from '../../types';

export const DetailsPage = () => {
  const { pathname } = useLocation();
  const id = pathname.slice(7);
  const { events } = useContext(RootContext);
  const match = events.find((el) => el.id === id);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    navigate('/');
  };

  if (!match) return <Navigate to='/' />;

  return (
    <main>
      <section>
        <h2>
          {match.host} - {match.guest}
        </h2>
        <p>{match.date}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <input
              type='radio'
              value={coefficient.host}
              {...register('coefficient', { required: true })}
            />
            на победу хозяев
          </label>
          <label>
            <input
              type='radio'
              value={coefficient.draw}
              {...register('coefficient', { required: true })}
            />
            на ничью
          </label>
          <label>
            <input
              type='radio'
              value={coefficient.guest}
              {...register('coefficient', { required: true })}
            />
            на победу гостей
          </label>
          {errors.coefficient && <p>Выберите коэффициент!</p>}
          <button>Сделать ставку</button>
        </form>
      </section>
    </main>
  );
};
