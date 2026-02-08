# Dockerized Full Stack Application

This project is a Dockerized backend application built using Node.js and MySQL, managed using Docker Compose.
It demonstrates how a backend service connects to a MySQL database and exposes REST APIs.
The application is containerized and deployable on AWS EC2.


## Application Flow
1. User accesses the frontend application via browser.
2. Frontend sends a request to the backend REST API.
3. Backend communicates with MySQL database.
4. The backend service connects to a MySQL database and retrieves data using REST APIs.
5. A popup message is shown on the URL confirming that the data has been successfully saved in the MySQL database.
