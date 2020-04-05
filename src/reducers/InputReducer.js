import * as type from '../constants';
let DEFAULT_STATE = {
      listItem: [],
      dataFetched: false,
      isFetching: false,
      error: false,
      type: "STATE_TO_DEFAULT",
      errorMessesage: null
}
export default (state = DEFAULT_STATE, action) => {
      // console.log(action);

      switch (action.type) {

            case type.GET_PC_FAIL_SUCSESS:
                  // console.log(action.payload);

                  return {
                        ...state,
                        isFetching: false,
                        dataFetched: true,
                        error: false,
                        type: "GET_PC_FAIL_SUCSESS",
                        errorMessesage: null,
                        listItem: action.payload
                  }

            case type.GET_PC_PROPERTIES_SUCSESS:
                  // console.log(action.payload);

                  return {
                        ...state,
                        isFetching: false,
                        dataFetched: true,
                        error: false,
                        type: "GET_PC_PROPERTIES_SUCSESS",
                        errorMessesage: null,
                        listItem: action.payload
                  }

            case type.GET_API_RFAILURE:
                  return {
                        ...state,
                        isFetching: false,
                        dataFetched: true,
                        error: false,
                        type: "GET_API_RFAILURE",
                        errorMessesage: null,
                        listItem: action.payload
                  }



            default:
                  return state;
      }
}