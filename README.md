## Summary
This project demonstrates a Dockerized full stack application deployed on AWS EC2.
An AWS Application Load Balancer is used as the entry point to route client requests to the backend service.
The backend application communicates with a MySQL database using REST APIs, and users receive a confirmation popup after successful data storage.



Application Flow

1. User accesses the frontend application via browser.
2. The request first reaches the AWS Application Load Balancer.
3. The Load Balancer forwards the request to the backend application running on an EC2 instance.
4. The backend service processes the request and communicates with the MySQL database.
5. The backend retrieves or stores data in MySQL using REST APIs.
6. A popup message is displayed to confirm that the data has been successfully saved in the MySQL database.
