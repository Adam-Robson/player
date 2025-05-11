# Le Fog XYZ

This is the official website for **Le Fog**, a minimalist, responsive, and mobile-first web experience featuring an audio collection, about page, and functional contact form.

## 📁 Project Structure

.
├── public/  
├── src/  
├── ├── app/  
|       ├── _components/  
|       ├── _contexts/  
|       ├── _data/  
|       ├── _styles/  
|       ├── _types/  
│       ├── (pages)/  
|       ├── favicon.ico  
|       ├── global.css  
|       └── layout.tsx  
├── .gitignore  
├── eslint.config.mjs  
├── package.json  
├── pnpm-lock.yaml  
├── postcss.config.mjs  
├── README.md  
├── tailwind.config.ts  
└──  tsconfig.json  

## 🚀 Deployment

### Static Frontend

1. Build the frontend with:

```sh
   pnpm build
```

(Generates `/out` folder via `output: 'export'`)

The deployed project uses a Node Backend deployed through cPanel.

## 💬 Contact Form

- POSTs to `https://app.lefog.xyz/contact`
- Saves contact in `contacts` table and message in `messages`
- Sends confirmation email via configured SMTP

## 🛠 Environment Variables

Backend (`.env`):

DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_pass
DB_NAME=your_db_name
SMTP_HOST=mail.yourdomain.com
SMTP_USER=your_email
SMTP_PASS=your_email_password
