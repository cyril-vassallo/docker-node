#!/bin/bash

# while true; do

# read -p "Do you want to proceed? (yes/no) " yn
# case $yn in
#     [yY] ) echo Installation Started;
#         break;;
#     [nN] ) echo Intallation Aborted;
#         exit;;
#     * ) echo Invalid response;;

# esac

# done

npm install
npm run start

date=$(date)
echo "$date !" >> install.log
echo  "Installation sucess!" >> install.log

