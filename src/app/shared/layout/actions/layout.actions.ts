import {createAction, props} from '@ngrx/store'

export const typeInTheSearch = createAction(
  '[Layout] Search',
  props<{searchValue: string}>()
);
