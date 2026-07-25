const SectionHeading = ({
  tag,
  title,
  italicWord,
}) => {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.18em] text-[#c8a97a] mb-3">
        {tag}
      </p>

      <h2
        className="font-serif text-4xl md:text-5xl leading-tight text-[#1a1a18]"
        style={{ fontFamily: "Playfair Display" }}
      >
        {title} <em>{italicWord}</em>
      </h2>
    </div>
  );
};

export default SectionHeading;