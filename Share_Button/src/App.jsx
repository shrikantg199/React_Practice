import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";

const ShareButtons = ({ url, title, description }) => {
  return (
    <div>
      <FacebookShareButton
        url={url}
        quote={`${title} - ${description}`}
        hashtag="#my-amazing-content"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton
        url={url}
        title={`${title} - ${description}`}
        hashtags={["my-amazing-content"]}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </div>
  );
};

export default ShareButtons;
