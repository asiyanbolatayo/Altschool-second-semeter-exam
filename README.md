This file explains all the work done in the project.
The server used in this project is an AWS Linux server, which is available for free. I deployed a Linux server on the AWS server and connected to it using the Termius app. An SSH key was also created during setup to enable secure SSH access to the server from Termius.
The web server used in this deployment is Nginx with a reverse proxy setup. I use Gemini for this part as I was not familiar with the Nginx setup. My previous deployment was with Apache.
A self-signed certificate was used for HTTPS instead of Certbot, which requires a domain name. Also, traffic from HTTP is routed through HTTPS to ensure a secure connection.
Public IP address: https://16.171.177.113/ or http://16.171.177.113/
