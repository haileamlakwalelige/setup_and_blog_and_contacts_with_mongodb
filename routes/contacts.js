import express from "express";
import Contacts from "../models/Contact.js";

const router = express.Router();

// Create a new Contact
router.post("/", async (req, res) => {
    try {
        const newContact = new Contacts(req.body);
        const savedContact = await newContact.save();
        res.status(201).json(savedContact); // Respond with saved contact
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a Contact by ID
router.put("/:id", async (req, res) => {
    try {
        const updatedContact = await Contacts.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // Return updated document
        );
        res.status(200).json(updatedContact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a Contact by ID
router.delete("/:id", async (req, res) => {
    try {
        const deletedContact = await Contacts.findByIdAndDelete(req.params.id);
        if (!deletedContact) {
            return res.status(404).json({ message: "Contact not found" });
        }
        res.status(200).json({ message: "Contact deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a single Contact by ID
router.get("/:id", async (req, res) => {
    try {
        const contact = await Contacts.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: "Contact not found" });
        }
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all Contacts
router.get("/", async (req, res) => {
    try {
        const contacts = await Contacts.find();
        res.status(200).json(contacts); // Fixed variable name
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
