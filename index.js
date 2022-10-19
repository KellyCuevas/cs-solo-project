const { MongoClient } = require("mongodb");

const uri = 'mongodb+srv://kcuevas:corkboardwine@cluster0.vd73340.mongodb.net/?retryWrites=true&w=majority';
//sample file to connect to sample data in db
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);