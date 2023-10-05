import { ReactNode } from 'react';
import { ReducerActions } from '~/context/RegisterContext/reducers';
import { UserType } from './UserType';

export type RegisterType = {
  user: UserType;
  dispatch: React.Dispatch<ReducerActions>;
  currentComponent: ReactNode;
  changeStep: () => void;
};
