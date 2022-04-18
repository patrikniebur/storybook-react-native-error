### Storybook for react native error replicated  

[Issue #327](https://github.com/storybookjs/react-native/issues/327)  
  
Replicate:  
- Run `npm install` then `cd ios && pod install`    
- Start emulator with `npm run ios` or `npm run android`  
- After the emulator starts edit anything in [components/Button.stories.tsx](components/Button.stories.tsx)
- Save and error should appear  

#### Environment  
OSX 12.13.1  
Node v16.13.0  
npm 8.1.0