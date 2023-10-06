/* eslint-disable jsx-a11y/label-has-associated-control */
import { FormEvent, useContext, useState } from 'react';
import { saveInfos } from '~/context/RegisterContext/actions';
import { RegisterContext } from '~/context/RegisterContext/context';
import * as Mask from '../../masks/masks';
import * as S from './style';

export const Form = () => {
  const { dispatch, changeStep } = useContext(RegisterContext);
  const [name, setName] = useState('');
  const [adress, setAdress] = useState('');
  const [phone, setPhone] = useState('');

  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const infos = {
      name,
      adress,
      phone,
    };

    saveInfos(dispatch, infos);
    changeStep();
  };

  return (
    <div className='container'>
      <h2>Personal info</h2>
      <h3>Please provide your name, email address, and phone number.</h3>
      <S.Form onSubmit={handleForm}>
        <label>
          Nome
          <S.Input type='text' required value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Address
          <S.Input
            type='text'
            required
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          />
        </label>
        <label>
          Phone
          <S.Input
            type='text'
            required
            value={phone}
            onChange={(e) => setPhone(Mask.normalizePhoneNumber(e.target.value))}
          />
        </label>
        <div className='button'>
          <button type='submit'>Next Step</button>
        </div>
      </S.Form>
    </div>
  );
};
