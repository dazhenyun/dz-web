import React from "react";
import { downloadFile, staticFile } from "@/utils/utils";
import "./style.less";

const ImagesView = ({ path, title, children, previewImg, footerRender, headerRender, className }) => {
  return (
    <div className={`image-view ${className}`}>
      {
        headerRender ? (<div className="image-view__header">{headerRender?.()}</div>) : ""
      }
      <div className="image-view__main">
        {
          children ? children : (<span style={{ backgroundImage: `url(${path})` }} alt={title}></span>)
        }
      </div>
      <div className="image-view__footer">
        {
          footerRender ? footerRender?.() : (
            <>
              <span onClick={() => downloadFile(path, title)}>下载</span>
              <span onClick={() => previewImg(path, title)}>预览</span>
            </>)
        }
      </div>
    </div>
  );
};

export default ImagesView;
