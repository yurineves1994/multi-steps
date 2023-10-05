import * as types from './types';

export type ReducerActions = {
  type: 'SAVE_INFOS' | 'SAVE_PLAN' | 'SAVE_ADDITTIONS' | 'CALCULATION_VALUES' | 'FINISH_REGISTER';
  payload: any;
};

export const reducer = (state: any, action: ReducerActions) => {
  switch (action.type) {
    case types.SAVE_PLAN: {
      const { plan, period } = action.payload;

      return { ...state, plan, period };
    }

    case types.SAVE_INFOS: {
      const { name, adress, number } = action.payload;

      return { ...state, name, adress, number };
    }

    case types.SAVE_ADDITTIONS: {
      const { onlineService, largeStorage, customizable } = action.payload;

      return { ...state, onlineService, largeStorage, customizable };
    }
    case types.CALCULATION_VALUES: {
      const total = action.payload;

      return { ...state, total };
    }

    case types.FINISH_REGISTER: {
      return { ...state };
    }

    default:
      return { state };
  }
};