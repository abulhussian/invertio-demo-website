export default function ServiceTemplate({ data }) {
      return (
            <div className="px-8 py-20">
                  <h1 className="text-4xl font-bold">{data.title}</h1>
                  <p className="mt-4 text-gray-600">{data.description}</p>
            </div>
      );
}