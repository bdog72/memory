// import React, { Component } from 'react'
// import BoxItem from './boxitem.js'
// // import images from './images'
// import images from '../images.json'
// class App extends Component {
//   constructor () {
//     super()
//     this.state = {
//       matched: [],
//       picks: [],
//       won: false
//     }
//   }
//
//   choose (card) {
//     if (this.state.picks.length === 2 || this.state.matched.includes(card)) { return }
//     this.setState({
//       picks: [...this.state.picks, card]
//     }, () => {
//       if (this.state.picks.length === 2) {
//         this.check()
//       }
//     })
//   }
//
//   check () {
//     const picks = this.state.picks
//     if (images[picks[0]] === images[picks[1]]) {
//       this.setState({
//         matched: [...this.state.matched, ...picks],
//         picks: []
//       }, () => {
//         if (this.state.matched.length === images.length) {
//           this.setState({
//             won: true
//           })
//         }
//       })
//     }
//     setTimeout(() => {
//       this.setState({ picks: [] })
//     }, 3000)
//   }
//   render () {
//     return <div>
//       {/* <h1>MEMORY</h1> */}
//       <table>
//
//         <tr>
//
//           <BoxItem image={images[0]} isUp={picks.includes(0) || matched.includes(0)} handleClick={() => this.choose(0)} />
//           <BoxItem image={images[1]} isUp={picks.includes(1) || matched.includes(1)} handleClick={() => this.choose(1)} />
//           <BoxItem image={images[2]} isUp={picks.includes(2) || matched.includes(2)} handleClick={() => this.choose(2)} />
//           <BoxItem image={images[3]} isUp={picks.includes(3) || matched.includes(3)} handleClick={() => this.choose(3)} />
//           {/* <Card value={<img src={images[0]} height='125' width='125' />} />
//           <Card value={<img src={images[1]} height='125' width='125' />} />
//           <Card value={<img src={images[2]} height='125' width='125' />} />
//           <Card value={<img src={images[3]} height='125' width='125' />} />
//           <Card value={<img src={images[4]} height='125' width='125' />} />
//           <Card value={<img src={images[5]} height='125' width='125' />} /> */}
//           {/* <td><img src={images[0]} height='125' width='125' /></td>
//           <td><img src={images[1]} height='125' width='125' /></td>
//           <td><img src={images[2]} height='125' width='125' /></td>
//           <td><img src={images[3]} height='125' width='125' /></td>
//           <td><img src={images[4]} height='125' width='125' /></td>
//           <td><img src={images[5]} height='125' width='125' /></td> */}
//         </tr>
//         <tr>
//           <Card value={<img src={images[6]} height='125' width='125' />} />
//           <Card value={<img src={images[7]} height='125' width='125' />} />
//           <Card value={<img src={images[8]} height='125' width='125' />} />
//           <Card value={<img src={images[9]} height='125' width='125' />} />
//           <Card value={<img src={images[10]} height='125' width='125' />} />
//           <Card value={<img src={images[11]} height='125' width='125' />} />
//           {/* <td><img src={images[7]} height='125' width='125' /></td>
//           <td><img src={images[8]} height='125' width='125' /></td>
//           <td><img src={images[9]} height='125' width='125' /></td>
//           <td><img src={images[10]} height='125' width='125' /></td>
//           <td><img src={images[11]} height='125' width='125' /></td> */}
//         </tr>
//         <tr>
//           <Card value={<img src={images[12]} height='125' width='125' />} />
//           <Card value={<img src={images[13]} height='125' width='125' />} />
//           <Card value={<img src={images[14]} height='125' width='125' />} />
//           <Card value={<img src={images[15]} height='125' width='125' />} />
//           <Card value={<img src={images[16]} height='125' width='125' />} />
//           <Card value={<img src={images[17]} height='125' width='125' />} />
//
//           {/* <td><img src={images[12]} height='125' width='125' /></td>
//           <td><img src={images[13]} height='125' width='125' /></td>
//           <td><img src={images[14]} height='125' width='125' /></td>
//           <td><img src={images[15]} height='125' width='125' /></td>
//           <td><img src={images[16]} height='125' width='125' /></td>
//           <td><img src={images[17]} height='125' width='125' /></td> */}
//         </tr>
//         <tr>
//           <Card value={<img src={images[18]} height='125' width='125' />} />
//           <Card value={<img src={images[19]} height='125' width='125' />} />
//           <Card value={<img src={images[20]} height='125' width='125' />} />
//           <Card value={<img src={images[21]} height='125' width='125' />} />
//           <Card value={<img src={images[22]} height='125' width='125' />} />
//           <Card value={<img src={images[23]} height='125' width='125' />} />
//           {/* <td><img src={images[18]} height='125' width='125' /></td>
//           <td><img src={images[19]} height='125' width='125' /></td>
//           <td><img src={images[20]} height='125' width='125' /></td>
//           <td><img src={images[21]} height='125' width='125' /></td>
//           <td><img src={images[22]} height='125' width='125' /></td>
//           <td><img src={images[23]} height='125' width='125' /></td> */}
//         </tr>
//       </table>
//
//     </div>
//   }
// }
// class Card extends Component {
//
//   // clickChangeImgSrc (Card) {
//   //   console.log('You clicked me', Card)
//   // }
//   render () {
//     return <td onClick={e => this.clickChangeImgSrc(this.props.value)}>
//       {this.props.value}
//     </td>
//   }
// }
// export default App
import React, { Component } from 'react'
import styles from './App.scss'
import BoxItem from './BoxItem'

import images from '../images.json'

class App extends Component {

  constructor () {
    super()
    this.state = {
      matched: [],
      picks: [],
      won: false
    }
  }

  choose (card) {
    if (this.state.picks.length === 2 || this.state.matched.includes(card)) { return } // DO NOTHING, BAIL OUT
    this.setState({
      picks: [...this.state.picks, card]
    }, () => {
      if (this.state.picks.length === 2) {
        this.check()
      }
    })
  }

  check () {
    const picks = this.state.picks
    if (images[picks[0]] === images[picks[1]]) {
      this.setState({
        matched: [...this.state.matched, ...picks],
        picks: []
      }, () => {
        if (this.state.matched.length === images.length) {
          this.setState({
            won: true
          })
        }
      })
    }
    setTimeout(() => {
      this.setState({ picks: [] })
    }, 3000)
  }

  render () {
    const picks = this.state.picks
    const matched = this.state.matched
    return <div>
      <h1>{this.state.won ? 'YOU WIN' : 'MEMORY'}</h1>
      <section>
        <table>
          <tr>
            <BoxItem image={images[0]} isUp={picks.includes(0) || matched.includes(0)} handleClick={() => this.choose(0)} />
            <BoxItem image={images[1]} isUp={picks.includes(1) || matched.includes(1)} handleClick={() => this.choose(1)} />
            <BoxItem image={images[2]} isUp={picks.includes(2) || matched.includes(2)} handleClick={() => this.choose(2)} />
            <BoxItem image={images[3]} isUp={picks.includes(3) || matched.includes(3)} handleClick={() => this.choose(3)} />
          </tr>
          <tr>
            <BoxItem image={images[4]} isUp={picks.includes(4) || matched.includes(4)} handleClick={() => this.choose(4)} />
            <BoxItem image={images[5]} isUp={picks.includes(5) || matched.includes(5)} handleClick={() => this.choose(5)} />
            <BoxItem image={images[6]} isUp={picks.includes(6) || matched.includes(6)} handleClick={() => this.choose(6)} />
            <BoxItem image={images[7]} isUp={picks.includes(7) || matched.includes(7)} handleClick={() => this.choose(7)} />
          </tr>

        </table>
      </section>
    </div>
  }
}

export default App
