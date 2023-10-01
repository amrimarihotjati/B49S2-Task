import React from "react";
import { Outlet, Navigate } from "react-router-dom";

interface State{
  isLogin: boolean
}

class PrivateRoute extends React.Component<object, State> {
  constructor(props:object) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }

  render() {
    const { isLogin } = this.state;

    return isLogin ? <Outlet /> : <Navigate to="/" />;
  }
}

export default PrivateRoute;