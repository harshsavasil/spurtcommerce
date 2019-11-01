/*
 * spurtcommerce
 * version 3.0
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Action} from '@ngrx/store';
import {type} from '../../shared/utility/utilityHelpers';

export const ActionTypes = {
    GET_PROFILE: type('[login] get profile'),
    GET_PROFILE_SUCCESS: type('[login] get profile success'),
    GET_PROFILE_FAIL: type('[login] get profile fail'),

    DO_SIGN_OUT: type('[signout] sign out')

};

/* get profile action*/

export class GetProfile implements Action {
    type = ActionTypes.GET_PROFILE;

    constructor(public payload = null) {
    }
}

export class GetProfileSuccess implements Action {
    type = ActionTypes.GET_PROFILE_SUCCESS;

    constructor(public payload: any) {
    }
}

export class GetProfileFail implements Action {
    type = ActionTypes.GET_PROFILE_FAIL;

    constructor(public payload: any) {
    }
}

/* do sign out action*/

export class DoSignOut implements Action {
    type = ActionTypes.DO_SIGN_OUT;

    constructor(public payload: any = null) {
    }
}

export type Actions
    = GetProfile |
    GetProfileSuccess |
    GetProfileFail |
    DoSignOut;
