import React, { PureComponent } from 'react'

export default class Footer extends PureComponent {
  render() {
    return (
        <div className='footer'>
            <div className='stats'>
                <p>1M</p>
                <p>Followers</p>
            </div>
            <div className='stats'>
                <p>4B</p>
                <p>Likes</p>
            </div>
            <div className='stats'>
                <p>-5</p>
                <p>Photos</p>
            </div>
        </div>
    )
  }
}
