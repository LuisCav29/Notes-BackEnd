const mongoose = require('mongoose');

if (process.argv.length < 3) {
    console.log('Agrega el password como argumento');
    process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://luisfelipecavazosarias:
${password}@cluster0.iy81f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false);
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean
})

const Note = mongoose.model('Note', noteSchema);

const note = new Note({
    content: 'Browser can execute only Javascript',
    important: true
})

note.save().then(result => {
    console.log('Note saved!');
    mongoose.connection.close();
})
