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

---
  
# Create Template

### Specify User Data:
![image](https://github.com/Husam-AbuZina/bookManagementApp/assets/109718076/f79b901d-46b7-4680-95fc-bf1ab841899d)

### SpecifyKey-Pair and Security Group:
![image](https://github.com/Husam-AbuZina/bookManagementApp/assets/109718076/f660b900-b6d8-4bc8-ae9c-75f55b6d6840)

---

# Launch Instances through the Template

![image](https://github.com/Husam-AbuZina/bookManagementApp/assets/109718076/b1b3c17c-d844-46d5-928b-d461a2e1ff30)

---

# Launch Target Group

### Create the Target Group named "abuzina-tg"

![image](https://github.com/Husam-AbuZina/bookManagementApp/assets/109718076/82734a27-ab0b-46f5-a32d-fd7f416f4cab)

### Choose the Instances to include inside this Target Group:

![image](https://github.com/Husam-AbuZina/bookManagementApp/assets/109718076/62d351e8-3f3b-4735-881a-94caac225245)

---

# Launch the Load Balancer named "abuzina-lb"

![image](https://github.com/Husam-AbuZina/bookManagementApp/assets/109718076/40ac7e76-8d50-4885-8e13-f0b91fcf93b9)

### Specify the avaliability zones:
![image](https://github.com/Husam-AbuZina/bookManagementApp/assets/109718076/c9c32168-8f0c-4ef1-a1b4-12c201e00ba7)

### Specify Security Group:
![image](https://github.com/Husam-AbuZina/bookManagementApp/assets/109718076/36b52a41-7ba5-4c49-a37f-a6c39187a91d)

---

# Lanuch Auto Scaling Group

### Create Auto Scaling Group named "abuzina-asg" with the template "abuzina-t" :

![image](https://github.com/Husam-AbuZina/bookManagementApp/assets/109718076/999c8385-358e-436a-9913-95888f98f4d0)

### Choose the avaliavility zones:
![image](https://github.com/Husam-AbuZina/bookManagementApp/assets/109718076/054bf157-94ee-43dd-9250-7e9b8bdc8ca0)

### Attaching the Load-Balancer with the Auto Scaling Group :
![image](https://github.com/Husam-AbuZina/bookManagementApp/assets/109718076/b70fbcdd-543c-4251-ba50-d1219761a535)

### Specifying the Auto Scaling Group capacity:
##### Note: that the minimum capacity is 2, to have 1 at least runnig in case of faliure.
![image](https://github.com/Husam-AbuZina/bookManagementApp/assets/109718076/c0cb0e2d-ac77-44a6-b499-f31f5a7df1aa)

### Specifying 60% cpu usage in the  Auto Scaling Group :
![image](https://github.com/Husam-AbuZina/bookManagementApp/assets/109718076/d7d26b77-777e-4b8b-8ce2-139c7538b83c)





