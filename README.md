<!-- TITLE/ -->

<h1>React Router Route Resolver</h1>

<!-- /TITLE -->


<!-- BADGES/ -->

<span class="badge-npmversion"><a href="https://npmjs.org/package/route-resolver" title="View this project on NPM"><img src="https://img.shields.io/npm/v/route-resolver.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/route-resolver" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/route-resolver.svg" alt="NPM downloads" /></a></span>
<span class="badge-daviddm"><a href="https://david-dm.org/Dash-OS/route-resolver" title="View the status of this project's dependencies on DavidDM"><img src="https://img.shields.io/david/Dash-OS/route-resolver.svg" alt="Dependency Status" /></a></span>
<span class="badge-travisci"><a href="http://travis-ci.org/Dash-OS/route-resolver" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/Dash-OS/route-resolver/master.svg" alt="Travis CI Build Status" /></a></span>
<span class="badge-coveralls"><a href="https://coveralls.io/r/Dash-OS/route-resolver" title="View this project's coverage on Coveralls"><img src="https://img.shields.io/coveralls/Dash-OS/route-resolver.svg" alt="Coveralls Coverage Status" /></a></span>
<span class="badge-paypal"><a href="https://paypal.me/bradynapier" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>

<!-- /BADGES -->


<!-- DESCRIPTION/ -->

Resolved nested routes with React Router 4.

<!-- /DESCRIPTION -->


> You may pass extra arguments when creating the reducer and when reducing. 
> The resulting arguments will be `(...initialArgs, ...reducerArgs)`.

### Installation

```
yarn add reducer-generator-object-map
```

**or**

```
npm install --save reducer-generator-object-map
```

### Simple Example

```js
import createObjectMapReducer from 'reducer-generator-object-map'

const system = createObjectMapReducer({ /* initial state */ }, {
  'SYSTEM_ONLINE': (state, { type, ...action }, ...extraArgs) => ({
    ...state,
    isOnline: true
  }),
  'SYSTEM_OFFLINE': (state, { type, ...action }, ...extraArgs) => ({
    ...state,
    isOnline: false
  })
}, /* You may pass extra args that will be passed to the reducer(s) */ )
```

<!-- HISTORY/ -->

<h2>History</h2>

<a href="https://github.com/Dash-OS/route-resolver/releases">Discover the release history by heading on over to the releases page.</a>

<!-- /HISTORY -->


<!-- BACKERS/ -->

<h2>Backers</h2>

<h3>Maintainers</h3>

These amazing people are maintaining this project:

<ul><li><a href="https://github.com/bradennapier">Braden Napier</a> — <a href="https://github.com/Dash-OS/route-resolver/commits?author=bradennapier" title="View the GitHub contributions of Braden Napier on repository Dash-OS/route-resolver">view contributions</a></li></ul>

<h3>Sponsors</h3>

No sponsors yet! Will you be the first?

<span class="badge-paypal"><a href="https://paypal.me/bradynapier" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>

<h3>Contributors</h3>

These amazing people have contributed code to this project:

<ul><li><a href="https://github.com/bradennapier">Braden Napier</a> — <a href="https://github.com/Dash-OS/route-resolver/commits?author=bradennapier" title="View the GitHub contributions of Braden Napier on repository Dash-OS/route-resolver">view contributions</a></li></ul>



<!-- /BACKERS -->


<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; Braden R. Napier</li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->
