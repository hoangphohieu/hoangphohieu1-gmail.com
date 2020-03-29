import { put, takeEvery } from 'redux-saga/effects';
import getByCustomAPI from '../fetchAPI/GetByCustomAPI';
import * as type from '../constants';

function* getPCFail(param) {
      try {
            let res1 = yield getByCustomAPI(param.payload); 
            yield put({
                  type: type.GET_PC_FAIL_SUCSESS, 
                  payload: res1
            })
      } catch (error) {
            yield put({
                  type: type.GET_PC_FAIL_RFAILURE,
                  payload: {
                        errorMessage: error.Message
                  }
            })
      }
}


export const HomeSaga = [

      takeEvery(type.GET_PC_FAIL_REQUEST, getPCFail),

];   