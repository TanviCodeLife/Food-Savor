# Food Savor
#### Tanvi Garg, Sheila Stephen, Paige Williams, Brooke Perry, Kristin Brewer-Lowe


## Description
A JavaScript application that allows a user to search recipes based on the ingredients. The user can specify different dietary restrictions such as- Vegan, Vegetarian.The user can create an account, save favorite recipes.

## Table of Contents
  1. [Specifications](#specs-work)
  2. [Setup on OSX](#setup)
  3. [Technologies Used](#Tech-used)
  4. [MIT License](#mit-lic)


## Specifications <a name="specs-work"></a>

  | Behavior | Input | Output |
  |----------|-------|--------|
  |  The user enters Ingredients, checks the dietary restrictions | User Input: Tomato [x] Vegan | List of recipes that contain tomato and are vegan |
  |  The User can create an account | create an account using Google Auth | Account created  |
  | The User clicks on the heart, to add it to the favorite list| Specific recipe  | Specific recipe is added to favorites list |

## Setup on OSX <a name="setup"></a>

* Install Node.js
* Install Angular cli
* Install Angular
* Go to GitHub profile and clone the repo from [Food Savor](https://github.com/TanviCodeLife/Food-Savor.git). Use `git clone <project url>` command to pull it to a local repository in your Home directory.
* Sign up for an API key here: https://www.edamam.com/
* Get the Api key from the firebase
* Add a file api-keys.ts to the app folder. Here is an example file:
```
export const masterFirebaseConfig = {
  apiKey: "FIREBASE-API-KEY",
  authDomain: "XXX",
  databaseURL: "XXX",
  projectId: "XXX",
  storageBucket: "XXX",
  messagingSenderId: "XXX"
}

export const recipeApiAppId = "YOUR-APP-ID"
export const recipeApiKey = "YOUR-API-KEY"
```
* `npm install` to install dependencies
* `ng serve` to build and start the dev server
* Visit `localhost:4200` to view the app running.

## Technologies Used <a name="Tech-used"></a>

* Node.js
* Angular CLI 1.6.5
* Angular 5.2.11
* Typescript 2.5.3

## License <a name="mit-lic"></a>

This software is licensed under the MIT license.

Copyright (c) 2018 **Tanvi Garg, Sheila Stephen, Paige Williams, Brooke Perry, Kristin Brewer-Lowe**
