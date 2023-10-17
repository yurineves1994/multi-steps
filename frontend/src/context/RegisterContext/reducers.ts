import * as types from './types';

export type ReducerActions = {
  type: 'SAVE_INFOS' | 'SAVE_PLAN' | 'SAVE_ADDITTIONS' | 'CALCULATION_VALUES' | 'FINISH_REGISTER';
  payload: any;
};

export const reducer = (state: any, action: ReducerActions) => {
  switch (action.type) {
    case types.SAVE_PLAN: {
      const {
        plan: { price, type },
        period,
      } = action.payload;
      return { ...state, plan: { price, type }, period };
    }

    case types.SAVE_INFOS: {
      const { name, email, phone } = action.payload;

      return { ...state, name, email, phone };
    }

    case types.SAVE_ADDITTIONS: {
      let { services } = action.payload;

      services = services.map((item) => {
        const { contratado, ...rest } = item;
        return rest;
      });

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
