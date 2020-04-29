# Dog of The Dow Admin Management Website
The website is using to manage the list of user for Dog of The Dow mobile application. Admin can use the website to access the data of the product and also manage their users.  
The application is writing in `React`. Then it will be bundled and deployed using `Webpack` and `AWS CLI`.  
![](https://github.com/hialan-org/dod_web_admin/workflows/Web%20deploy%20(Dev)/badge.svg) ![](https://github.com/hialan-org/dod_web_admin/workflows/Web%20deploy/badge.svg) ![](https://img.shields.io/github/issues/hialan-org/dod_web_admin?color=orange)

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.  
See deployment for notes on how to deploy the project on a live system.

### Prerequisites
Download and install NodeJS:  
`https://nodejs.org/en/download/`

### How to run project
To run the project locally in your machine, follow these steps:
- Clone the repo
- In the project directory, run:  
`npm start` or `yarn start`  
Which will run the app in development mode.  
Open http://localhost:8080 to view it in the browser.

### Development
To start enhance or fix a bug, follow these steps:
- Fork the repo
- Create a new branch (git checkout -b new-features)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (git commit -am 'Add new features')
- Push to the branch (git push origin new-features)
- Create a Pull Request

### Deployment
To deploy the project to AWS S3 Bucket with CloudFront, follow these steps:
- Install AWS Amplify CLI on your computer: `npm install -g @aws-amplify/cli`.
- Setup AWS Amplify: `amplify configure`. It will ask you to sign into the AWS Console. After you signed in, Amplify CLI will ask you to create IAM user (Create a user with `AdministratorAccess` to your account to provision AWS resources for you).
- Once the user created, AWS Amplify will ask you to provide `accessKeyId` and `secretAccessKey` to connect Amplify CLI with newly created IAM user.
- Then run `amplify init`, and you need to enter some information of your project.
- Add hosting service into your app: `amplify add hosting`.
- Publish your app: `amplify publish`, which will push your application to S3 bucket and create a CloudFront that connect with it.
- Congratulation, your app is online!