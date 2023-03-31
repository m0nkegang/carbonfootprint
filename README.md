# Carbon Footprint
A Chrome Extension that detects Carbon Footprint you left on the internet while Browsing


###

### 🚀 Getting Started 
```
https://github.com/santacodes/carbonfootprint.git
```
Check if all files are in

### ⚙️ Configuration

Go to the Extensions Tab in your Chrome Extensions and Enable Developer Mode 

Then Unload files from the cloned repository

### A Detailed Presentation on Carbon Footprint:
[Presentation regarding here](https://docs.google.com/presentation/d/1lFvxyfAQjaWyZ1-IylMjPH09-B7yv3dOSmIquqX8u_8/edit#slide=id.g1f18d4677c5_2_1339)

### 🕹️ Working

- To find out the total number of emissions done by data uploaded and data downloaded we first retrieved the number of packets through the **chromeapi** and stored them in the local chrome storage. 
- We Parse the JSON Object to get the details of amount of bytes exchanged in specific domains.
- These resources are then passed through a formula to Find out number of emissions and then these are stored in a database through a **classification** method stored in arrays.

- Finally , we Bring out the light to our Extension page through Making a UI for showing Total Emissions and Emission details on the main screen.
- Along with this, **Dashboard** Screen for all Ranking Webistes based off emissions and a detailed information on the amount of resources utilised while browsing. 

### Sample Screenshots

![](./images/1.png) 
![](./images/2.png)

## Team Members/Contributors 
[Santhosh Sundaram](https://github.com/santacodes) - AU, Trichy

[Bharat Naik](https://github.com/Naik-Bharat) - NSUT, New Delhi

[Siddhant Gupta](https://github.com/SidWorks01) - IITR , Roorkee 
