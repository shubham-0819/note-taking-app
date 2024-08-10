# Note-Taking App

A simple note-taking application built with Node.js, Express, and MongoDB.

## Table of Contents

- [Note-Taking App](#note-taking-app)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Usage](#usage)

## Features

- User authentication with JWT
- Secure HTTP headers with Helmet
- Data sanitization against XSS and NoSQL injection
- Gzip compression
- CORS support
- Rate limiting for authentication endpoints
- Comprehensive error handling
- API documentation with Swagger

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/shubham-0819/note-taking-app.git
   cd note-taking-app
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up environment variables:

   Copy the `.env.example` file to `.env` and update the values as needed.

   ```sh
   cp .env.example .env
   ```

## Configuration

The application can be configured using environment variables. The following variables are available:

- `PORT`: Port number (default: 3000)
- `MONGODB_URL`: MongoDB connection URL
- `NODE_ENV`: Environment (development, production, test)
- `JWT_SECRET`: Secret key for JWT
- `JWT_ACCESS_EXPIRATION_MINUTES`: Access token expiration time in minutes
- `JWT_REFRESH_EXPIRATION_DAYS`: Refresh token expiration time in days
- `JWT_RESET_PASSWORD_EXPIRATION_MINUTES`: Reset password token expiration time in minutes
- `JWT_VERIFY_EMAIL_EXPIRATION_MINUTES`: Verify email token expiration time in minutes
- `SMTP_HOST`: SMTP host for email service
- `SMTP_PORT`: SMTP port for email service
- `SMTP_USERNAME`: SMTP username for email service
- `SMTP_PASSWORD`: SMTP password for email service
- `EMAIL_FROM`: Email address for sending emails

## Usage

To start the application in development mode:

```sh
npm run dev
```
