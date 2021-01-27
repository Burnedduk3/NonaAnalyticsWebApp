import {
  HIDE_FOOTER,
  HIDE_HEADER,
  SHOW_FOOTER,
  SHOW_HEADER}
  from './ActionTypes';
import {IApplicationInitialState, IApplicationReducer} from './interface';

export const initialState: IApplicationInitialState = {
  hideFooter: false,
  hideHeader: false,
};

const ApplicationStateReducer = (
    state: IApplicationInitialState,
    {type, payload}: IApplicationReducer,
) => {
  switch (type) {
    case HIDE_FOOTER: {
      return {...state, hideFooter: true};
    }

    case HIDE_HEADER: {
      return {...state, hideFooter: true};
    }
    case SHOW_FOOTER: {
      return {...state, hideFooter: false};
    }

    case SHOW_HEADER: {
      return {...state, hideFooter: false};
    }

    default:
      return initialState;
  }
};

export default ApplicationStateReducer;
