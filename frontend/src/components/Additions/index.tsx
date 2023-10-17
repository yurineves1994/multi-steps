import { FormEvent, useContext, useReducer } from 'react';
import { calculationValues, saveAddittions } from '~/context/RegisterContext/actions';
import { RegisterContext } from '~/context/RegisterContext/context';

import * as S from './style';

export type ReducerActions = {
  type: 'ONLINE_SERVICE' | 'LARGE_STORAGE' | 'CUSTOMIZABLE';
  payload: any;
};

type Service = {
  name: string;
  contratado: boolean;
  price: number;
};

type State = {
  onlineService: Service;
  largeStorage: Service;
  customizable: Service;
  services: Service[];
};

const targetAdditions = (state: State, action: ReducerActions) => {
  switch (action.type) {
    case 'ONLINE_SERVICE':
      return {
        ...state,
        onlineService: { name: 'Online service', contratado: action.payload, price: 1.0 },
        services:
          action.payload === true
            ? [...state.services, state.onlineService]
            : state.services.filter((servico) => servico !== state.onlineService),
      };
    case 'LARGE_STORAGE':
      return {
        ...state,
        largeStorage: { name: 'Large Storage', contratado: action.payload, price: 2.0 },
        services:
          action.payload === true
            ? [...state.services, state.largeStorage]
            : state.services.filter((servico) => servico !== state.largeStorage),
      };
    case 'CUSTOMIZABLE':
      return {
        ...state,
        customizable: { name: 'Customizable', contratado: action.payload, price: 2.0 },
        services:
          action.payload === true
            ? [...state.services, state.customizable]
            : state.services.filter((servico) => servico !== state.customizable),
      };
    default:
      return { ...state };
  }
};

export const Additions = () => {
  const { user, dispatch, changeStep } = useContext(RegisterContext);

  const [additions, additionsDispatch] = useReducer(targetAdditions, {
    onlineService: { name: 'Online service', contratado: false, price: 1.0 },
    largeStorage: { name: 'Large Storage', contratado: false, price: 2.0 },
    customizable: { name: 'Customizable', contratado: false, price: 2.0 },
    services: [],
  });

  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let total = 0;

    if (additions.onlineService.contratado) {
      total += additions.onlineService.price;
    }
    if (additions.largeStorage.contratado) {
      total += additions.largeStorage.price;
    }
    if (additions.customizable.contratado) {
      total += additions.customizable.price;
    }

    total += user.plan.price;

    saveAddittions(dispatch, additions);
    calculationValues(dispatch, total);
    changeStep();
  };

  return (
    <div className='container'>
      <h2>Additions info</h2>
      <S.Form onSubmit={handleForm}>
        <label>
          <div className='infos_add'>
            <input
              type='checkbox'
              name='online_service'
              id='online_service'
              value='online_service'
              onChange={() =>
                additionsDispatch({
                  type: 'ONLINE_SERVICE',
                  payload: !additions.onlineService.contratado,
                })
              }
            />
            <div className='block_title'>
              <span className='title_add'>Online service</span>
              <span className='subtitle_add'>Acess to multiplayer games</span>
            </div>
          </div>
          <span className='price_add'>+$1/mo</span>
        </label>
        <label>
          <div className='infos_add'>
            <input
              type='checkbox'
              name='large_storage'
              id='large_storage'
              value='large_storage'
              onChange={() =>
                additionsDispatch({
                  type: 'LARGE_STORAGE',
                  payload: !additions.largeStorage.contratado,
                })
              }
            />
            <div className='block_title'>
              <span className='title_add'>Large storage</span>
              <span className='subtitle_add'>Extra 1TB of cloud sabe</span>
            </div>
          </div>
          <span className='price_add'>+$2/mo</span>
        </label>
        <label>
          <div className='infos_add'>
            <input
              type='checkbox'
              name='customizable'
              id='customizable'
              value='customizable'
              onChange={() =>
                additionsDispatch({
                  type: 'CUSTOMIZABLE',
                  payload: !additions.customizable.contratado,
                })
              }
            />
            <div className='block_title'>
              <span className='title_add'>Customizable profile</span>
              <span className='subtitle_add'>Custom theme on your profile</span>
            </div>
          </div>
          <span className='price_add'>+$2/mo</span>
        </label>
        <div className='button'>
          <button type='submit'>Next Step</button>
        </div>
      </S.Form>
    </div>
  );
};
