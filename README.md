# Coding Exam
This exam is designed to allow you to showcase your ability to build and deploy a simple prototype. The prototype will be designed to test out a market proposition before fully developing it.

## Overview
Your task is to **build** and **deploy** a simple Typescript (or Javascript, if not familiar) web app that implements a simple multiple-choice quiz application and a simple course (product) recommendation once the user has completed the quiz.

The prototype quiz app should include the following:
- A 'Home' screen that allows you to launch the quiz.
- Questions screens.
  - A question screen - minimum of 10 questions.
  - A question can take on different formats, including multiple-choice, fill-in-the-blanks, and various other types.
  - Questions can be anything you choose and centered around English Grammar subjects.
- A score and recommendation screen:
  - Displays the score to the user.
  - Provides a mock learning course recommendation based on the score of the user.
    - Low Score - B2 First, C1 Advanced
    - Average Score - B2 First for Schools
    - High Score - B1 Preliminary for Schools, A2 Key for Schools
    - Reference: https://www.testandtrain.com/
  - Allows them to navigate back to the home screen.

## How to run

### Docker
1. Install [Docker](https://docs.docker.com/get-docker/) on your machine.
2. Build your container
```
docker build -t cambridge-exam .
```
3. Run your container: 
```
docker run -p 3000:3000 cambridge-exam
```

### Running locally
0. Make sure you're running Node.js 20.x. You can check the `.nvmrc` for the version used for my development.
1. Install dependencies
```
npm ci
```
2. Run the development server
```
npm run dev
```