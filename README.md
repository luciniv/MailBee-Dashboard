# MailBee Dashboard (WIP)

This repository contains the **MailBee Dashboard**, a web interface for the [MailBee Discord bot](https://github.com/luciniv/MailBee).
The dashboard is built with **React + Vite** on the frontend and **Express.js + MySQL** on the backend, with caching by **Valkey**.

Its main purpose is to provide server admins with analytics and management tools for ticketing data created through the bot.

## Status

This project is **in heavy development** and does not yet have a live deployment. Expect frequent changes and breaking updates.


## Tech stack

- **Frontend:** React.js + Vite
- **Backend:** Node.js with Express.js
- **Database:** MySQL 8
- **Cache:** Valkey

## Development setup

1. Clone the repository:
   ```bash
   git clone https://github.com/luciniv/MailBee-Dashboard.git
   cd MailBee-Dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in /backend/src with your credentials:
   ```
   DB_HOST=
   DB_USER=
   DB_PASSWORD=
   DB_DATABASE=

   REDIS_URL=
   ```

4. Run the development servers:

   * Frontend:
     ```bash
     npm run dev
     ```
   * Backend:
     ```bash
     node server.js
     ```

## Features (planned & WIP)

* Discord login with OAuth2 (to check shared servers + permissions)
* Analytics dashboard pulling ticket data from MySQL
* Ticket filtering and search
* Leaderboards for moderator and server activity
* Export options (CSV, JSON)

## Repository structure

```
/client               -> React + Vite frontend
/backend/src          -> Express.js backend
/backend/src/data     -> SQL schema
/client/assets        -> Static resources (icons, logos, etc.)
```

## Contributing

This project is currently maintained as part of the **MailBee bot ecosystem**.
Contributions, suggestions, and bug reports are currently unavailable until the system reaches further progress.

## Contact

For questions, reach out via **Discord** (`luciniv`) or **email** (`hello@luciniv.com`)
