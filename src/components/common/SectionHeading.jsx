const SectionHeading = ({
  tag,
  title,
  italicWord,
}) => {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.18em] text-accent mb-3">
        {tag}
      </p>

      <h2
        className="font-serif text-4xl md:text-5xl leading-tight text-dark"
      >
        {title} <em>{italicWord}</em>
      </h2>
    </div>
  );
};

export default SectionHeading;