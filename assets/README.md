# *Animafi Aduana Development Organization*

[*Website*](https://animafiaduanaorg.herokuapp.com/)


![INTRO](assets/_preview.gif)

### *Technologies* :
- [*Framer Motion*](https://framer.com/motion/)
- [*SCSS*](https://sass-lang.com/) 
- [*React Router*](https://reactrouter.com/)
- [*i18n*](https://www.i18next.com/)
- [*React 16.12*](https://reactjs.org/docs/hooks-intro.html)
- [*Redux toolkit*](https://redux-toolkit.js.org/ )
- [*Redux-Observable*](https://redux-observable.js.org/docs/basics/Epics.html)
- [*TypeScript*]( https://microsoft.github.io/TypeScript-New-Handbook/chapters/basics/ )
- [*RxJS*](https://rxjs-dev.firebaseapp.com/api)

### *Installation process* :
- clone repo
- navigate to project root folder
- install all dependencies with yarn or npm i
- run with yarn start or npm


```bash
$ git clone https://github.com/RandolphG/animafiAduana.git
$ cd project folder
$ yarn or npm i
$ yarn start or npm start
```


## *State Management (Redux)*
Application state is split mainly in three parts.
- System
- Properties
- Users
  
Each state structure will be defined by application requirements under that state.
Fundamental pieces to build partial root state are:

- slice
- epics
- types

## *slices*
All of actions possible under that partial root state shall be placed here. This slice will create Reducer and its corresponding actions. Example:

```javascript
const systemSlice = createSlice({
  name: "system",
  initialState: initState as SliceState,
  reducers: {
    requestLoginAction: (state, action: PayloadAction<IUserInput>) => {},
    requestLoginSuccessAction: (state, action: PayloadAction<ISystemState>) => {
      const { admin, status, token } = action.payload;
      state.admin = admin;
      state.status = status;
      state.token = token;
    },
    requestCurrentUserActionSuccess: (
      state,
      action: PayloadAction<ICurrentUser>
    ) => {
      const name = action.payload.name;
      state.name = name;
    },
    requestLoginActionFailure: (state, action: PayloadAction<Error>) => {}
  }
});
```
## *epics*
This is very redux-observable specific. I recommend going through RxJS first before understanding this. Refer the documentation links given above. Example code:
```javascript
export const doLoginEpic: Epic<Action, Action, RootState> = action$ =>
  action$.pipe(
    filter(isActionOf(sourceActions.requestLoginAction)),
    switchMap<Action, Observable<Action>>(action =>
      from(doLogin(action.payload)).pipe(
        map(sourceActions.requestLoginActionSuccess),
        catchError(error => of(sourceActions.requestLoginActionFailure(error)))
      )
    )
  );
```
## *types*
All input and state interfaces can be placed here. Example:
```javascript
export interface ISystemState {
  readonly admin: Boolean;
  readonly status: string;
  readonly token: string;
  readonly temp: string;
}

export interface IUserInput {
  readonly username: string;
  readonly password: string;
}
```


