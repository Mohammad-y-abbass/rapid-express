# 🚀 Expressify - Express App Generator CLI 🚀

Are you tired of writing the same code in every project? Don't worry, I've got you covered.

## Introduction

Welcome to Expressify, your go-to tool for rapidly generating Express.js applications with ease. Expressify simplifies the process of setting up a new Express.js project by providing a command-line interface that automates the creation of a boilerplate Express.js application with a predefined folder structure, middleware setup, error handling, and database configuration.

## Installation

To install Expressify globally, run `npm install -g expressify-cli`.

## Usage

Generating a new Express.js application using Expressify is as simple as running the following command:

`expressify create project-name`

Replace project-name with the name of your new Express.js project. Expressify will create a new directory with the specified project name and generate the boilerplate Express.js application inside it.

Then you will be asked to enter your MONGO_URI to set up connection to database, paste it and press enter.

## Project Structure

The Express.js application generated by Expressify follows a structured layout, as shown below:

```my-express-app/
  ├── node_modules/
  ├── src/
  │   ├── config/
  │   │   └── db.js
  │   ├── controllers/
  │   ├── middleware/
  │   │   └── globalErrorHandler.js
  │   ├── models/
  │   ├── routes/
  │   ├── utils/
  │   │   └── apiError.js
  │   └── index.js
  ├── .env
  ├── package.json
  └── package-lock.json

```

### Note

! This text is in orange
! Do not worry about the generated code everything is explained through comments.

