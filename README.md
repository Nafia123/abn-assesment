# abn-assesment

Choices: 
I used tailwind to easily and efficiently add styling to the whole application. Encapsulating the styling to each element, creating readable and easy to change styling with a certain customizable styling.

Vue.js was used as it was preferred to be used in ABN AMRO Environment

TVMazeAPI seems very limited when showing TV-shows without user input. As there is only a search endpoint to get a list of TV-shows. So I have created my own default dashboard dataset to show the user genres and a couple of shows. Clicking on a show or searching for shows will indeed go to the API and fetch Records live. 

Used Atomic Design to easily make clear how big a component is and making it easy for a developer to use and reuse building blocks of components. And being able to create new components using smaller building blocks like Modal or Dialog. With slots a developer can easily re use logic with their own templating. 

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```
And go to http://localhost:5173



### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

