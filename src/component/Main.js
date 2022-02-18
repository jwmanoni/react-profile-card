import React, { PureComponent } from 'react'

export default class Main extends PureComponent {
  render() {
    return (
        <div className='main'>
            <div className='frame'>
                <img id='profile' src='./me.jpg' alt='Jacob'></img>
            </div>
            <p id='name'>Jacob Manoni <span>26</span></p>
            <p id='state'>West Virginia</p>
        </div>
    )
  }
}
