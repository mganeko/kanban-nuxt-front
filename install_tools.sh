#!/bin/sh
# install toosl on Ubuntu 20.04

apt update
apt install -y nodejs
apt install -y npm


# node.js must be installed
npm install

# env
cp setup_env.sh.tmpl setup_env.sh


