export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Thanks for reaching out!</h1>
      <p className="text-lg text-gray-600">
        We'll get back to you as soon as we can.
      </p>
      <a href="/" className="mt-6 text-blue-500 underline hover:text-blue-700">
        Return to Home
      </a>
    </main>
  );
}
