# Inklination App

## Installation
1. Download the [Expo App iOS client](https://itunes.apple.com/us/app/expo-client/id982107779?mt=8]).
2. Using Expo scan the QR code below:

![Expo QR code](https://raw.githubusercontent.com/m4nuC/cb_ink/master/expo_qr.png)


## Stack
React Native + Redux. I've settled on that stack as it is a better representation of skills that I may use on a day to day basis (as compared to Unity3D). It was my first time using React Native so that slowed me down a bit.

Unity3D was also a good option as out of the box, it would have taken care of trigonometry calculations and the complex event system (resizing, dragging, zooming etc.), leaving mostly some UI work.

## What I would improve given enough time
- Some refactoring to make the code cleaner. i.e.: decoupling a couple of components, better styling & linting everything
- Testing on more devices and versions of IOS
- The zooming could be improved. Right now when zoomed in, single finger panning is disabled.
- Unit testing: could aim to 100% coverage on this app
- Performance: i.e. right now when moving the teardrops very fast there is some latency in the angle line update, general perf..
- Finish the missing features (if needed): ~~Portrait mode (just need to remove a configuration option `app.json`)~~, UI for more accurate placement of teardrops, inversion of the image colors.

## Development
Install dependencies: `yarn install`
Start IOS server: `yarn run ios`
