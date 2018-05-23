# NHSUK Kit

Welcome to Kit.

Kit is an express.js prototyping tool that allows you to create Heroku friendly apps to demo features to users and developers.

## Features

Kit is based on the express.js generator and the structure remains identical apart from a couple of features:

1. Any ```.html``` files in the static directory will be served as is. Be sure to avoid naming your HTML things like ```index.html``` or anything that will interrupt your named routes in ```routes.js```.
2. We use Nunjucks instead of Pug/Jade but we use the ```.html``` file extension. ```.njk``` will not work!.
3. We have a pre-established way of creating new versions within the app by adding ```.html``` files within a directory like ```v1```. All routes will automatically appear to one or two levels

## Adding a new version

Inside your app you need to do two things to set up a new version.

create a folder. Add html.

add stuff in view folders and boom. Hello pages

## Warning

This is in a state of change. And is a bit shite.

## How to download and use

Your machine needs to have node.js installed.

It also needs git to be installed (You can get around this by installing the code via https://github.com/GrilloPress/nhsuk-kit/archive/master.zip)

After that, locate where you want it to live on your machine and run the following commands in your terminal:

```
git clone https://github.com/GrilloPress/nhsuk-kit.git name_of_project
cd name_of_project
npm install
npm run devstart
```

If you want to run the production quality server (for some unknown reason...) run

```
npm start
```

Heroku will do this automatically.
