<h1 align="center">LensGEO</h1>
<a href="http://3.89.211.251/lensgeo">
    <img src="https://github.com/21Kgold/Geo-lens/screenshot/screenshot.png" alt="LensGEO" title="LensGEO">
</a>
# Description
LensGEO is a project born from a real need in the construction market, specifically in the machinery rental sector. When you rent a machine, you want to have a timely and accurate report on the use of the machine, since the control of fuel consumption is a critical part of the economic success of the project. But the machines with more than 10 years old, do not have this type of sensors. LensGEO consists of sensors installed on each machine, which send data in real time through the network, and these data are displayed in a dashboard that users can access through any browser. 

# Tech-stack
**Front-end**:

| Component                  | Type             | Library               |
|----------------------------|------------------|-----------------------|
| Dashboard                  | Library          | React / Javascript    |
| react graphs               | Library          | React / Nivo          |
| React components           | Library          | React / Material UI   |




**Back-End**:

| Component                  | Type             | Library               |
|----------------------------|------------------|-----------------------|
| Data storage               | Database         | MySQL                 |
| Sensor Listener            | Language         | Python /socket        |
| Console language           | Language         | Python / SqlAlchemy   |
| API                        | Framework        | Python / Flask        |


**Hardware**:
| Tool                        | Model  |
|-----------------------------|--------|
| GPS, status tracker         | VT200L |
| Fuel Sensor Capacitive      |        |
| Sim Card (GPRS conectivity) |        |


# Deployment
 **env_variables**: Shell script that must be run in order to set the environmental variables used
-GEOLENS_MYSQL_USER="geolens_dev": database username

-GEOLENS_MYSQL_PWD="geolens_dev_pwd": database user password

-GEOLENS_MYSQL_HOST="localhost": database host

-GEOLENS_MYSQL_DB="geolens_dev_db": database name

**setup_mysql_dev.sql**: MySQL script that sets the database, user, passsword and privileges 

**sensor_listener.py**: Python script, must be running to recieve the sensor data, configured to listen on port 5222, will print each data packet recieved and parsed and save it to the database

**/api/vi/app.py**: Flask (Gunicorn), must be runing to send data through the api to the front end

**/react-admin/**: front end source folder with its dependencies, must be built with react "npm run build" before deployment to web server  


# Authors
**Claudia Pérez**: 

Chemical engineer, more than 15 years of B2B sales experience

Front-end: design, business logic and software development

Github: <[21Kgold](https://github.com/21Kgold)>

**Mauricio Thomae**:

Civil engineer, more than 20 years of experience in design and construction of residential subdivisions

Back-end: sensor configuration, database, communication protocols and deployment

Github: <[METC1](https://github.com/METC1)>

# Blog Post
-
-

