import React, { useState } from "react";

interface ErrorInfoComponent {
  message: string;
}

export default function ErrorInfoComponent({ message }: ErrorInfoComponent) {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(message);
  return (
    <>
      {errorMessage && (
        <div>
          {errorMessage}{" "}
          <span
            className="cursor-pointer text-xs"
            onClick={() => setErrorMessage("")}
          >
            [close]
          </span>
        </div>
      )}
    </>
  );
}
