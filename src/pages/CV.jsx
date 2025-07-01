// src/pages/CV.jsx


export const CV = () => {
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">My CV</h1>
      <iframe
        src="/david-cv.pdf"
        title="David's CV"
        className="w-full h-[90vh] border rounded"
      />
    </div>
  );
};