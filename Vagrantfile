# -*- mode: ruby -*-
# vi: set ft=ruby :
Vagrant.configure("2") do |config|
    config.vm.define "master" do |subconfig|
        subconfig.vm.synced_folder "./", "/vagrant", 
            owner: "vagrant",
            mount_options: ["dmode=775,fmode=600"]
        subconfig.vm.box = "ubuntu/focal64"
        subconfig.vm.hostname = "master"
        subconfig.vm.provider "virtualbox"
        subconfig.vm.network "private_network", ip: "192.168.56.10"

        subconfig.vm.provider "virtualbox" do |v|
            v.name = "my_vm"
            v.memory = 3072
            v.cpus = 2
            v.customize [ "modifyvm", :id, "--uartmode1", "disconnected" ]
          end

        subconfig.vm.provision "ansible" do |a|
            a.verbose = "v"
            a.playbook = "playbook.yaml"
            a.extra_vars = {
                ansible_python_interpreter: "/usr/bin/python3"
            }
        end
    end
end