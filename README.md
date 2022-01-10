<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="readme/imgs/devalley_logo.png" alt="Project logo"></a>
</p>

<h1 align="center">Developer Alley</h1>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)](https://github.com/rgoshen/dev_alley)
[![GitHub issues](https://img.shields.io/github/issues/rgoshen/dev_alley?color=yellow)](https://github.com/rgoshen/dev_alley/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/rgoshen/dev_alley)](https://github.com/rgoshen/dev_alley/pulls)
[![License](https://img.shields.io/github/license/rgoshen/dev_alley)](https://github.com/rgoshen/dev_alley/blob/main/LICENSE)

</div>

---

<p align="center"> It is a small social network app that includes authentication, profiles and forum posts using the MERN stack.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Demo](#demo)
- [Built Using](#built_using)
- [TODO](./TODO.md)-->
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

A small social website for developers. This app allows developers to communicate, provide information and general share of knowledge. “Developer Alley”, is essentially a resource tool similar to other social apps such as "[Twitter](https://twitter.com/)". The purpose of this app is that it will provide access to information, resources and allow developer to network.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

| Client-side                       | Server-side                |
| --------------------------------- | -------------------------- |
| react: ^17.0.2                    | axios: ^0.24.0             |
| react-dom: ^17.0.2                | bcryptjs: ^2.4.3           |
| react-router-dom: ^6.2.1          | colors: ^1.4.0             |
| react-scripts: ^5.0.0             | config: ^3.3.6             |
| redux: ^4.1.2                     | dotenv: ^10.0.0            |
| redux-devtools-extension: ^2.13.9 | express: ^4.17.2           |
| redux-thunk: ^4.1.2               | express-validator: ^6.14.0 |
| uuid: ^8.3.2                      | gravatar: ^1.8.2           |
|                                   | jsonwebtoken: ^8.5.1       |
|                                   | mongoose: ^6.1.3           |
|                                   | normalize                  |

### Installing

A step by step series of examples that tell you how to get a development env running.

Clone or download

```bash
git clone https://github.com/rgoshen/dev_alley
```

Change directory into project folder

```bash
cd dev_alley
```

Add a default.json file in config folder with the following

```json
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret",
  "githubToken": "<yoursecrectaccesstoken>"
}
```

Install server dependencies(PORT: 5000)

```bash
npm install
```

Install client dependencies(PORT: 3000)

```bash
cd client
npm install
```

### Starting

Note: you need to run both server and client concurrently
Run both Express and React from root

```bash
cd ..
npm run dev
```

### Build for production

```bash
cd client
npm run build
```

### Test production before deploy

After running a build in the client 👆, cd into the root of the project.  
And run...

Linux/Unix

```bash
NODE_ENV=production node server.js
```

Windows Cmd Prompt or Powershell

```bash
$env:NODE_ENV="production"
node server.js
```

<!-- ## 🔧 Running the tests <a name = "tests"></a> -->

<!-- Explain how to run the automated tests for this system. -->

<!-- ### Break down into end to end tests -->

<!-- Explain what these tests test and why -->

<!-- ``` -->
<!-- Give an example -->
<!-- ``` -->

<!-- ### And coding style tests -->

<!-- Explain what these tests test and why -->

<!-- ``` -->
<!-- Give an example -->
<!-- ``` -->

## 🎈 Demo <a name="demo"></a>

![image](/readme/imgs/DevAlleyDemo.gif)

## 🚀 Deployment to Heroku <a name = "deployment"></a>

If you followed the sensible advice above and included `config/default.json` and `config/production.json` in your .gitignore file, then pushing to Heroku will omit your config files from the push.  
However, Heroku needs these files for a successful build.  
So how to get them to Heroku without commiting them to GitHub?

What I suggest you do is create a local only branch, lets call it _production_.

```bash
git checkout -b production
```

We can use this branch to deploy from, with our config files.

Add the config file...

```bash
git add -f config/production.json
```

This will track the file in git on this branch only. **DON'T PUSH THE PRODUCTION BRANCH TO GITHUB**

Commit...

```bash
git commit -m 'ready to deploy'
```

Create your Heroku project

```bash
heroku create
```

And push the local production branch to the remote heroku main branch.

```bash
git push heroku production:main
```

Now Heroku will have the config it needs to build the project.

> **Don't forget to make sure your production database is not whitelisted in MongoDB Atlas, otherwise the database connection will fail and your app will crash.**

After deployment you can delete the production branch if you like.

```bash
git checkout main
git branch -D production
```

Or you can leave it to merge and push updates from another branch.  
Make any changes you need on your main branch and merge those into your production branch.

```bash
git checkout production
git merge main
```

Once merged you can push to heroku as above and your site will rebuild and be updated.

## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Express](https://expressjs.com/) - Server Framework
- [ReactJs](https://reactjs.org/) - Web Framework

## Standard

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## ✍️ Author(s) <a name = "authors"></a>

- [rgoshen](http://rickgoshen.epizy.com/) - Idea & Initial work - Email me: rick.goshen@gmail.com (welcome, say hi!)

```

```
