# Hanko Next.js example

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Prerequisites:

### If using Hanko Cloud

- Create and configure your Hanko Cloud profile (see the instructions on how to get started with [Hanko Cloud](https://cloud.hanko.io/login) in [Hanko Docs](https://docs.hanko.io/))
- Create a new project to get the Hanko API running.

### If using Hanko Backend

- A running Hanko API (see the instructions on how to run the API from the[ Hanko backend](https://github.com/teamhanko/hanko/blob/main/backend/README.md#from-source)).

### Set up environment variables

Create the `.env` file in the root directory, set up the correct environment variables:

- `DATABASE_URL="file:./dev.db"`: this is the URL to the SQLite database file that will be created inside the `prisma` directory with the name `dev.db`
- `NEXT_PUBLIC_HANKO_API_URL`: this is the URL of the Hanko API, you can find it in your [Hanko Cloud](https://cloud.hanko.io/login) dashboard.

## Getting Started

### 1.Install dependencies

Run `npm install` to install dependencies.

```shell
npm install
```

### 2. Create and seed the database

Run the following command to create your SQLite database file. This also creates the Todo table that is defined in `prisma/schema.prisma`:

```shell
npx prisma migrate dev --name init
```

### 3. Start the app

Run `npm run dev` for a development server.

```shell
npm run dev
```

Now the app is running, navigate to `http://localhost:8888/`. The application will automatically reload if you change any of the source files.
