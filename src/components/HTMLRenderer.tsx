import React from "react";

type HtmlRendererProps = {
  body: string;
  className: string;
};

const HtmlRenderer: React.FC<HtmlRendererProps> = ({ body, className }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: body }} className={className} />
  );
};

export default HtmlRenderer;
