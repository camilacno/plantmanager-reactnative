<h1 align="center">  
<img alt="Plant Manager" 
src="https://github.com/camilacno/nlw5-reactnative/blob/master/src/assets/ReadME/logotype.png?raw=true" width="300px"> 
</h1>

<br />

<p align="center">
  <img alt="ReactNative" 
src="https://img.shields.io/badge/react-blue?labelColor=blue&logo=react&logoColor=white"> 
  <img alt="Typescript" 
src="https://img.shields.io/badge/typescript-blue?labelColor=blue&logo=typescript&logoColor=white"> 
 <img alt="Expo" 
src="https://img.shields.io/badge/expo-black?labelColor=whit&logo=expo&logoColor=white"> 
  <img alt="Git" 
src="https://img.shields.io/badge/git-grey?labelColor=grey&logo=git&logoColor=white"> 
  
  <p align="center">	
    <a href="https://www.linkedin.com/in/camilacno" target="_blank"> 
    <img src="https://img.shields.io/badge/-camilacno-007ACC?logo=linkedin&logoColor=white&labelColor=007ACC" alt="Developer LinkedIn" />
  </p>
</p>

<h4 align="center">
 <a href="#about-the-project">About the project</a> •
 <a href="#tech-stack">Tech Stack</a> •
 <a href="#current-funcionalities">Current funcionalities</a> •
 <a href="#current-design">Current Design</a> • 
 <a href="#how-to-run-locally">How to run locally</a> • 

<h4>

<br />

## About the project

App developed using React Native, Expo and Typescript. Allows the user to save plants and be reminded through notifications when to take care of it. 

<br />

## Tech Stack
The following tools were used in the construction of the project:

-   **[Expo](https://expo.io/)**
-   **[React Native](https://reactnative.dev/)**
-   **[React Navigation](https://reactnavigation.org/)**
-   **[React Native SVG](https://github.com/react-native-community/react-native-svg)**
-   **[React Native Async Storage](https://github.com/react-native-async-storage/async-storage/)**
-   **[Axios](https://github.com/axios/axios)**
-   **[Date FNS](https://date-fns.org//)**

See the file [package.json](https://github.com/camilacno/nlw5-reactnative/blob/master/package.json) for more detailed information. 

<br />

## Current funcionalities

- See plants ideal for each environment
- Save plants to be reminded
- Pick time to be reminded, for each plant
- Notification to user when it's time to take care of one of the saved plants
- Delete plants
- Data persisted locally on the device

<br />

## Current Design

[Figma Project](<https://www.figma.com/file/DXO9MDVCANwB6KWFBuaIhJ/PlantManager?node-id=0%3A1>)

<h1 align="center">  
<img alt="Telas" title="#Telas" src="https://github.com/camilacno/nlw5-reactnative/blob/master/src/assets/ReadME/screens.png?raw=true" width="100%" />  
</h1>

<br />

## How to run locally

#### Repo clone

```bash
$ git clone https://github.com/camilacno/nlw5-reactnative.git
```

#### Install dependencies using `yarn`.

```bash
$ yarn
```

#### Confirure your ip address as the baseURL in your api file - ./src/services/api.


#### Run the file used as database using json-server.

```bash
$ json-server ./src/services/server.json --host <your Ip address> --port 3333 --delay 700
```

#### Run the application

```
$ expo start
```

Run the application using the option of your choice. 

<br />


