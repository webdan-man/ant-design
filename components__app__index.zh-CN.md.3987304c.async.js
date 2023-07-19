"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8288],{413111:function(m,i,t){t.r(i);var p=t(502143),g=t(968521),h=t(720719),E=t(28840),o=t(759907),s=t(828089),Z=t(825673),v=t(902068),D=t(574399),P=t(863942),x=t(316073),M=t(24628),f=t(719260),C=t(956140),r=t(127179),u=t(905388),O=t(40428),A=t(606965),T=t(268696),I=t(587302),_=t(424128),B=t(249706),b=t(795127),k=t(116846),L=t(212039),y=t(73024),F=t(553913),a=t(606641),d=t(667294),n=t(370917);function l(){var c=(0,a.eL)(),e=c.texts;return(0,n.tZ)(a.dY,null,(0,n.tZ)(d.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,e[0].value),(0,n.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,e[1].value,(0,n.tZ)("code",null,e[2].value),e[3].value,(0,n.tZ)("code",null,e[4].value),e[5].value,(0,n.tZ)("code",null,e[6].value),e[7].value,(0,n.tZ)("code",null,e[8].value),e[9].value),(0,n.tZ)("li",null,e[10].value,(0,n.tZ)("code",null,e[11].value),e[12].value)),(0,n.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,n.tZ)(u.Z,{items:[{demo:{id:"components-app-demo-basic"},previewerProps:{title:"\u57FA\u672C\u7528\u6CD5",filename:"components/app/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { App, Button, Space } from 'antd';

// Sub page
const MyPage = () => {
  const { message, modal, notification } = App.useApp();
  const showMessage = () => {
    message.success('Success!');
  };
  const showModal = () => {
    modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  };
  const showNotification = () => {
    notification.info({
      message: \`Notification topLeft\`,
      description: 'Hello, Ant Design!!',
      placement: 'topLeft',
    });
  };
  return (
    <Space>
      <Button type="primary" onClick={showMessage}>
        Open message
      </Button>
      <Button type="primary" onClick={showModal}>
        Open modal
      </Button>
      <Button type="primary" onClick={showNotification}>
        Open notification
      </Button>
    </Space>
  );
};

// Entry component
export default () => (
  <App>
    <MyPage />
  </App>
);
`,description:"<p>\u83B7\u53D6 <code>message</code>\u3001<code>notification</code>\u3001<code>modal</code> \u5B9E\u4F8B\u3002</p>"}},{demo:{id:"components-app-demo-config"},previewerProps:{title:"Hooks \u914D\u7F6E",filename:"components/app/demo/config.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { App, Button, Space } from 'antd';

// Sub page
const MyPage = () => {
  const { message, notification } = App.useApp();
  const showMessage = () => {
    message.success('Success!');
  };
  const showNotification = () => {
    notification.info({
      message: \`Notification\`,
      description: 'Hello, Ant Design!!',
    });
  };
  return (
    <Space>
      <Button type="primary" onClick={showMessage}>
        Message for only one
      </Button>
      <Button type="primary" onClick={showNotification}>
        Notification for bottomLeft
      </Button>
    </Space>
  );
};

// Entry component
export default () => (
  <App
    message={{
      maxCount: 1,
    }}
    notification={{
      placement: 'bottomLeft',
    }}
  >
    <MyPage />
  </App>
);
`,description:"<p>\u5BF9 <code>message</code>\u3001<code>notification</code> \u8FDB\u884C\u914D\u7F6E\u3002</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"\u5982\u4F55\u4F7F\u7528"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u5982\u4F55\u4F7F\u7528",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u5982\u4F55\u4F7F\u7528"),(0,n.tZ)("h3",{id:"\u57FA\u7840\u7528\u6CD5"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u57FA\u7840\u7528\u6CD5",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u57FA\u7840\u7528\u6CD5"),(0,n.tZ)("p",null,e[13].value,(0,n.tZ)("code",null,e[14].value),e[15].value),(0,n.tZ)(o.Z,{lang:"tsx"},e[16].value),(0,n.tZ)("p",null,e[17].value),(0,n.tZ)("h3",{id:"\u4E0E-configprovider-\u5148\u540E\u987A\u5E8F"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E0E-configprovider-\u5148\u540E\u987A\u5E8F",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4E0E ConfigProvider \u5148\u540E\u987A\u5E8F"),(0,n.tZ)("p",null,e[18].value,(0,n.tZ)("code",null,e[19].value),e[20].value),(0,n.tZ)(o.Z,{lang:"tsx"},e[21].value),(0,n.tZ)("h3",{id:"\u5185\u5D4C\u4F7F\u7528\u573A\u666F\u5982\u65E0\u5FC5\u8981\u5C3D\u91CF\u4E0D\u505A\u5D4C\u5957"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u5185\u5D4C\u4F7F\u7528\u573A\u666F\u5982\u65E0\u5FC5\u8981\u5C3D\u91CF\u4E0D\u505A\u5D4C\u5957",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u5185\u5D4C\u4F7F\u7528\u573A\u666F\uFF08\u5982\u65E0\u5FC5\u8981\uFF0C\u5C3D\u91CF\u4E0D\u505A\u5D4C\u5957\uFF09"),(0,n.tZ)(o.Z,{lang:"tsx"},e[22].value),(0,n.tZ)("h3",{id:"\u5168\u5C40\u573A\u666Fredux-\u573A\u666F"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u5168\u5C40\u573A\u666Fredux-\u573A\u666F",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u5168\u5C40\u573A\u666F\uFF08redux \u573A\u666F\uFF09"),(0,n.tZ)(o.Z,{lang:"tsx"},e[23].value),(0,n.tZ)(o.Z,{lang:"tsx"},e[24].value),(0,n.tZ)("h2",{id:"api"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("h3",{id:"app"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#app",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"App"),(0,n.tZ)(s.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[25].value),(0,n.tZ)("th",null,e[26].value),(0,n.tZ)("th",null,e[27].value),(0,n.tZ)("th",null,e[28].value),(0,n.tZ)("th",null,e[29].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[30].value),(0,n.tZ)("td",null,e[31].value),(0,n.tZ)("td",null,(0,n.tZ)(_.Z,{to:"/components/message-cn/#messageconfig",sourceType:"Link"},e[32].value)),(0,n.tZ)("td",null,e[33].value),(0,n.tZ)("td",null,e[34].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[35].value),(0,n.tZ)("td",null,e[36].value),(0,n.tZ)("td",null,(0,n.tZ)(_.Z,{to:"/components/notification-cn/#notificationconfig",sourceType:"Link"},e[37].value)),(0,n.tZ)("td",null,e[38].value),(0,n.tZ)("td",null,e[39].value)))),(0,n.tZ)("h2",{id:"design-token"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Design Token")),(0,n.tZ)(r.Z,{component:"App"})))}i.default=l}}]);
