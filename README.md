# Print Bill Master (PBM)

Print Bill Master is a comprehensive Printer Billing and Management Application designed to streamline the management of printer usage and billing information across multiple departments. The application offers tools for tracking metrics, submitting maintenance requests, managing users and departments, and generating detailed billing records.

## Features

- **Printer Usage and Billing Records:** Tracks and maintains usage and billing information for a large number of printers.
- **Maintenance Requests:** Users can submit maintenance requests, and administrators can update their statuses.
- **Printer and Department Management:** Administrators can add printers, assign them to departments, and manage department details.
- **User Management:** Administrators can add users, modify their privileges, and manage user roles.
- **Customizable Billing Profiles:** Pricing for printer metrics is editable by administrators and can be saved as profiles for streamlined billing.

- **Metrics Visualization:** Graphical representations of total department printer metrics for the current and previous months are available to both administrators and users.

- **Billing History:** Provides a detailed record of a department's billing history, accessible by both administrators and users.

## Getting Started

To set up and run the Print Bill Master application, follow these steps:

### 1. Clone the Main Repository

Clone the main repository, which includes submodules for the frontend, backend, and database:

```bash
git clone --recurse-submodules https://github.com/houstonlws/PBM-Main.git
cd PBM-Main
```

### 2. Initialize and Update Submodules

If the submodules were not cloned properly, initialize and update them manually:

    git submodule init
    git submodule update

The submodules are:

- PBM-Frontend: The React-based frontend application.
- PBM-Backend: The Spring Boot backend service.
- PBM-Database: The MySQL database setup.

### 3. Set Up Each Component

- **PBM-Database**

  1. Navigate to the database directory:

  ```bash
  cd PBM-Database
  ```

  2. Start the MySQL container using Docker Compose:

  ```bash
  docker-compose up -d
  ```

  3. Ensure the database is initialized and running:

  - Host: `localhost`
  - Port: `3307`
  - User: `user`
  - Password: `12345678` (as defined in the `docker-compose.yml`).

- **PBM-Backend**

  1. Navigate to the backend directory:

  ```bash
  cd ../PBM-Backend
  ```

  2. Build and run the Spring Boot application:

  ```bash
  ./gradleW bootRun --console=plain
  ```

  3. Verify the backend is running at `http://localhost:8080`.

- **PBM-Frontend**

  1. Navigate to the frontend directory:

  ```bash
  cd ../PBM-Frontend
  ```

  2. Install dependencies:

  ```bash
  npm install
  ```

  3. Start the React development server:

  ```bash
  npm run dev
  ```

  4. Verify the frontend is accessible at `http://localhost:3000`.

### 4. Access the Application

- Frontend UI: Navigate to `http://localhost:3000`.
- Backend API: Access API endpoints at `http://localhost:8080`.
- Database: Use a MySQL client to verify the database at `localhost:3307`.

## Development Workflow

1. Updating Submodules:

   Pull updates for all submodules when changes are made:

   ```bash
   git submodule update --remote --merge
   ```

2. Testing Changes:

   Frontend tests: `npm run test`

3. Stopping Services:

   Stop Docker containers and servers when done:

   ```bash
   docker-compose down # Stops database
   ```

**Ctrl+C** for React and Spring Boot servers
