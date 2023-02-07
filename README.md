# recipes-app

A web app to store and view your recipes

# Build Requirements

There are 2 ways to build this app for development: Vagrant or Docker

They both will run the app, backend, and database and allow you to use them

## **Vagrant**

Legacy option, but still supported

### **Requirements**

-   Python >= 3.5
-   Vagrant
-   Ansible
-   Virtualbox

### **Instructions**

1. _(WSL ONLY)_ install virtualbox_WSL2 plugin

`vagrant plugin install virtualbox_WSL2`

2. _(WSL ONLY)_ make sure vagrant is installed on both windows and WSL
3. run `vagrant up`
4. wait 20 minutes for your vm to start
5. run `vagrant ssh`
6. profit

## **Docker**

Vagrant, but better

Seriously use this instead.

To connect just either go to localhost in a browser or ping localhost:3010/api/recipes for api access

### **Requirements**

-   Docker

### **Instructions**

1. run `docker-compose up`
2. profit
