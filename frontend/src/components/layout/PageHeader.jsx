const PageHeader = ({ title, description }) => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>

      {description && (
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      )}
    </div>
  );
};

export default PageHeader;
