import React from "react";

const TypeWriteEffect = ({
  words,
}: {
  words: { text: string; className: string }[];
}) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1 id="typewriter" className="text-4xl font-bold"></h1>
    </div>
  );
};

export default TypeWriteEffect;
