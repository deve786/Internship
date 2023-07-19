// backend/contactController.js
import ContactModel from '../models/Contact.js'; // Assuming you have a Contact model defined using Mongoose

const contactController = {
  submitContactForm: async (req, res) => {
    try {
      // Get the form data from the request body
      const { name, email, message } = req.body;

      // Create a new Contact document in the database
      const newContact = await ContactModel.create({ name, email, message });

      // Optionally, you can perform additional actions here
      // For example, sending an email to the admin about the form submission

      // Send a response back to the client
      res.status(201).json({ message: "Form submitted successfully!", data: newContact });
    } catch (error) {
      // Handle errors if any occur during the form submission process
      console.error("Error submitting form:", error);
      res.status(500).json({ error: "Something went wrong!" });
    }
  },

  getAllContactSubmissions: async (req, res) => {
    try {
      // Retrieve all contact form submissions from the database
      const allSubmissions = await ContactModel.find();
      res.json(allSubmissions);
    } catch (error) {
      console.error("Error getting contact submissions:", error);
      res.status(500).json({ error: "Something went wrong!" });
    }
  },
};

export default contactController;
