import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchUserData } from '../Reducers/UsersReducer';

class UsersList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchUserData();
    }
  
    render() {
        return (
            <div>
                Test
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        fetchUserError : state.usersData.fetchUserError,
        fetchUserSuccess : state.usersData.fetchUserSuccess,
        fetchUserPending : state.usersData.fetchUserPending,
        userDetails : state.usersData.userDetails
    };
}

function mapDispatchToProps(dispatch){
    return {
        fetchUserData : () => dispatch(fetchUserData())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);