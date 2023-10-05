import { useReducer, ReactNode } from 'react';
import { useControlStep } from '~/hooks/useControlStep';
import { stepsRegister } from '~/templates/Home';
import { RegisterContext } from './context';
import { data } from './data';
import { reducer } from './reducers';

type childrenType = {
  children: ReactNode;
};

export const RegisterProvider = ({ children }: childrenType) => {
  const { currentComponent, changeStep } = useControlStep(stepsRegister);
  const [state, dispatch] = useReducer(reducer, data);

  const user = {
    ...state,
  };

  return (
    <RegisterContext.Provider value={{ user, currentComponent, dispatch, changeStep }}>
      {children}
    </RegisterContext.Provider>
  );
};
