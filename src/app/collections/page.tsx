import Albums from '@/_components/albums';

export default function CollectionsPage() {

  return (
    <div className="container h-screen w-full max-w-screen-lg mx-auto px-4 py-10 border border-black">
      <h1 className="text-2xl font-medium mb-6">Le Fog Collections</h1>
      <Albums />
    </div>
  );
}
