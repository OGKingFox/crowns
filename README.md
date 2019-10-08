<p align="center">
  <a href="https://myosrs.com/crowns">
    <img alt="@myosrs/crowns" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/209282/Gold.svg" height="90" />
  </a>
</p>
<h1 align="center">
  Crowns
</h1>

<p align="center">
  <a href="https://github.com/myosrs/crowns/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MyOSRS Crowns is released under the MIT license." />
  </a>
</p>

## Details

`@myosrs/crowns` is a javascript package that makes use of the Custom Elements Web API to make it dead simple to implement rank distinction of some sort using crowns. Largely inspired by the [MMORPG RuneScape](https://www.runescape.com) and in particular the approach taking to distinguish their admins ([See reference on their web forums](http://services.runescape.com/m=forum/forums.ws?380,381))

## Installation & Usage

Assuming you are using a [supported browser](https://caniuse.com/#feat=custom-elementsv1), you shouldn't have any issue or additional requirements past loading the script anywhere in your HTML (global template or layout wrapper)

```html
<script src="https://unpkg.com/@myosrs/crowns@latest"></script>
```

Use it next to usernames you want to distingish

```html
<div>
  <myosrs-crown></myosrs-crown>
  <span>Username</span>
</div>
```

## Example

Checkout this minimal requirement [Codepen Example](https://codepen.io/pqt/pen/645e10e7b268956f392322aa129a4341/top/?editors=1000) to see it in action.
