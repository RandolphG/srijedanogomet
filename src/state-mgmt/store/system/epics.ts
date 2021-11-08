import { Epic } from "redux-observable";
import { from, of, defer } from "rxjs";
import { switchMap, filter, map, catchError } from "rxjs/operators";
import { Action, RootState } from "../../../types";

import {
  requestLoginAction,
  requestLoginSuccessAction,
  requestLoginActionFailure,
} from "./slice";

// @ts-ignore
import { Observable } from "rxjs/Observable";

import { doSomething } from "../../../services/api/api";

export const doLoginEpic: Epic<Action, Action, RootState> = (action$) =>
  /* @ts-ignore */
  action$.pipe(
    filter(requestLoginAction.match),
    switchMap<Action, Observable<Action>>((action) =>
      defer(() => from(doSomething(action.payload))).pipe(
        map(requestLoginSuccessAction),
        catchError((error) => of(requestLoginActionFailure(error)))
      )
    )
  );
