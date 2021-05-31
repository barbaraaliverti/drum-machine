# Calculator

This is a solution to the [Drum Machine](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-drum-machine) challenge. [FreeCodeCamp](https://www.freecodecamp.org/) is a platform to to help people learn to code for free.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [How to run this project locally](#how-to-run-this-project-locally)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Build a drum machine that plays sounds as the user clicks or presses the correspondent key.

User Story #1: I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.

User Story #2: Within #drum-machine I can see an element with a corresponding id="display".

User Story #3: Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.

User Story #4: Within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).

User Story #5: When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.

User Story #6: When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string Q, pressing the W key should trigger the drum pad which contains the string W, etc.).

User Story #7: When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).

### Screenshot

COLOCAR DPEOIS

### Links

- [Drum Machine at Vercel](https://drum-machine-coral.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Bootstrap
- [React](https://reactjs.org/) - JS library

### How to run this project locally

#### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

In the project directory, you can run:
```npm install``` 

then

```npm start```

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### What I learned

- Mapping arrays to generate buttons, as in:
```
class PadBank extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let padBank;
        padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
            return (
            <DrumPad
            clip={padBankArr[i].url}
            clipId={padBankArr[i].id}
            keyCode={padBankArr[i].keyCode}
            keyTrigger={padBankArr[i].keyTrigger}
            updateDisplay={this.props.updateDisplay}
            />
            );
        });
        
        return <div className='pad-bank'>{padBank}</div>;
    }  
}
```
- How to use event listeners to handle key press
- Pseudo-elements ```:after``` and ```:before``` that I had to research more and understand better to make the buttons with the cool 3D effect that I wanted
- I am particularly proud of the toggle bank buttons! I was quite hard to make them work properly and the 'Heater Kit' button wouldn't overlap the 'Smooth Piano' button when the latter was pressed. After trying to adjust the z-index and failing, I decided to increase the space between them and it worked for me.

![image](SCREENCAP TOGGLE BTNS)

### Continued development

One thing I still couldn't fix was to make the drum pad buttons look pressed when the keyboard is used intead of clicking. I might have to change quite a lot of my code to fix this, but I want to do it eventually. In addition, it would be nice to add a volume control to the drum machine. 

## Author

- [Portfolio](https://barbaraaliverti.github.io/)
- [LinkedIn](https://www.linkedin.com/in/barbaraaliverti)