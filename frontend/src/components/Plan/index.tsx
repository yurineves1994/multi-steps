import * as S from './style';
import IconAdvanced from '~/assets/icon-advanced.png';
import IconArcade from '~/assets/icon-arcade.png';
import IconPro from '~/assets/icon-pro.png';
import { FormEvent, useContext, useReducer } from 'react';
import { RegisterContext } from '~/context/RegisterContext/context';

import { savePlan } from '~/context/RegisterContext/actions';

export type ReducerActions = {
  type: 'ARCADE' | 'ADVANCED' | 'PRO' | 'PERIOD';
};

const targetPlan = (state: any, action: ReducerActions) => {
  switch (action.type) {
    case 'ARCADE':
      return { ...state, type: 'arcade', price: 9.0 };
    case 'ADVANCED':
      return { ...state, type: 'advanced', price: 12.0 };
    case 'PRO':
      return { ...state, type: 'pro', price: 15.0 };
    case 'PERIOD':
      return { ...state, period: !state.period };
    default:
      return { state };
  }
};

export const Plan = () => {
  const { dispatch, changeStep } = useContext(RegisterContext);

  const [plan, planDispatch] = useReducer(targetPlan, {
    type: '',
    price: 0,
    period: false,
  });

  console.log(plan.type);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const planTarget = {
      plan,
      period: plan.period ? 'Yearly' : 'Monthly',
    };

    savePlan(dispatch, planTarget);
    changeStep();
  };
  return (
    <div className='container'>
      <h2>Select your plan</h2>
      <h3>You have the option of monthy or yearly billing.</h3>
      <S.Form onSubmit={handleSubmit}>
        <div className='boxes'>
          <input
            onClick={() => planDispatch({ type: 'ARCADE' })}
            type='checkbox'
            name='plan'
            id='arcade'
          />
          <S.Box htmlFor='arcade' active={plan.type === 'arcade' ? 'true' : 'false'}>
            <img src={IconArcade} alt={'Icon Arcade'} />
            <div>
              <span className='title_box'>Arcade</span>
              <span className='price_box'>$9/mo</span>
            </div>
          </S.Box>
          <input
            onClick={() => planDispatch({ type: 'ADVANCED' })}
            type='checkbox'
            name='plan'
            id='advanced'
          />
          <S.Box htmlFor='advanced' active={plan.type === 'advanced' ? 'true' : 'false'}>
            <img src={IconAdvanced} alt={'Icon Advanced'} />
            <div>
              <span className='title_box'>Advanced</span>
              <span className='price_box'>$12/mo</span>
            </div>
          </S.Box>
          <input
            onClick={() => planDispatch({ type: 'PRO' })}
            type='checkbox'
            name='plan'
            id='pro'
          />
          <S.Box htmlFor='pro' active={plan.type === 'pro' ? 'true' : 'false'}>
            <img src={IconPro} alt={'Icon Pro'} />
            <div>
              <span className='title_box'>Pro</span>
              <span className='price_box'>$15/mo</span>
            </div>
          </S.Box>
        </div>
        <div className='box-toggle'>
          <label htmlFor='toggle'>Monthly</label>
          <input
            onClick={() => planDispatch({ type: 'PERIOD' })}
            type='checkbox'
            name='toggle'
            id='toggle'
          />
          <label htmlFor='toggle'>Yearly</label>
        </div>
        <div className='button'>
          <button type='submit'>Next Step</button>
        </div>
      </S.Form>
    </div>
  );
};
