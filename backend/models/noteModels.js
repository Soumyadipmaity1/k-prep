const mongoose = require('mongoose');
const { Schema } = mongoose;

const SubjectSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    subjectFullName: {
        type: String,
        required: true,
    },
    sortName: {
        type: String,
        required: true,
    },
    credit: {
        type: Number,
        required: true,
    },
    subCode: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    semester: {
        type: String,
        required: true,
    },
    pdfLine: {
        type: String,
        required: true,
    },
});


const noteModels = mongoose.model('Subjects', SubjectSchema);


module.exports = noteModels;

