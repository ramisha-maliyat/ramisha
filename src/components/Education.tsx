export default function Education() {
  return (
    <section id="education" className="bg-black text-white py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Education
      </h2>

      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* University */}
        <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800">
          <h3 className="text-xl font-semibold">
            Bachelor of Science in Computer Science and Engineering
          </h3>
          <p className="text-gray-400 mt-1">
            Ahsanullah University of Science and Technology
          </p>
          <p className="text-gray-500 mt-1">
            CGPA: 3.349
          </p>
          <p className="text-gray-500 mt-1">
            2021 – 2025
          </p>
        </div>

        {/* HSC */}
        <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800">
          <h3 className="text-xl font-semibold">
            Higher Secondary Certificate (HSC)
          </h3>
          <p className="text-gray-400 mt-1">
            Viqarunnisa Noon School and College, Dhaka
          </p>
          <p className="text-gray-500 mt-1">
            GPA: 5.00 (2020)
          </p>
        </div>

        {/* SSC */}
        <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800">
          <h3 className="text-xl font-semibold">
            Secondary School Certificate (SSC)
          </h3>
          <p className="text-gray-400 mt-1">
            Viqarunnisa Noon School and College, Dhaka
          </p>
          <p className="text-gray-500 mt-1">
            GPA: 5.00 (2018)
          </p>
        </div>

      </div>
    </section>
  );
}