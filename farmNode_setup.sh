#!/bin/bash
# A bash script file that takes care of all of the setup on an edison for HostAPD, dnsmasq, etc.

# disable wpa supplicant
systemctl disable wpa_supplicant;

# swap existing wpa_supplicant.conf for one in farmNode
cp -f [file location in repo] [new location on edison];

echo 'Setting AP name and password set...'; 

# copy the farmNode service file to services directory and set as a service

cp -f [file location in repo] /home/root/lib/systemd/system;
chmod 644 /lib/systemd/system/farmNode.service;
chown root:root /lib/systemd/system/farmNode.service;
systemctl daemon-reload;

echo 'Moving service file to Edison...';

systemctl enable farmNode;
systemctl start farmNode;

echo 'Starting farmNode as a service...';

# enable hostapd
systemctl enable hostapd;

echo 'Enabling AP...';

echo 'Setup complete!';

# Add --> CAPTIVE PORTAL STUFF!!!!!
