import * as S from './style';
import IconAdvanced from '~/assets/icon-advanced.png';
import IconArcade from '~/assets/icon-arcade.png';
import IconPro from '~/assets/icon-pro.png';
import { FormEvent, useContext, useReducer } from 'react';
import { RegisterContext } from '~/context/RegisterContext/context';

import { savePlan } from '~/context/RegisterContext/actions';
import { Box } from '../Box';

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
          <Box
            onDispatch={planDispatch}
            id={'arcade'}
            plan={plan}
            icon={IconArcade}
            name={'ARCADE'}
            price={9.0}
          />
          <Box
            onDispatch={planDispatch}
            id={'advanced'}
            plan={plan}
            icon={IconAdvanced}
            name={'ADVANCED'}
            price={12.0}
          />
          <Box
            onDispatch={planDispatch}
            id={'pro'}
            plan={plan}
            icon={IconPro}
            name={'PRO'}
            price={15.0}
          />
        </div>
        <div className='box-toggle'>
          <label htmlFor='period'>Monthly</label>
          <input
            onClick={() => planDispatch({ type: 'PERIOD' })}
            type='checkbox'
            name='period'
            id='period'
          />
          <label htmlFor='period'>Yearly</label>
        </div>
        <div className='button'>
          <button type='submit'>Next Step</button>
        </div>
      </S.Form>
    </div>
  );
};
