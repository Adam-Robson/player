const contactService = require("../services/contactService");

async function handleContactSubmission(req, res) {
  try {
    const contactId = await contactService.processContactForm(req.body);
    res.status(200).json({ message: "Contact saved", contactId });
  } catch (err) {
    const status = err.message === "Email already exists" ? 400 : 500;
    res.status(status).json({ error: err.message });
  }
}

module.exports = { handleContactSubmission };
