const Toolbar = ({ left, right }) => {
  return (
    <div className="mb-4 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">{left}</div>

      <div className="flex items-center gap-3">{right}</div>
    </div>
  );
};

export default Toolbar;
