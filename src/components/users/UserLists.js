import React, { Component } from 'react'

class UserLists extends Component {
    render() {
        return (
            <div className='col-md-12 mt-4'>
                <div className='p-4 border'>
                    <div className='pb-2'>
                        <h2 className='text-center pb-2'>Users List</h2>
                        <input type='text' className="form-control" onChange={this.props.searchUser} placeholder='Search User' />
                    </div>
                    <div className='table-responsive'>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Number</th>
                                    <th>City</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.filteredList.length ? this.props.filteredList && this.props.filteredList.sort(function (a, b) {
                                        return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
                                    }).map((val, index) => {
                                        return <tr key={index}>
                                            <td>{val.name}</td>
                                            <td>{val.email}</td>
                                            <td>{val.number}</td>
                                            <td>{val.city}</td>
                                        </tr>
                                    }) : <tr>
                                        <td colSpan='4' className="text-center">No Records Found</td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default React.memo(UserLists)