This project was bootstrapped with [Create React App](https://create-react-app.dev/).


This is a simple application for managing wine collection. The user has options to create, update and delete wines. The products can be sorted and filtered based on various criteria. Changing the filtersOptions and sortingOptions can be done in [config.js](src/config.js). Even though the application is small it is very modular and the application's state is stored in redux store which helps for future maintenance and adding new features. It also includes error handler, that will display eventual problems with http request or others, it also provides feedback while updating the data(spinner). For styling I used [css modules](https://github.com/css-modules/css-modules) which provides encapsulation for css rules.

For database I used a mock server. [json-server](https://github.com/typicode/json-server )



### 1 Install JSON Server

```bash
npm install -g json-server
```

### 2 Start JSON Server on port 3004

```bash
json-server --watch db.json --port 3004
```


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).