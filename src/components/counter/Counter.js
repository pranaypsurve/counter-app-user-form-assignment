import React, { Component } from 'react'
import CounterButton from './CounterButton';
export default class Counter extends Component {
  constructor(){
    super();
    this.state = {
      counter:0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment(){
    this.setState({counter : this.state.counter + 1})
  }
  decrement(){
    if(this.state.counter > 0){
      this.setState({counter : this.state.counter - 1})
    }
  }
  render() {
    return (
      <section className='p-4'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12'>
              <h1 className='text-center pb-4'>Counter App</h1>
              <div className='text-center mb-2'>
                <span className='bg-dark text-white p-2 rounded'>{this.state.counter}</span>
              </div>
            </div>
            <CounterButton increment={this.increment} decrement={this.decrement}  />
          </div>
        </div>
      </section>
    )
  }
}
