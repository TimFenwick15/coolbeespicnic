#!/bin/bash
./../../../cygdrive/c/Program\ Files/MongoDB/Server/3.2/bin/mongod.exe >> db.log &
node expindex.js >> server.log &
./dbInit.js >> populate.log &
