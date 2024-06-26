import icons from "../../utilities/stackIcons.js";

const Stack = () => {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-10">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-all duration-100 ease-in-out cursor-pointer bg-slateBlue shadow-md bg-opacity-10 dark:bg-opacity-40 dark:shadow-white p-4 hover:shadow-lg rounded-lg hover:rotate-3"
            onClick={() =>
              window.open(icon.url, "_blank", "noopener noreferrer")
            }
          >
            <img src={icon.src} alt={icon.name} className="h-12 w-12" />
            <span className="mt-2">{icon.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
