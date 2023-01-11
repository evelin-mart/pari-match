import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useLocation, useNavigate } from 'react-router';
import { RootContext } from '../../context';
import { coefficient } from '../../types';
import { Label } from './DetailsPage.styles';

type formData = {
  coefficient: coefficient;
};

export const DetailsPage = () => {
  const { pathname } = useLocation();
  const id = pathname.slice(7);
  const { events, setBet } = useContext(RootContext);
  const match = events.find((el) => el.id === id);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = ({ coefficient }: formData) => {
    if (match) setBet(`${match.host} - ${match.guest} ${coefficient}`);
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
          <Label>
            <input
              type='radio'
              value={coefficient.host}
              {...register('coefficient', { required: true })}
            />
            {coefficient.host}
          </Label>
          <Label>
            <input
              type='radio'
              value={coefficient.draw}
              {...register('coefficient', { required: true })}
            />
            {coefficient.draw}
          </Label>
          <Label>
            <input
              type='radio'
              value={coefficient.guest}
              {...register('coefficient', { required: true })}
            />
            {coefficient.guest}
          </Label>
          {errors.coefficient && <p>Выберите коэффициент!</p>}
          <button>Сделать ставку</button>
        </form>
      </section>
    </main>
  );
};
