import React , { PureComponent }from 'react'// eslint-disable-line
import Header from 'common/Header'
// import Banner from 'common/Banner'
import Main from './main'

// export default class Index extends PureComponent {
//   render() {
//     return (
//       <div>
//         <Header />
//         <Main />
//       </div>
//     )
//   }
// }
export default function Index() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  )
}
