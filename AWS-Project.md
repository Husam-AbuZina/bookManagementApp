# AWS Project

### The Goal:

- The app must be deployed in an Auto-Scaling Group behind an Application Load Balancer.
- The app must be managed by systemd.

To Do that, we will need to make:

- Template ( Fill it with  a spicific User Data Bash code for Project Deployment and automation, OR literally any code we want to execute ).
- Making A Security group for our instances security.
- Make a Key Pair just for the intended user to have it and access certain data.
- 2 instances through our Template.
- 1 Target Group for the instances.
- 1 Load Balancer to manage requests for the 2 instances.
- 1 Auto Scaling Group to maintain the performance of the 2 instances.


  
