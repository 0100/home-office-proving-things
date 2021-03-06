# Home Office Proving Things Prototype

These prototypes have been designed by the Sheffield Hub for some transactions the Proving Things team are looking into providing for some Home Office Services.

We version our prototypes using git tags with a mixture of duplicating the code into a new version folder. This gives the team a good insight into the changes being made by design. We can also track user research findings then with a version of the prototype.

You can find the prototypes live on [Heroku](http://home-office-proving-things.herokuapp.com/)

## Using the GOV.UK Prototype kit

For more information about the gov.uk prototyping kit visit [https://github.com/alphagov/govuk_prototype_kit]

## Requirements to run the prototype

#### [Node](http://nodejs.org/)

You may already have it, try:

```
node --version
```

Your version should be 4.2.2.

If you don't have Node, download it here: [http://nodejs.org/](http://nodejs.org/).

## Getting started

Install Node.js (see requirements)

#### Download the prototype kit

[Download the zip file](https://github.com/alphagov/govuk_prototype_kit/archive/master.zip)

Unzip the file

#### Install dependencies

Open a command line app (Terminal on OSX) and change to the unzipped directory. Then run:

```
npm install
```

This will install extra code that the prototype kit needs.

#### Run the app

```
npm start
```

Go to [localhost:3000](http://localhost:3000) in your browser.

If you want to view multiple prototypes at the same time you can give them unique port numbers, like this:

```
PORT=3005 npm start
```

To avoid conflicts we recommend using ports between 3000 and 3009. To change the port number permanently, edit the port variable in /server.js.

#### Hot reload

Any code changes should update in the browser without you restarting the app.

The app recompiles app/assets/stylesheets/application.scss everytime changes are observed.

## Documentation

- [Prototype kit principles](docs/principles.md)
- [Getting started](docs/getting-started.md)
- [Making pages](docs/making-pages.md)
- [Writing CSS](docs/writing-css.md)
- [Deploying (getting your work online)](docs/deploying.md)
- [Updating the kit to the latest version](docs/updating-the-kit.md)
- [Tips and tricks](docs/tips-and-tricks.md)
- [Creating routes (server-side programming)](docs/creating-routes.md)

This project is built on top of Express, the idea is that it is straightforward to create simple static pages out of the box. However, you're not limited to that - more dynamic sites can be built with more understanding of Express. Here's a good [Express tutorial.](http://code.tutsplus.com/tutorials/introduction-to-express--net-33367)

## Community

We have two Slack channels for this app. You'll need a government email address to join them.

* [Slack channel for users of the prototype kit](https://ukgovernmentdigital.slack.com/messages/prototype-kit/)
* [Slack channel for developers of the prototype kit](https://ukgovernmentdigital.slack.com/messages/prototype-kit-dev/)
