# next-tailwind-blog
FUNCTIONAL REQUIREMENTS
You are required to build a blog web application with the following requirements:
The blog will have three sets of users:
Authors: Will be able to create blog posts and edit their own blog posts
Publishers: Will be able to create blog posts and edit all blog posts including those not created by them. They can also approve blog posts. Only approved blog posts will be visible to Guest (unauthenticated) users.
Guest users: Any unauthenticated user will be regarded as a guest user and can only view approved blog posts.
Blog posts will consist of a title, description and an uploaded image. A Blog post can also belong to many categories.
Blog posts must feature at least one main uploaded image to be displayed in the list view and a smaller image to be displayed on the detail view.
There should be frontend views for viewing the list and details of blog posts.
There should be backend views for creating, editing and approving blog posts.
The blog MUST be visually appealing.

TECHNICAL REQUIREMENTS
You are required to use NextJS and typescript to build out the blog.
The blog MUST be hosted on a local postgres database.
NextAuth must be used for authentication and the following providers must be configured:
Google
Credentials (Username & Password)
Yup must be used for form validation
Axios and react-query should be used for http requests.
Prisma should be used for connecting to the database.
TailwindCSS must be used for styling.
The blog application should be fully tested with unit, integration and browser tests written where necessary using Jest, React Testing Library and Cypress.

IMPORTANT NOTES
Pay close attention to naming conventions i.e. naming folders, pages, functions and components.
Structure the application properly, functions should be short and placed in a well thought out folder structure.

