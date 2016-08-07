const SET_SIDEBAR_DOCKED = 'SET_SIDEBAR_DOCKED';
const SET_SIDEBAR_OPENED = 'SET_SIDEBAR_OPENED';
const SET_MQL = 'SET_MQL';

const initialState = {
  isDrawerDocked: false,
  isDrawerOpened: false,
  mql: {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_SIDEBAR_DOCKED:
      return {
        ...state,
        isDrawerDocked: action.isDocked
      };
    case SET_SIDEBAR_OPENED:
      let isOpened = action.isOpened;
      // If no boolean is provided, just toggle state
      if(action.isOpened === undefined) isOpened = !state.isDrawerOpened;

      return {
        ...state,
        isDrawerOpened: isOpened,
        isDrawerDocked: state.mql.matches && isOpened
      };
    case SET_MQL:
      return {
        ...state,
        mql: action.mql
      };
    default:
      return state;
  }
}

export function setSidebarDocked(isDocked) {
  return {
    type: SET_SIDEBAR_DOCKED,
    isDocked
  }
}

export function setSidebarOpened(isOpened) {
  return {
    type: SET_SIDEBAR_OPENED,
    isOpened
  }
}

export function setMQL(mql) {
  return {
    type: SET_MQL,
    mql
  }
}
