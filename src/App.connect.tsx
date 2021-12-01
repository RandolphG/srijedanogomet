import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { requestLoginAction } from "./state-mgmt/store/";
import { RootState } from "./types";

const mapStateToProps = (state: RootState) => ({
  login: state.system,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      doLogin: (username: string, password: string) =>
        requestLoginAction({ username, password }),
    },
    dispatch
  );

/* Connector encasing for App component to redux state
This principal should be followed for all components needing to be attached to redux state */
