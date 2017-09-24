# Inklination App

## Installation
1. Download the [Expo App iOS client](https://itunes.apple.com/us/app/expo-client/id982107779?mt=8]).
2. Using Expo scan the QR code below:
![Expo QR code](https://raw.githubusercontent.com/m4nuC/cb_ink/master/expo_qr.png)
Note: *You may need to refresh or restart the Expo client as sometimes the app doesn't fully load and looks broken.*


## Stack
React Native + Redux. I've chosen on that stack as it is a better representation of skills that I may use on a day to day basis. It was my first time using it so that slowed me down a bit.

Unity3D was also a good option for this app, as out of the box, it would have taken care of trigonometry calculations and the complex event system (resizing, dragging, zooming etc.), leaving mostly some UI work.

## What I would improve given enough time
- Some refactoring to make the code cleaner. i.e.: decoupling a couple of components & linting everything
- Testing on more devices and versions of IOS
- The zooming could be improved. Right now when zoomed in, single finger panning is disabled.
- Unit testing could aim to 100% coverage on this app
- Finish the missing features (if needed): Portrait mode, UI for more accurate placement of teardrops, inversion of the image colors.

## Development
Install dependencies: `yarn install`
Start IOS server: `yarn run ios`
