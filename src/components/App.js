import React, { Component } from 'react'

import images from './images'

class App extends Component {

  render () {
    return <div>
      {/* <h1>Memory</h1> */}
      {/* <img src={images[0]} height='150' width='150' />
      <img src={images[1]} height='150' width='150' />
      <img src={images[2]} height='150' width='150' />
      <img src={images[3]} height='150' width='150' />
      <img src={images[4]} height='150' width='150' />
      <img src={images[5]} height='150' width='150' />
      <img src={images[6]} height='150' width='150' />
      <img src={images[7]} height='150' width='150' />
      <img src={images[8]} height='150' width='150' /> */}

      <table>

        <tr>
          <td><img src={images[0]} height='125' width='125' /></td>
          <td><img src={images[1]} height='125' width='125' /></td>
          <td><img src={images[2]} height='125' width='125' /></td>
          <td><img src={images[3]} height='125' width='125' /></td>
          <td><img src={images[4]} height='125' width='125' /></td>
          <td><img src={images[5]} height='125' width='125' /></td>
        </tr>
        <tr>
          <td><img src={images[6]} height='125' width='125' /></td>
          <td><img src={images[7]} height='125' width='125' /></td>
          <td><img src={images[8]} height='125' width='125' /></td>
          <td><img src={images[9]} height='125' width='125' /></td>
          <td><img src={images[10]} height='125' width='125' /></td>
          <td><img src={images[11]} height='125' width='125' /></td>
        </tr>
        <tr>
          <td><img src={images[12]} height='125' width='125' /></td>
          <td><img src={images[13]} height='125' width='125' /></td>
          <td><img src={images[14]} height='125' width='125' /></td>
          <td><img src={images[15]} height='125' width='125' /></td>
          <td><img src={images[16]} height='125' width='125' /></td>
          <td><img src={images[17]} height='125' width='125' /></td>
        </tr>
        <tr>
          <td><img src={images[18]} height='125' width='125' /></td>
          <td><img src={images[19]} height='125' width='125' /></td>
          <td><img src={images[20]} height='125' width='125' /></td>
          <td><img src={images[21]} height='125' width='125' /></td>
          <td><img src={images[22]} height='125' width='125' /></td>
          <td><img src={images[23]} height='125' width='125' /></td>
        </tr>
      </table>
    </div>
  }
}

export default App
