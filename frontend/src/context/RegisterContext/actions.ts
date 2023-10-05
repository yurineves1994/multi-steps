import * as types from './types';

export const saveInfos = (dispatch: any, data: any) => {
  dispatch({ type: types.SAVE_INFOS, payload: data });
};

export const savePlan = (dispatch: any, data: any) => {
  dispatch({ type: types.SAVE_PLAN, payload: data });
};

export const calculationValues = (dispatch: any, data: any) => {
  dispatch({ type: types.CALCULATION_VALUES, payload: data });
};

export const saveAddittions = (dispatch: any, data: any) => {
  dispatch({ type: types.SAVE_ADDITTIONS, payload: data });
};

export const finishRegister = (dispatch: any) => {
  dispatch({ type: types.FINISH_REGISTER });
};
