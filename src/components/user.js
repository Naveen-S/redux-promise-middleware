import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/user_action';

const User = ({user, fetchUsers}) => {
    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);
    console.log(user);
    return (
        <div>
            {user.name}
        </div>
    )
}

export const mapStateToProps = (state) => {
    return {user: state.user};
}

export const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(User);

