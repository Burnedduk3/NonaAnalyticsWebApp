import {
  HIDE_FOOTER,
  HIDE_HEADER,
  SET_ERROR,
  SHOW_FOOTER,
  SHOW_HEADER,
} from './ActionTypes';
import { IApplicationInitialState, IApplicationReducer } from './interface';

export const initialState: IApplicationInitialState = {
  hideFooter: false,
  hideHeader: false,
  error: {
    error: false,
    errorMessage: '',
  },
};

const ApplicationStateReducer = (
  state: IApplicationInitialState,
  { type, payload }: IApplicationReducer
) => {
  switch (type) {
    case HIDE_FOOTER: {
      return { ...state, hideFooter: true };
    }

    case HIDE_HEADER: {
      return { ...state, hideFooter: true };
    }
    case SHOW_FOOTER: {
      return { ...state, hideFooter: false };
    }

    case SHOW_HEADER: {
      return { ...state, hideFooter: false };
    }

    case SET_ERROR: {
      if (payload && payload.error !== undefined) {
        return {
          ...state,
          error: {
            ...payload.error,
          },
        };
      }
      return { ...state };
    }

    default:
      return initialState;
  }
};

export default ApplicationStateReducer;
