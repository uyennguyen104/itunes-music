# The iTunes Music
This is an application that will fetch music results from iTunes api and display the results according to the design requirements.

## Features

This is a responsive and pixel perfect single page application that uses iTunes search API to fetch information within the iTunes Store based on the user&#39;s search query.

- Search
  1. Users can type in any phrase they like
- Filter by genre
  1. Users can click on any of the existing Genre present in the Filter Genre section to fetch results for the particular genre
- Show music result
  1. Once results are returned successfully from the api request, display the results and the count according to the design specifications
- Display empty box when no results are returned from the api call

## Technologies

- Use React as the UI library
- Use redux for state management. Use redux-saga as a middleware library.
- Use Ant Design(https://ant.design/) as a UI library
- Use SCSS as a CSS preprocessor

## Browsers support

- Browsers that with last 2 versions
- Not ie <= 8

## Getting started

```bash
# make sure you have installed npm and yarn already
```

``` bash
# install dependencies
> yarn
# serve with hot reload at localhost:3000
> yarn start
```

Other commands available are:

``` bash
# build for production with minification
> yarn build
