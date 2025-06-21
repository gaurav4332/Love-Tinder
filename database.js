const { MongoClient } = require("mongodb")

// Connection URL
const url = 

const client = new MongoClient(url)

//Database Name 

const dbName = "devTinder";

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log("Connected Successfully to the server")
    const db = client.db(dbName);
    const collection = db.collection('users');

    // the following code examples can be pasted here...

    const data = {
        firstName: "Ayushi",
        lastName: 'Love',
        emailId: 'Love@gmail.com',
        password: 'love@01',
        age: 18,
        gender: 'female',
    }

    // const insertResult = await collection.insertMany([data]);
    // console.log('Inserted documents =>', insertResult);

    // const findResult = await collection.find({}).toArray();
    // console.log('Found documents =>', findResult);

    // const  countResult = await collection.countDocuments({})
    // console.log("all document count is ",countResult)
    // const result = await collection.find({firstName:'Ayushi'}).toArray()
    // console.log(result)

    // const updateResult = await collection.updateOne({ firstName: 'Ayushi', }, { $set: {  firstName: 'Ayushiiiiiiiiiiiiiiii', } });
    // console.log('Updated documents =>', updateResult);

    const deleteResult = await collection.deleteMany({ firstName: 'Ayushiiiiiiiiiiiiiiii' });
    console.log('Deleted documents =>', deleteResult);

    return 'done.';

}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());