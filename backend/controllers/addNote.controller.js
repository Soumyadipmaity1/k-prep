const Note = require("../models/noteModels");


exports.addNote = async (req, res) => {
    // console.log("Add Note request received");

    try {
        // console.log(req.body)
        const { title, subjectFullName, sortName, credit, subCode, year, semester, pdfLine } = req.body;


        if (!title || !subjectFullName || !sortName || !credit || !subCode || !year || !semester || !pdfLine) {
            return res.status(400).json({ message: "All fields are required." });
        }


        const newNote = await Note.create({ title, subjectFullName, sortName, credit, subCode, year, semester, pdfLine });


        // console.log(newNote);


        return res.status(200).json({ message: "Note saved successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

// Function to get notes by year
exports.getNote = async (req, res) => {
    try {
        console.log("Calling getNote")
        const { year } = req.params;

        console.log(year)
        const notes = await Note.find({ year });

        if (notes && notes.length > 0) {
            return res.status(200).json({ notes });
        } else {
            return res.status(404).json({ message: "No notes found for the specified year" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
