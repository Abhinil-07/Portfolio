import { motion } from "framer-motion";

const Button1 = ({ tab, activeTab, setActiveTab }) => {
  const isActive = activeTab === tab.id;

  const handleClick = () => {
    setActiveTab(tab.id);
  };

  return (
    <button
      onClick={handleClick}
      className={`${isActive ? "" : "hover:text-white/60"
          } relative rounded-full px-3 py-1.5 text-md font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
      style={{
        WebkitTapHighlightColor: "transparent",
        fontFamily: "'Inter', sans-serif"
      }}
    >
      {isActive && (
        <motion.span
          layoutId="bubble"
          className="absolute inset-0 z-10 bg-white mix-blend-difference"
          style={{ borderRadius: 9999 }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      {tab.label}
    </button>
  );
};

export default Button1;
