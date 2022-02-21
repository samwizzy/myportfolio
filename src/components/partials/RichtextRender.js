import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { MARKS, INLINES, BLOCKS } from "@contentful/rich-text-types";

function RichtextRender() {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data;
        return (
          <a href={uri} className="underline">
            {children}
          </a>
        );
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2>{children}</h2>;
      },
    },
  };

  return <div></div>;
}

export default RichtextRender;
