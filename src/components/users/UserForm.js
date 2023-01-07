import React, { Component } from 'react'
import UserLists from './UserLists';

export default class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        name: '',
        email: '',
        number: '',
        city: ''
      },
      usersList: [],
      filteredList: []
    }
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.searchUser = this.searchUser.bind(this);
  }
  
  handleUserInput(e) {
    let nameKey = e.target.name;
    let valueKey = e.target.value;
    if(nameKey === 'number'){
      valueKey = valueKey.slice(0,10);
    }
    this.setState({ formData: { ...this.state.formData, [nameKey]: valueKey } })
  }
  handleFormSubmit(e) {
    e.preventDefault();
    this.setState({ usersList: [...this.state.usersList, this.state.formData], filteredList: [...this.state.usersList, this.state.formData] , formData: {
      name: '',
      email: '',
      number: '',
      city: ''
    } });
  }
  searchUser(e) {
    if (e.target.value) {
      let searchText = e.target.value;
      let getSearchedObject = this.state.usersList.filter((val) => {
        return val.name.toLowerCase().includes(searchText.toLowerCase());
      })
      this.setState({ filteredList: getSearchedObject })
    } else {
      this.setState({ filteredList: this.state.usersList })
    }

  }
  render() {
    return (
      <section className='p-4'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12'>
              {/* Name, Email, Number, City */}
              <div className='p-4 border'>
                <h1 className='text-center'>User Form</h1>
                <form onSubmit={this.handleFormSubmit}>
                  <div className='row'>
                    <div className='col-6 mb-2'>
                      <label htmlFor='name'>Name</label>
                      <input type='text' name='name' id='name' value={this.state.formData.name} onChange={this.handleUserInput} className='form-control' placeholder='Name' required />
                    </div>
                    <div className='col-6 mb-2'>
                      <label htmlFor='email'>Email</label>
                      <input type='email' name='email' id='email' value={this.state.formData.email} onChange={this.handleUserInput} className='form-control' placeholder='Email'/>
                    </div>
                    <div className='col-6 mb-2'>
                      <label htmlFor='number'>Number</label>
                      <input type='number' name='number' id='number' value={this.state.formData.number} onChange={this.handleUserInput} className='form-control' placeholder='Phone Number' />
                    </div>
                    <div className='col-6 mb-2'>
                      <label htmlFor='city'>City</label>
                      <input type='text' name='city' id='city' value={this.state.formData.city} onChange={this.handleUserInput} className='form-control' placeholder='City' />
                    </div>
                    <div className='col-6 mb-2'>
                      <button type='submit' className='btn btn-success'>Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <UserLists searchUser={this.searchUser} filteredList={this.state.filteredList}  />
          </div>
        </div>
      </section>
    )
  }
}
