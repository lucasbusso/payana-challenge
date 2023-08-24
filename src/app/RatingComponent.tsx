import { useState } from "react";
import { Answer } from "./interfaces";

export default function RatingComponent({
  value,
  onChange,
  isReadOnly,
}:
  | {
      value: Answer["valoracion"];
      onChange: (value: Answer["valoracion"]) => void;
      isReadOnly?: never;
    }
  | {
      value: Answer["valoracion"];
      isReadOnly: boolean;
      onChange?: never;
    }) {
  const [hoverValue, setHoverValue] = useState<Answer["valoracion"]>(value);

  return (
    <div
      className="text-4xl text-yellow-500 flex justify-center"
      onMouseLeave={() => setHoverValue(value)}
    >
      {"★"
        .repeat(hoverValue || value)
        .padEnd(5, "☆")
        .split("")
        .map((elem, index) => (
          <span
            className={isReadOnly ? "" : "cursor-pointer"}
            onMouseOver={() =>
              !isReadOnly && setHoverValue((index + 1) as Answer["valoracion"])
            }
            onClick={() =>
              !isReadOnly && onChange?.((index + 1) as Answer["valoracion"])
            }
            key={index}
          >
            {elem}
          </span>
        ))}
    </div>
  );
}
