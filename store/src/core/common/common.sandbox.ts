/*
 * spurtcommerce
 * version 3.0
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as commonAction from './action/common.action';
import * as store from '../state.interface';
import {
  getProfile,
  profileFailed,
  profileLoaded,
  profileLoading,
  getProfileValid
} from './reducer/common.selector';

@Injectable()
export class CommonSandbox {
  /* get profile status*/
  public getProfile$ = this.appState$.select(getProfile);
  public getProfileValid$ = this.appState$.select(getProfileValid);
  public profileLoading$ = this.appState$.select(profileLoading);
  public profileLoaded$ = this.appState$.select(profileLoaded);
  public profileFailed$ = this.appState$.select(profileFailed);

  private subscriptions: Array<Subscription> = [];

  constructor(
    private router: Router,
    protected appState$: Store<store.AppState>
  ) {
    this.registerEvents();
  }

  public doGetProfile(): void {
    this.appState$.dispatch(new commonAction.GetProfile());
  }

  public doSignout(): void {
    this.appState$.dispatch(new commonAction.DoSignOut());
  }
  public registerEvents() {}
}
