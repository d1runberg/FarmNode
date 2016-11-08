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

1. [Intel Edison](#) - used for central computing
2. [Edison Console Block](#) - access for initial development and setup / Hard link into the Edison console
3. [Edison Battery Block](#) - Battery / Power
4. [Edison Arduino Block](#) - Slave Arduino for easier I/0 Control with the Edison
5. [BME280 Barometric Pressure Sensor](#) - Barometeric Pressure, Alititude, Temperature and Humidity Sensor
6. [GPS Module](#) - GPS...Location and time
7. [Edison Hardware Pack](#) - Nuts and bolts to hold the Edison stack together
8. [Sunny Buddy Solar Charger](#) - Solar charing circuit
9. [LiPo Battery](#) - Its a battery
10. [Solar Pannel](#) - Capture the sun's rays!
11. [Wire](#)
12. [External Antenna](#) - Broadcasting the wifi AP outside of the enclosure
13. [U.FL Antenna Extension](#) - Get the antenna connection to outside the enclosure

[SparkFun Wishlist](http://sfe.io/w132177)

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
3. [Edison Base Block](#)
3. [OTG Cable](#)
4. [USB Mass Storage](#)

[SparkFun Wishlist](http://sfe.io/w132809)

##### Construction Hardware (Home Depot)

1. [Single Gange Outdoor Box](#)
2. [Single Gang Weather proof face plate](#)

##### Construction Tools

1. [Drill](#)
2. [_ _" Drill bit](#)
3. [Phillips Screw Driver or Bit for Drill](#)
4. [Needle Nose Plier](#)

## Hardware Assembly

### Electronics Assembly Instructions (Kernel)

### Enclosure Assembly Instructions (Kernel)

### Electronics Assembly Instructions (Harvester)

### Enclosure Assembly Instructions (Harvester)

## Software Installation and Setup

### Installing Firmata on the Arduino Block
The Edison uses/communicates with the Arduino Block through a communication protocal called [Firmata](#), which is pretty prevelant in the hardware world. It allows a "Master" computer to control and read a "slave" microcontroller. Firmata needs to be installed on the Arudino block before we can use the block with the Edison. Here are the installation instructions for getting StandardFirmataPlus onto the Arduino Block. (Standard firmata plus has access to certain subsets of hardware control that we need to communicate with the GPS)

1. Open StandardFirmataPlus from Arduino
Open up the Arduino IDE and navigate to __File>Examples>Firmata>StandardFirmataPus

2. Hook up the FTDI Breakout 
Using a USB to mini USB cable Hookup the FTDI breakout to your computer.

3. Select Board and Port
The Arduino Block is the same as an Arduino Pro-Mini. From the Tools menu in Arduino, set the board by selecting __Tools> Board...> Arduino Pro/Promini

Then set your port by selecting __Tools> Port> COM##__. You want to select the highest numbered COM port that shows up

4. Plugin FTDI into Arduino Block
Isert a set of X male pins into the FTDI as shown in the image 

** Insert Image here ** 

Next insert the pins and FTDI into the FTDI header into the Arduino Block as shown below. Make sure that you are lining the FTDI pins up with the header pins so that the names match! Make sure that the pins are in constant contact by lightly leveraging the pins against the sides of the vias (holes) in the circuit board.

** Insert Imager Here **

5. Upload Firmata
Click the Upload button. Once the Arduino sketch has compiled it should upload and the red and yellow leds on the FTDI should blink rapidly. You should also see the Arduino block LED blink a bit as well. When the upload is complete you can remove the FTDI and the Block is ready to use with the Edison. You will no longer need the Arduino IDE!

### Setting up the Intel Edison

### Installing FarmNode

The FarmNode software can be installed through NPM on your Edison. To install FarmNode type the following.

`npm install farmNode -g`

This command installs farmNode globally which means that you can access its command line command from anywhere on your edison.

... more!

**Note:** What can be scripted and ran as a command vs instruct users to do mannually?

#### FarmNode Command Line Tool (Future Development)
The farmNode Command Line tool would allow for ease of installation, setup and update for the FarmNode software. Example uses would be as follows:

`farmNode enableAP` - command to enable hostapd
`farmNode disableAP` - command to disable hostapd
`farmNode name <name>` - name the Kernel / harvester
`farmNode test` - blinks Arduino Block LED for 10 seconds
`farmNode setup` - command line interface to set logging intervals, etc
`farmNode view` - prints a list of logs
__more...__


### Configuring HostAPD

Host APD is a software package that comes natively on the Edison and enables you to turn the Edison into a WiFi AP. You control HostAPD through the command line tool called `systemctl` . 

To enable HostAPD on your edison type the following command. 

`systemctl hostapd enable`

The console will return the following information:

```
info to copy and paste from the console
```

To disable HostAPD you can type the following:

`systemctl hostapd disable`

Once you have everything setup you shouldn't need to diable hostapd unless you are connecting your Kernel to the web for software updates / development. In that case you will need to disable HostAPD and then reconfigure your edisons wifi to connect your home/ business wifi by typing the following:

```
systemctl hostapd disable;
configuure_edison --wifi
```
You will then use the edisons configure tool to search for a wifi address and connect to it to gain access to the internet again. When you are done with your connection you can re-enable hostapd.



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


