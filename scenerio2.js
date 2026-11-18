mongod --replSet rs0 --port 27017 --dbpath C:\data\rs0-1
mongod --replSet rs0 --port 27018 --dbpath C:\data\rs0-2
mongod --replSet rs0 --port 27019 --dbpath C:\data\rs0-3


mongosh --port 27017
rs.initiate({
 _id: "rs0",
 members: [
 { _id: 0, host: "localhost:27017" },
 { _id: 1, host: "localhost:27018" },
 { _id: 2, host: "localhost:27019" }
 ]
})


rs.status()


use bankDB
db.accounts.insertOne(
 { accNo: 1001, holder: "Kumar", balance: 5000 },
 { writeConcern: { w: "majority", j: true, wtimeout: 5000 } }
)


db.getMongo().setReadPref("secondaryPreferred")
db.accounts.find({ accNo: 1001 })

use local
db.oplog.rs.find().sort({ $natural: -1 }).limit(5)


rs.status()
rs.status()
rs.printSecondaryReplicationInfo()
rs.status() 