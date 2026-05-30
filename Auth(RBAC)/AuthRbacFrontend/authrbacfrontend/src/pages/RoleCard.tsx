import  {ReactNode}  from "react";

interface RoleCardProps {
  title: string;
  icon: ReactNode;
  badge: string;
  buttonText: string;
  onClick: () => void;

  open: boolean;
  content: string;
  error: string;

  description: string;

  onClose: () => void;
}

function RoleCard({
  title,
  icon,
  badge,
  buttonText,
  onClick,
  open,
  content,
  error,
  description,
  onClose,
}: RoleCardProps) {
  return (
    <div
      className="
        bg-white/10
        backdrop-blur-xl
        border border-white/20
        rounded-3xl
        p-6
        hover:scale-105
        transition-all
        duration-300
        shadow-xl
      "
    >
      <div className="text-6xl mb-4 flex justify-center">{icon}</div>

      <h2 className="text-white text-2xl font-bold text-center">
        {title}
      </h2>

      <div className="flex justify-center mt-3">
        <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
          {badge}
        </span>
      </div>

      <button
        onClick={onClick}
        className="
          mt-6
          w-full
          bg-white
          text-black
          py-3
          rounded-xl
          font-semibold
          hover:bg-gray-200
          transition-all
        "
      >
        {buttonText}
      </button>

      {open && (
        <div
          className="
            mt-5
            bg-black/20
            rounded-xl
            p-4
            border
            border-white/20
          "
        >
          {content && (
            <>
              <p className="text-gray-200 mb-4">
                {description}
              </p>

              <div
                className="
                  bg-green-500/20
                  border
                  border-green-400
                  rounded-xl
                  p-4
                  text-white
                "
              >
                ✅ {content}
              </div>
            </>
          )}

          {error && (
            <div
              className="
                bg-red-500/20
                border
                border-red-400
                rounded-xl
                p-4
                text-white
              "
            >
              ❌ {error}
            </div>
          )}

          <button
            onClick={onClose}
            className="
              mt-4
              w-full
              bg-red-500
              hover:bg-red-600
              text-white
              py-2
              rounded-xl
            "
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default RoleCard;