
export default function MdSection() {
  const products = ['유니폼', '티셔츠', '인형'];

  return (
    <section className="bg-gray-900 text-white py-8 text-center">
      <h3 className="text-2xl font-bold mb-6">MD</h3>
      <div className="flex justify-center space-x-6">
        {products.map((item, index) => (
          <div key={index} className="bg-gray-800 px-4 py-6 rounded-lg w-32">
            <div className="h-20 bg-gray-700 mb-2"></div>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
