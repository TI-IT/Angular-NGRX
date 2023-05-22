import {Action, ActionReducerMap} from '@ngrx/store'
import {InjectionToken} from '@angular/core'
import * as fromLayout from '../shared/layout/reducer/layout.reducer';
import {routerReducer, RouterReducerState} from '@ngrx/router-store'

export interface State {
  [fromLayout.layoutFeatureKey]: fromLayout.State;
  router: RouterReducerState<any>;
}
/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('Root reducers token', {
  factory: () => ({
    [fromLayout.layoutFeatureKey]: fromLayout.reducer,
    router: routerReducer,
  }),
});
