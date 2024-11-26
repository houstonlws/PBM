# Print Bill Master (PBM)

Print Bill Master is a comprehensive Printer Billing and Management Application designed to streamline the management of printer usage and billing information across multiple departments. The application offers tools for tracking metrics, submitting maintenance requests, managing users and departments, and generating detailed billing records.

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed on your machine 

- [Java Verison 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html) or above installed on your machine

## Quick Start Guide

To begin, be sure that Docker Desktop is installed and running.

### Clone the Repository

Executing the following command will clone the repository to your local machine and initialize the submodules required for the project.

`git clone git@github.com:houstonlws/PBM.git`  
`cd PBM`  
`git submodule update --init`

### Build the Backend

The appication is deployed using Docker Compose. For the deploys to be successful, the backend must be built first.

Navigate to the backend directory `PBM-Backend` and open the .env file. Update the following variables with your own values:

- `SPRING_DATASOURCE_USERNAME`: Your database username
- `SPRING_DATASOURCE_PASSWORD`: Your database password
- `REFRESH_TOKEN_SECRET`: A secret key for generating refresh tokens

>**Note:** To generate a refresh token secret, you can use the following command: `openssl rand -hex 32`

Now, build the backend using the following command:  

`./gradlew build`

### Configure the Database

The application uses a MySQL database. You can configure the database connection by updating the `.env` file located in the `PBM-Database` directory. Modify the following variables to match your database configuration:

- `MYSQL_USER`: Should match `SPRING_DATASOURCE_USERNAME`
- `MYSQL_PASSWORD`: Should match `SPRING_DATASOURCE_PASSWORD`

### Run the Application

Now that both the backend and database have been built, you can run the application using Docker Compose. From the root directory of the project, execute the following command:  

`docker-compose up --build`

The application will be available at `http://localhost:3000`.

To close the application, press `Ctrl + C` in the terminal where the Docker Compose command is running. To stop and remove the containers, networks, and volumes, use the following command:  

`docker-compose down`