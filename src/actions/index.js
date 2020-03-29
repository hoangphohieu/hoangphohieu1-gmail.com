import * as type from './../constants';

export function getPCFail(payload) {
    return ({ type: type.GET_PC_FAIL_REQUEST, payload })
}
