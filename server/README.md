# GraphQL server

This GraphQL server queries an ATP database directly

## Prerequisits

Go to [Oracle technology Network|http://www.oracle.com/technetwork/topics/intel-macsoft-096467.html] and download Oracle Instant Client

On MacOS:
```
mkdir -p /opt/oracle
unzip instantclient-basiclite-macos.x64-18.1.0.0.0.zip
```
Then
```
mkdir ~/lib
ln -s instantclient_12_2/libclntsh.dylib ~/lib/
```
