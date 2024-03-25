import express from "express";
import cors from "cors";
import {PrismaClient} from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get("/api/notes", async (req, res) => {
    const notes = await prisma.note.findMany();
    res.json(notes);
});

app.post("/api/notes", async (req, res) => {
    const {tittle, content} = req.body;

    if (!tittle || !content) {
        return res
        .status(400)
        .json({message: "Tittle and content are required"});
    }

    try {
        const note = await prisma.note.create({
            data : { tittle, content }
        });
        res.json(note);
    } catch (error) {
        res
            .status(500)
            .send("An error occurred while creating the note");
    }
});

app.put("/api/notes/:id", async (req, res) => {
    const {tittle, content} = req.body;
    const id = parseInt(req.params.id);

    if(!tittle || !content) {
        return res
            .status(400)
            .send("Tittle and content are required");
    }

    if (!id ||isNaN(id)) {
        return res 
            .status(400)
            .send("Id is required and must be a valid");
    }

    try {
        const updatedNote = await prisma.note.update({
            where: {id},
            data: {tittle, content}
        });
        res.json(updatedNote);
    } catch (error) {
        res
            .status(500)
            .send("An error occurred while updating the note");
    }
})

app.delete("/api/notes/:id", async (req, res) => {
    const id = parseInt(req.params.id);

    if (!id || isNaN(id)) {
        return res
            .status(400)
            .send("Id is required and must be a valid");
    }

    try {
        await prisma.note.delete({
            where: {id}
        });
        res.status(204).send(); 
    } catch (error) {
        res
            .status(500)
            .send("An error occurred while deleting the note");
    }
});

app.listen(5000, () => {
    console.log("Server has started on port 5000");
})