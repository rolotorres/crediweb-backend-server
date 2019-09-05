 CREATE TABLE roles(
roleId SERIAL,
roleType VARCHAR(10) NOT NULL,
description VARCHAR(100) NOT NULL,
active BOOLEAN DEFAULT TRUE,
createdAt TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
updatedAt TIMESTAMP WITH TIME ZONE,
CONSTRAINT role_PK PRIMARY KEY (roleId)
);

CREATE TABLE deparments(
dptoId SERIAL,
dptoName VARCHAR(15) NOT NULL,
active BOOLEAN DEFAULT TRUE,
createdAt TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
updatedAt TIMESTAMP WITH TIME ZONE,
CONSTRAINT deparment_PK PRIMARY KEY (dptoId)
);

CREATE TABLE credit_type(
crediTypeId SERIAL,
description VARCHAR(100),
active BOOLEAN DEFAULT TRUE,
createdAt TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
updatedAt TIMESTAMP WITH TIME ZONE,
CONSTRAINT crediType_PK PRIMARY KEY(crediTypeId)
);

CREATE TABLE companies_types(
compTypeId SERIAL,
description VARCHAR(30) NOT NULL,
active BOOLEAN DEFAULT TRUE,
createdAt TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
updatedAt TIMESTAMP WITH TIME ZONE,
CONSTRAINT compType_PK PRIMARY KEY (compTypeId)
);

CREATE TABLE fajas(
fajaId SERIAL,
description char(1) NOT NULL,
createdAt TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
updatedAt TIMESTAMP WITH TIME ZONE,
CONSTRAINT faja_PK PRIMARY KEY (fajaId),
CONSTRAINT desc_CHK CHECK (description ~ '^[^0-9]*$')
);

CREATE TABLE files(
fileId SERIAL,
fileName VARCHAR(50) NOT NULL,
fileData VARCHAR(200) DEFAULT NULL,
active BOOLEAN DEFAULT TRUE,
createdAt TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
updatedAt TIMESTAMP WITH TIME ZONE,
CONSTRAINT file_PK PRIMARY KEY (fileId)
);

CREATE TABLE client_types(
clientTypeId SERIAL,
description VARCHAR(20),
active BOOLEAN DEFAULT TRUE,
createdAt TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
updatedAt TIMESTAMP WITH TIME ZONE,
CONSTRAINT clientType_PK PRIMARY KEY (clientTypeId)
);

CREATE TABLE cities(
cityId SERIAL,
dptoId INTEGER NOT NULL,
description VARCHAR(40),
active BOOLEAN DEFAULT TRUE,
createdAt TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
updatedAt TIMESTAMP WITH TIME ZONE,
CONSTRAINT cityId_PK PRIMARY KEY (cityId),
CONSTRAINT dptoId_FK FOREIGN KEY (dptoId) REFERENCES deparments(dptoId)
);

CREATE TABLE companies_data(
compDataId SERIAL,
compTypeId INTEGER NOT NULL,
ruc VARCHAR(10) NOT NULL,
compName VARCHAR(50) NOT NULL,
representative VARCHAR(70) NOT NULL,
compEmail VARCHAR(50) NOT NULL,
active BOOLEAN DEFAULT TRUE,
createdAt TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
updatedAt TIMESTAMP WITH TIME ZONE,
CONSTRAINT compData_PK PRIMARY KEY(compDataId),
CONSTRAINT compTypeId_FK FOREIGN KEY (compTypeId) REFERENCES companies_types(compTypeId)
);

CREATE TABLE sucursales(
sucursalId SERIAL,
compDataId INTEGER NOT NULL,
cityId INTEGER NOT NULL,
address VARCHAR(100) NOT NULL,
phone VARCHAR(30) NOT NULL,
lat VARCHAR(50) DEFAULT NULL,
lng VARCHAR(50) DEFAULT NULL,
matriz BOOLEAN,
active BOOLEAN DEFAULT TRUE,
createdAt TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
updatedAt TIMESTAMP WITH TIME ZONE,
CONSTRAINT sucursalId_PK PRIMARY KEY (sucursalId),
CONSTRAINT compType_FK FOREIGN KEY (compDataId) REFERENCES companies_data(compDataId),
CONSTRAINT cityId_FK FOREIGN KEY (cityId) REFERENCES cities(cityId)
);

CREATE TABLE client_data(
clientId SERIAL,
cityId INTEGER NOT NULL,
fajaId INTEGER NOT NULL,
clientTypeId INTEGER NOT NULL,
compDataId INTEGER NOT NULL,
homeAddress VARCHAR(100) NOT NULL,
DNI INTEGER NOT NULL,
ruc VARCHAR (10) DEFAULT NULL,
lat VARCHAR(50) DEFAULT NULL,
lng VARCHAR(50) DEFAULT NULL,
createdAt TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
updatedAt TIMESTAMP WITH TIME ZONE,
CONSTRAINT clientId_PK PRIMARY KEY (clientId),
CONSTRAINT cytyId_FK FOREIGN KEY (cityId) REFERENCES cities(cityId),
CONSTRAINT fajaId_FK FOREIGN KEY (fajaId) REFERENCES fajas(fajaId),
CONSTRAINT clientType_FK FOREIGN KEY (clientTypeId) REFERENCES client_types(clientTypeId),
CONSTRAINT comptipe_FK FOREIGN KEY (compDataId) REFERENCES companies_data(compDataId)
);

CREATE TABLE client_work(
cliWorkId SERIAL,
clientId INTEGER NOT NULL,
cityId INTEGER NOT NULL,
workplace VARCHAR(60) NOT NULL,
workAddress VARCHAR(60) NOT NULL,
workPosition VARCHAR(30) NOT NULL,
seniority VARCHAR(5) NOT NULL,
salary INTEGER NOT NULL,
contact VARCHAR(20) NOT NULL,
phone VARCHAR(20) NOT NULL,
lat VARCHAR(50) DEFAULT NULL,
lng VARCHAR(50) DEFAULT NULL,
active BOOLEAN DEFAULT TRUE,
createdAt TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
updatedAt TIMESTAMP WITH TIME ZONE,
CONSTRAINT cliWorkId_PK PRIMARY KEY(cliWorkId),
CONSTRAINT CitiId_FK FOREIGN KEY (cityId) REFERENCES cities(cityId),
CONSTRAINT clientId_FK FOREIGN KEY(clientId) REFERENCES client_data(clientId)
);

CREATE TABLE users(
userId SERIAL,
roleId INTEGER NOT NULL DEFAULT 1,
clientId INTEGER DEFAULT NULL,
sucursalId INTEGER DEFAULT NULL,
userName VARCHAR(45) NOT NULL,
userLastname VARCHAR(45) NOT NULL,
usermail VARCHAR(45) NOT NULL,
alias VARCHAR(10) NOT NULL,
pasword CHAR(90) NOT NULL,
avatar VARCHAR(200) DEFAULT NULL,
active BOOLEAN DEFAULT TRUE,
createdAt TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
updatedAt TIMESTAMP WITH TIME ZONE,
CONSTRAINT userId_PK PRIMARY KEY (userId),
CONSTRAINT roleId_FK FOREIGN KEY (roleId) REFERENCES roles(roleId),
CONSTRAINT clientId_FK FOREIGN KEY (clientId) REFERENCES client_data(clientId),
CONSTRAINT sucId_FK FOREIGN KEY (sucursalId) REFERENCES sucursales(sucursalId),
CONSTRAINT usermail_UC UNIQUE (usermail),
CONSTRAINT alias_UC UNIQUE (alias),
);
