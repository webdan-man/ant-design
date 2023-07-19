"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[2443],{266047:function(m,i,t){t.r(i);var p=t(502143),g=t(968521),h=t(720719),Z=t(28840),o=t(759907),a=t(828089),E=t(825673),v=t(902068),P=t(574399),x=t(863942),f=t(316073),M=t(24628),D=t(719260),O=t(956140),r=t(127179),d=t(905388),T=t(40428),C=t(606965),b=t(268696),A=t(587302),_=t(424128),I=t(249706),y=t(795127),B=t(116846),k=t(212039),L=t(73024),w=t(553913),s=t(606641),l=t(667294),n=t(370917);function c(){var u=(0,s.eL)(),e=u.texts;return(0,n.tZ)(s.dY,null,(0,n.tZ)(l.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,e[0].value),(0,n.tZ)("h2",{id:"when-to-use"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,e[1].value,(0,n.tZ)("code",null,e[2].value),e[3].value),(0,n.tZ)("li",null,e[4].value,(0,n.tZ)("code",null,e[5].value),e[6].value,(0,n.tZ)("code",null,e[7].value),e[8].value,(0,n.tZ)("code",null,e[9].value),e[10].value)),(0,n.tZ)("h2",{id:"examples"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,n.tZ)(d.Z,{items:[{demo:{id:"components-app-demo-basic"},previewerProps:{title:"Basic",filename:"components/app/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
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
`,description:"<p>Get instance for <code>message</code>, <code>notification</code>, <code>modal</code>.</p>"}},{demo:{id:"components-app-demo-config"},previewerProps:{title:"Hooks config",filename:"components/app/demo/config.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
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
`,description:"<p>Config for <code>message</code>, <code>notification</code>.</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"how-to-use"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-use",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"How to use"),(0,n.tZ)("h3",{id:"basic-usage"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#basic-usage",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Basic usage"),(0,n.tZ)("p",null,e[11].value,(0,n.tZ)("code",null,e[12].value),e[13].value),(0,n.tZ)(o.Z,{lang:"tsx"},e[14].value),(0,n.tZ)("p",null,e[15].value),(0,n.tZ)("h3",{id:"sequence-with-configprovider"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#sequence-with-configprovider",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Sequence with ConfigProvider"),(0,n.tZ)("p",null,e[16].value,(0,n.tZ)("code",null,e[17].value),e[18].value),(0,n.tZ)(o.Z,{lang:"tsx"},e[19].value),(0,n.tZ)("h3",{id:"embedded-usage-scenarios-if-not-necessary-try-not-to-do-nesting"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#embedded-usage-scenarios-if-not-necessary-try-not-to-do-nesting",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Embedded usage scenarios (if not necessary, try not to do nesting)"),(0,n.tZ)(o.Z,{lang:"tsx"},e[20].value),(0,n.tZ)("h3",{id:"global-scene-redux-scene"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#global-scene-redux-scene",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Global scene (redux scene)"),(0,n.tZ)(o.Z,{lang:"tsx"},e[21].value),(0,n.tZ)(o.Z,{lang:"tsx"},e[22].value),(0,n.tZ)("h2",{id:"api"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("h3",{id:"app"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#app",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"App"),(0,n.tZ)(a.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[23].value),(0,n.tZ)("th",null,e[24].value),(0,n.tZ)("th",null,e[25].value),(0,n.tZ)("th",null,e[26].value),(0,n.tZ)("th",null,e[27].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[28].value),(0,n.tZ)("td",null,e[29].value),(0,n.tZ)("td",null,(0,n.tZ)(_.Z,{to:"/components/message/#messageconfig",sourceType:"Link"},e[30].value)),(0,n.tZ)("td",null,e[31].value),(0,n.tZ)("td",null,e[32].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[33].value),(0,n.tZ)("td",null,e[34].value),(0,n.tZ)("td",null,(0,n.tZ)(_.Z,{to:"/components/notification/#notificationconfig",sourceType:"Link"},e[35].value)),(0,n.tZ)("td",null,e[36].value),(0,n.tZ)("td",null,e[37].value)))),(0,n.tZ)("h2",{id:"design-token"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Design Token")),(0,n.tZ)(r.Z,{component:"App"})))}i.default=c}}]);
