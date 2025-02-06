import React, { Component } from "react";
import UserList from "./UserList";

export function users(fail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fail) {
        reject("epic fail");
      } else {
        resolve({
          users: [
            { id: 0, name: "First" },
            { id: 1, name: "Second" },
            { id: 2, name: "Third" },
          ],
        });
      }
    }, 2000);
  });
}
export default class UserListContainer extends Component {
  state = {
    error: null,
    users: [],
  };
  componentDidMount() {
    users().then(
      (result) => {
        this.setState({ error: null, users: result.users });
      },
      (error) => {
        this.setState({ loading: null, error });
      }
    );
  }
  render() {
    return <UserList {...this.state} />;
  }
  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      loading: state.users.length === 0 ? props.loading : null,
    };
  }
}

UserListContainer.defaultProps = {
  loading: "loading...",
};
