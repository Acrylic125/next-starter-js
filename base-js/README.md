# NextJS Starter - Base JS

This project is to help kickstart your next project with NextJS.

As a start, this project is a bare bones shopping app to demonstrate how to use NextJS. Refer to the "Getting Started" section to get started.

## Main Libraries and Frameworks

- NextJS as a backend framework for React.
- MySQL as a database.
- Auth0 for authentication.
- TailwindCSS for styling.
- React Query for data fetching.

## Getting Started

1. Clone the repo
1. Run `npm install` to install dependencies.
1. COPY and name `sample.env.local` to `.env.local` and update the values to match your environment.
1. Run `npm run dev` to start the development server.
1. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Removing Starter Code

As mentioned above, this project is a bare bones shopping app to demonstrate how to use NextJS. To remove the starter code, follow these steps:

1. Delete the `shop.sql` folder.
1. Delete the `services/products` folder.
1. Delete the `controllers/products` folder.
1. Delete the `api/products` folder.
1. Delete the `pages/api/products.js` file.

## Setting up Postman

In Postman, go to or create a workspace.
Next, go to `Environments`, set the following environment variables:

![Image of Postman Environment Variables](readme-assets\auth0-env.png)

These values can be found in the Auth0 dashboard for the application.

Go to `Collections`, and go to or create a collection.

![Image of Postman Authorization](readme-assets\collection-setup.png)

Here, go the `Authorization` tab. Set the `Type` to `OAuth 2.0`.
Then, select the environment of the collection to the environment you created in the previous step.

Now, configure `Configure New Token` as follows:

![Image of Postman Authorization](readme-assets\configure-token.png)

These values should have been defined in the environment variables you created previously.
Once you are done, click `Get New Access Token`. Since `Authorize Using Browser` is selected, you should be redirected to the login page. Login with the account you wish to use. Once you are done, a popup requesting to redirect you back to postman should appear. If not, ensure `Popups and redirects` is enabled on the browser for the domain, `https://oauth.pstmn.io/`.

### References

- https://www.youtube.com/watch?v=3yfHIVWddqk&t=206s
- https://community.auth0.com/t/test-postman-and-nextjs-secure-api-endpoints/67315/7

## Deployment

1. Run `npm run build` to build the project.
1. Run `npm run start` to start the production server.
