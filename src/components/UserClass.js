import React from "react";
import {GITHUB_USER_URL} from '../utils/constant';
import ProductShimmer from './Shimmer/products-shimmer';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userData: null
    }
  }

  componentDidMount() {
    this.getUserData();
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

  async getUserData() {
    const data = await fetch(GITHUB_USER_URL);
    const json = await data.json();
    this.setState({
        userData: json
    })
  }

  render() {
    if(this.state.userData === null) {
        return <ProductShimmer></ProductShimmer>
    }
    const {avatar_url, login, user_view_type} = this.state.userData;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="user_image" style={{width: 200, height: 200}}/>
        <h3>Username: {login}</h3>
        <h4>View type: {user_view_type}</h4>
      </div>
    );
  }
}

export default UserClass;
