import React, { Component } from "react";
import UserList from "./UserList";
import users from "./api";

export class UserListContainer extends Component {
  state = {
    error: null,
    loading: "loading...",
    users: [],
  };

  componentDidMount() {
    this.job = users();

    this.job.then(
      (result) => {
        this.setState({ loading: null, error: null, users: result.users });
      },
      (error) => {
        this.setState({ loading: null, error: error.message });
      }
    );
  }

  componentWillUnmount() {
    console.log("Canceled");
    this.job.cancel();
  }

  render() {
    return <UserList {...this.state} />;
  }
}

export default UserListContainer;
