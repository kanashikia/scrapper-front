import React, { useState } from "react";

export interface ScrapPayloadFormat {
  url?: string;
  customPath?: string;
}

enum PathFormat {
  ID = "ID",
  Class = "Class",
}

export interface FormFormat extends ScrapPayloadFormat {
  pathFormat?: PathFormat;
}

export const Form = () => {
  const [state, setState] = useState<FormFormat>({
    customPath: "",
    url: "",
    pathFormat: PathFormat.Class,
  });
  const handleSubmit = () => {
    console.log("something");
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const currentTarget = event.currentTarget;
    const value = currentTarget.value;
    setState({
      url: value,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Path to scrap :
        <input type="text" value={state.url} onChange={handleChange} />
      </label>
      <select value={state.pathFormat}>
        <option value={PathFormat.Class}>{PathFormat.Class}</option>
        <option value={PathFormat.ID}>{PathFormat.ID}</option>
      </select>
      <label>
        ID :
        <input type="text" value={state.customPath} onChange={handleChange} />
      </label>
    </form>
  );
};
