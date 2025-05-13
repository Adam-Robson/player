class Contact {
  constructor({ firstName, lastName, email, message }) {
    if ([firstName, lastName, email, message].some((field) => !field?.trim())) {
      throw new Error("All fields are required");
    }

    this.firstName = firstName.trim();
    this.lastName = lastName.trim();
    this.email = email.trim().toLowerCase();
    this.message = message.trim();
  }

  async save(connection) {
    await connection.beginTransaction();
    try {
      const [existing] = await connection.execute(
        `SELECT id FROM contacts WHERE email = ?`,
        [this.email]
      );

      if (existing.length > 0) {
        throw new Error("Email already exists");
      }

      const [contactRes] = await connection.execute(
        `INSERT INTO contacts (first_name, last_name, email) VALUES (?, ?, ?)`,
        [this.firstName, this.lastName, this.email]
      );

      const contactId = contactRes.insertId;

      await connection.execute(
        `INSERT INTO messages (contact_id, message) VALUES (?, ?)`,
        [contactId, this.message]
      );

      await connection.commit();
      return contactId;
    } catch (err) {
      await connection.rollback();
      throw err;
    } finally {
      connection.release();
    }
  }
}

module.exports = Contact;
