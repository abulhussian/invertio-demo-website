const IndustryTemplate = ({ data }) => {
      return (
            <div className="pt-32 px-10">
                  <h1 className="text-4xl font-bold">{data.label}</h1>

                  <p className="mt-4 text-gray-600">
                        Industry page for {data.slug}
                  </p>
            </div>
      );
};

export default IndustryTemplate;