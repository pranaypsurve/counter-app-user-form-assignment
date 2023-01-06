import React, { Component } from 'react'

class CounterButton extends Component {
    render() {
        return (
            <div className='col-md-12'>
                <div className='text-center pt-2 pb-2'>
                    <button className='btn btn-primary' onClick={this.props.increment} >Increment</button>&nbsp;&nbsp;
                    <button className='btn btn-warning' onClick={this.props.decrement} >Decrement</button>
                </div>
            </div>
        )
    }
}

export default React.memo(CounterButton)