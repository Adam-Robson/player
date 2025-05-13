const pool = require("../utils/db");
const Contact = require("../models/Contact");
const { sendConfirmationEmail } = require("./emailService");

async function processContactForm(payload) {
  const contact = new Contact(payload);
  const connection = await pool.getConnection();
  try {
    const contactId = await contact.save(connection);
    await sendConfirmationEmail(
      contact.firstName,
      contact.lastName,
      contact.email,
      contact.message
    );
    return contactId;
  } catch (err) {
    throw err;
  }
}

module.exports = { processContactForm };
