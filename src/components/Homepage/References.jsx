const References = () => {
  const referenceData = [
    {
      id: 1,
      title: "Plothook",
      subtitle: "A platform to find new friends to play tabletop games with!",
      highlights: [
        "Chosen by a jury as a highlight graduation project and presented to over 160 people",
      ],
      challenge: "The challenge was to blabla",
      approach: "The approach was to blabla",
      achievement: "What was achieved",
    },
    {
      id: 2,
      title: "Plothook",
      subtitle: "A platform to find new friends to play tabletop games with!",
      highlights: [
        "Chosen by a jury as a highlight graduation project and presented to over 160 people",
      ],
      challenge: "The challenge was to blabla",
      approach: "The approach was to blabla",
      achievement: "What was achieved",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full px-2 md:w-[80%] mx-auto text-white mt-12">
      <h2>My Projects</h2>
      <h4 className="text-center mb-8">Blablablabla</h4>
      {referenceData.map((e) => (
        <div
          key={e.id}
          className="flex rounded-md  bg-white/10 backdrop-blur-[3px] w-full gap-4 mb-6"
        >
          {e.id % 2 != 0 && <div>Image</div>}
          <div className="flex flex-col px-12 py-8">
            <h3>{e.title}</h3>
            <h4>{e.subtitle}</h4>
            <p>
              {e.highlights.map((hl) => (
                <p>⭐{hl}</p>
              ))}
            </p>
            <a className="underline">Open Details</a>
          </div>
          {e.id % 2 === 0 && <div>Image</div>}
        </div>
      ))}
    </div>
  );
};

export default References;
