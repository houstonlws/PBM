---
title: Getting Started
template: docs
nav_order: 2
---

# **Getting Started**

## **Prerequisites**

Before running the Print Bill Master application, ensure the following tools and software are installed and configured on your system:

- **Node.js and npm:** - [How to Install Node.js and npm](https://nodejs.org/en/download)  
  Required for running the frontend application.
- **Docker Desktop:** - [Install Docker Desktop](https://docs.docker.com/get-docker/)  
  Used to manage and run the MySQL database in a Docker container.
- **Java 17:** - [Install Java 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)  
  Necessary to run the Spring Boot backend service.
- **Git and Git Bash:** - [Install Git and Git Bash](https://git-scm.com/downloads)  
  Required for version control and managing repositories.
- **Database Connection Software (Optional):** - [Download DBeaver](https://dbeaver.io/download/)  
  Tools like DBeaver are useful for viewing and managing the database.

## **Setup Instructions**

Follow these steps to set up the Print Bill Master application:

### **1. Clone the Main Project and Submodules:**

Use the following commands to clone the main repository, including its submodules:

```bash
git clone --recurse-submodules https://github.com/houstonlws/PBM-Main.git
cd PBM-Main
git submodule init
git submodule update
```

This will clone the main project and initialize the submodules for the frontend, backend, and database.The Print Bill Master application is organized into three distinct submodules, each serving a specific purpose to deliver a seamless experience:

- **PBM-Frontend**: A React-based application that provides an intuitive and interactive user interface.
- **PBM-Backend**: A robust backend service built with Spring Boot to handle business logic and API integrations.
- **PBM-Database**: A Docker container housing the MySQL database, ensuring secure and efficient data management.

### **2. Start the Database Container**

Navigate to the database submodule and start the MySQL database using Docker:

```bash
cd PBM-Database
docker-compose up -d
```

The `docker-compose.yml` file can be customized to set a username and password for the database. However, **do not change the database name** at this time to ensure compatibility with the application.

### **3. Ensure Database Accessibility**

To verify that the database is accessible, use a database client like DBeaver with the following connection details:

- **Host**: `localhost`
- **Port**: `3307`
- **User**: `user`
- **Password**: `12345678` (as defined in the `docker-compose.yml`)

**Note**: Ensure you are using the **MySQL** driver for the connection, and you may need to set `allowPublicKeyRetrieval=true` in the driver properties when creating a new connection in DBeaver to avoid connection issues.

### **4. Start the Backend Application**

Open a new terminal window, navigate to the **PBM-Backend** directory, and start the Spring Boot application using Gradle:

```bash
cd ../PBM-Backend
./gradleW bootRun --console=plain
```

Once the backend is up and running, you can access it at:  
[http://localhost:8080](http://localhost:8080)

### **5. Start the Frontend Application**

Start by opening a new terminal window, then navigate to the **PBM-Frontend** directory, install the necessary dependencies, and run the application:

```bash
cd ../PBM-Frontend
npm install
npm run dev
```

Once the frontend is up and running, you can verify it by accessing it at:  
[http://localhost:3000](http://localhost:3000)

## **Development Workflow**

### **Updating Submodules:**

Pull updates for all submodules when changes are made:

```bash
git submodule update --remote --merge
```

### **Testing Changes:**

To run frontend tests, use:

```bash
npm run test
```

### **Stopping Services:**

Stop Docker containers and servers when done:

```bash
docker-compose down  # Stops the database container
```

For React and Spring Boot servers, press **Ctrl+C** to stop them.
