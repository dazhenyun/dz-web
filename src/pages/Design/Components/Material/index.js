/*
 * @CreatDate: 2021-09-15 17:05:17
 * @Describe: 图片素材
 */


import { useState } from "react";
import { Tabs } from "antd";
import { Title, ImageView } from "@/components";
import { downloadFile, staticFile } from "@/utils/utils";
import PreviewImgModal from "./PreviewImgModal";
import "./index.less";
const { TabPane } = Tabs;

export default () => {

  const [activeKey, setActiveKey] = useState("datax");
  const [visible, setVisible] = useState(false);
  const [url, setUrl] = useState();

  const materialList = [
    {
      title: "大数据",
      name: "datax",
      count: 11
    },
    {
      title: "科技未来",
      name: "future",
      count: 21
    },
    {
      title: "云科技",
      name: "cloud",
      count: 19
    },
    {
      title: "人工智能",
      name: "intellect",
      count: 13
    },
    {
      title: "AI",
      name: "ai",
      count: 5
    }, {
      title: "线条粒子",
      name: "line",
      count: 8
    }
  ];

  const previewImg = (url, isWhite) => {
    setUrl(url);
    setVisible(true);
  };


  return (
    <div >
      <Title
        account="mulan"
        title='图片素材'
        description="用于企业内部图片素材（非商业）"
      />
      <div>
        <Tabs
          activeKey={activeKey}
          onChange={(activeKey) => {
            setActiveKey(activeKey);
          }}
        >
          {
            materialList.map(({ name, title, count }) => {
              return (
                <TabPane
                  tab={title}
                  key={name}
                >
                  <div key={name} >

                    {
                      Array.from({ length: count }).map((sItem, sIndex) => {
                        const requireUrl = staticFile + `design/material/images/${name}/${name}_${sIndex}.jpg`;
                        return (
                          <ImageView
                            title={`${name}_${sIndex}`}
                            path={requireUrl}
                            previewImg={previewImg} />

                        );
                      })
                    }
                  </div>
                </TabPane>
              );
            })
          }
        </Tabs>
      </div>
      <PreviewImgModal
        url={url}
        visible={visible}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
};

