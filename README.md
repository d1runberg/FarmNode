# FarmNode
Hardware and software project that is used to collect, log and display agricultural data.

## Description

### Kernels
Kernels are small battery powered / solar charged sensor nodes that are placed in a remote location such as a farmers field, strapped to a cherry tree or placed in a chicken coop. A Kernel consists of an [Intel Edison](#) and supporting hardware for the Edison to read sensors and store their data. 

The Kernel is programmed uising [Node.js](https://nodejs.org) and [Johnny-Five](https://johnny-five.io) a framework for integrating sensors and actuators with JavaScript. 

The Kernel broadcasts its own [WiFi Access Point](https://en.wikipedia.org/wiki/Wireless_access_point) where a user can connect to it with a personal device (phone, ipad or laptop) and navigate a local website that the Kernel hosts. This site has a number of different options in terms of interacting with the data that the Kernel has collected. 

The Kernel system is designed to be scaleable to a farmers / scientists needs and designed to be self suficient through being super low power and leveraging solar battery charging technology. There is no limit on the number of Kernels that can be deployed in this system beyond expense. 

### Harvesters (Secondary Development)
Harvesters are similar to Kernels, but do not have any onboard sensors or are solar powered. The Harvester essentially is searching for a Kernels access point and when it finds on it connects to it and downloads its most current log of data. It then deletes that log from the Kernel and creates a new one. Once the AP is no longer in range the Harvester looks for another one to connect to. 

When a Harvester returns "Home" (Finds its WiFi AP at the barn or in the office) it connects to the internet and uploads all of the logs that it has collected to Google Drive. 


## Hardware Specifications
All of the hardware for both a Kernel and Harvest should consist of off the shelf hardware found from a hardware store and minimal hardware from SparkFun.

### Bill of Materials

#### Kernel BOM
##### Electronics Hardware (SparkFun)

1. [Intel Edison](#)
2. [Edison Battery Block](#)
3. [Edison Arduino Block](#)
4. [BME280 Barometric Pressure Sensor](#)
5. [GPS Module](#)
6. [Edison Hardware Pack](#)
7. [Sunny Buddy Solar Charger](#)
8. [LiPo Battery](#)
9. [Solar Pannel](#)
10. [Wire](#)
11. [External Antenna](#)
12. [U.FL Antenna Extension](#)

##### Construction Hardware (Home Depot)

1. [Double Gang outdoor box](#)
2. [Weather proof double gang face plate](#)

##### Construction Tools

1. [Drill](#)
2. [_ _" Drill bit](#)
3. [_ _" Drill bit](#)
4. [Construction Adhesive](#)
5. [Phillips Screw Driver or Bit for Drill](#)
6. [Needle Nose Plier](#)

#### Harvester BOM
##### Electronics Hardware (SparkFun)

1. [Intel Edison](#)
2. [Edison Battery Block](#)
3. [OTG Cable](#)
4. [USB Mass Storage](#)

##### Construction Hardware (Home Depot)

1. [Single Gange Outdoor Box](#)
2. [Single Gang Weather proof face plate](#)

##### Construction Tools

1. [Drill](#)
2. [_ _" Drill bit](#)
3. [Phillips Screw Driver or Bit for Drill](#)
4. [Needle Nose Plier](#)

### Electronics Assembly Instructions (Kernel)

### Enclosure Assembly Instructions

### Electronics Assembly Instructions (Harvester)

### Enclosure Assembly Instructions

## Software Specifications

### Setting up the Intel Edison

### Installing FarmNode

### Configuring HostAPD

### Adding FarmNode as a Service (Starts on reboot)

## Interaction / Using a Kernel

### Site tree

#### Home
It's where your heart is! A menu page for selecting other pages / functions.  

#### History
The history page shows the most current and live Log file in its entirity as a raw webpage. 

#### Download
Not a page but a button to manually downloads the current log as a csv file. 

#### Delete 
Opens a page with a warning that you are about to delete your current log and a button to confirm

#### Dashboard 
The dashboard page is a display of data that is live and updates automatically using web sockets / socket.io.  

#### Logs (Later Feature)
List of all logs currently stored on the Kernel. In the future you should be able to navigate, download, view and delete them.

#### Setup (Later Feature)
Setup is the page where you will be able to configure the Kernel through a form based interface by giving the Kernel a name, etc. 


