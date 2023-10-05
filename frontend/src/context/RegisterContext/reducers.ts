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
      const { name, adress, phone } = action.payload;

      return { ...state, name, adress, phone };
    }

    case types.SAVE_ADDITTIONS: {
      const { services } = action.payload;

      return { ...state, services };
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
