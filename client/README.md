This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Your React App will live here.  While is development, run this application from this location using `npm start` or `yarn start`.

No environment variables are needed to run this application in development, 
but be sure to edit the "proxy" in the `package.json` if needed.

This app will be automatically built when you deploy to heroku, please see the `heroku-postbuild` script in your `express.js` application's `package.json`, **NOT** React's `package.json` to see how this works.

If you are using Redux, then run:

`npm install redux react-redux redux-thunk`

For CSRF Protection on all request methods besides `GET`, you need to define a `X-CSRF-TOKEN` header that has a value of the `XSRF-TOKEN` cookie.

Example of a fetch request with CSRF:

```js
import Cookies from 'js-cookie';

const login = async () => {
  const csrfToken = Cookies.get("XSRF-TOKEN");
  const res = await fetch("/api/session", {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-TOKEN": csrfToken,
    },
    body: JSON.stringify({
      username: "Demo-lition",
      password: "password"
    }),
  });
  res.data = await res.json(); // current user info
  if (res.ok) {
    return res.data;
  }
};
```

Deploy to Heroku
Create a new project
Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres"
Install the Heroku CLI
Run $ heroku login
Add heroku as a remote to this git repo $ heroku git:remote -a <project_name>
Push the project to heroku $ git push heroku master
Connect to the heroku shell and prepare your database
    $ heroku run bash
    $ sequelize-cli db:migrate
    $ sequelize-cli db:seed:all
(You can interact with your database this way as youd like, but beware that db:drop should not be run in the heroku environment)

Add environment variables on the heroku environment using the Heroku dashboard. (Setting Heroku Config Vars)[https://devcenter.heroku.com/articles/config-vars]