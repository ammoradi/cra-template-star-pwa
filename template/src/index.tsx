import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import Navigation from './routes'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <App>
    <Navigation />
  </App>,
  document.getElementById('root')
)

// comment this and uncomment register fn below to use service worker in production
serviceWorker.unregister()

// serviceWorker.register({
//   onUpdate: (registration) => {
//     try {
//       // eslint-disable-next-line no-alert
//       const shouldUpdate = window.confirm(
//         'There is an update available.\npress ok to install new version'
//       )
//       if (shouldUpdate) {
//         window.location.reload()
//         if (registration && registration.waiting) {
//           registration.waiting.postMessage({ type: 'SKIP_WAITING' })
//         }
//       }
//     } catch (_) {
//       //
//     }
//   }
// })
