"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[5129],{270267:function(p,a,t){t.r(a);var _=t(502143),m=t(968521),v=t(720719),g=t(28840),h=t(759907),o=t(828089),A=t(825673),Z=t(902068),b=t(574399),f=t(863942),x=t(316073),k=t(24628),O=t(719260),y=t(956140),c=t(127179),i=t(905388),E=t(40428),C=t(606965),D=t(268696),P=t(587302),r=t(424128),U=t(249706),T=t(795127),M=t(116846),w=t(212039),L=t(73024),z=t(553913),l=t(606641),s=t(667294),e=t(370917);function d(){var u=(0,l.eL)(),n=u.texts;return(0,e.tZ)(l.dY,null,(0,e.tZ)(s.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,n[0].value,(0,e.tZ)("code",null,n[1].value),n[2].value),(0,e.tZ)("h2",{id:"examples"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,e.tZ)(i.Z,{items:[{demo:{id:"components-avatar-demo-basic"},previewerProps:{title:"Basic",filename:"components/avatar/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import React from 'react';
const App = () => (
  <Space direction="vertical" size={16}>
    <Space wrap size={16}>
      <Avatar size={64} icon={<UserOutlined />} />
      <Avatar size="large" icon={<UserOutlined />} />
      <Avatar icon={<UserOutlined />} />
      <Avatar size="small" icon={<UserOutlined />} />
    </Space>
    <Space wrap size={16}>
      <Avatar shape="square" size={64} icon={<UserOutlined />} />
      <Avatar shape="square" size="large" icon={<UserOutlined />} />
      <Avatar shape="square" icon={<UserOutlined />} />
      <Avatar shape="square" size="small" icon={<UserOutlined />} />
    </Space>
  </Space>
);
export default App;
`,description:"<p>Three sizes and two shapes are available.</p>"}},{demo:{id:"components-avatar-demo-type"},previewerProps:{title:"Type",filename:"components/avatar/demo/type.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import React from 'react';
const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';
const App = () => (
  <Space size={16} wrap>
    <Avatar icon={<UserOutlined />} />
    <Avatar>U</Avatar>
    <Avatar size={40}>USER</Avatar>
    <Avatar src={url} />
    <Avatar src={<img src={url} alt="avatar" />} />
    <Avatar
      style={{
        backgroundColor: '#fde3cf',
        color: '#f56a00',
      }}
    >
      U
    </Avatar>
    <Avatar
      style={{
        backgroundColor: '#87d068',
      }}
      icon={<UserOutlined />}
    />
  </Space>
);
export default App;
`,description:"<p>Image, Icon and letter are supported, and the latter two kinds of avatar can have custom colors and background colors.</p>"}},{demo:{id:"components-avatar-demo-dynamic"},previewerProps:{title:"Autoset Font Size",filename:"components/avatar/demo/dynamic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Avatar, Button } from 'antd';
const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
const GapList = [4, 3, 2, 1];
const App = () => {
  const [user, setUser] = useState(UserList[0]);
  const [color, setColor] = useState(ColorList[0]);
  const [gap, setGap] = useState(GapList[0]);
  const changeUser = () => {
    const index = UserList.indexOf(user);
    setUser(index < UserList.length - 1 ? UserList[index + 1] : UserList[0]);
    setColor(index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0]);
  };
  const changeGap = () => {
    const index = GapList.indexOf(gap);
    setGap(index < GapList.length - 1 ? GapList[index + 1] : GapList[0]);
  };
  return (
    <>
      <Avatar
        style={{
          backgroundColor: color,
          verticalAlign: 'middle',
        }}
        size="large"
        gap={gap}
      >
        {user}
      </Avatar>
      <Button
        size="small"
        style={{
          margin: '0 16px',
          verticalAlign: 'middle',
        }}
        onClick={changeUser}
      >
        ChangeUser
      </Button>
      <Button
        size="small"
        style={{
          verticalAlign: 'middle',
        }}
        onClick={changeGap}
      >
        changeGap
      </Button>
    </>
  );
};
export default App;
`,description:"<p>For letter type Avatar, when the letters are too long to display, the font size can be automatically adjusted according to the width of the Avatar. You can also use <code>gap</code> to set the unit distance between left and right sides.</p>"}},{demo:{id:"components-avatar-demo-badge"},previewerProps:{title:"With Badge",filename:"components/avatar/demo/badge.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space } from 'antd';
import React from 'react';
const App = () => (
  <Space size={24}>
    <Badge count={1}>
      <Avatar shape="square" icon={<UserOutlined />} />
    </Badge>
    <Badge dot>
      <Avatar shape="square" icon={<UserOutlined />} />
    </Badge>
  </Space>
);
export default App;
`,description:"<p>Usually used for reminders and notifications.</p>"}},{demo:{id:"components-avatar-demo-group"},previewerProps:{title:"Avatar.Group",filename:"components/avatar/demo/group.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Divider, Tooltip } from 'antd';
import React from 'react';
const App = () => (
  <>
    <Avatar.Group>
      <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
      <a href="https://ant.design">
        <Avatar
          style={{
            backgroundColor: '#f56a00',
          }}
        >
          K
        </Avatar>
      </a>
      <Tooltip title="Ant User" placement="top">
        <Avatar
          style={{
            backgroundColor: '#87d068',
          }}
          icon={<UserOutlined />}
        />
      </Tooltip>
      <Avatar
        style={{
          backgroundColor: '#1677ff',
        }}
        icon={<AntDesignOutlined />}
      />
    </Avatar.Group>
    <Divider />
    <Avatar.Group
      maxCount={2}
      maxStyle={{
        color: '#f56a00',
        backgroundColor: '#fde3cf',
      }}
    >
      <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
      <Avatar
        style={{
          backgroundColor: '#f56a00',
        }}
      >
        K
      </Avatar>
      <Tooltip title="Ant User" placement="top">
        <Avatar
          style={{
            backgroundColor: '#87d068',
          }}
          icon={<UserOutlined />}
        />
      </Tooltip>
      <Avatar
        style={{
          backgroundColor: '#1677ff',
        }}
        icon={<AntDesignOutlined />}
      />
    </Avatar.Group>
    <Divider />
    <Avatar.Group
      maxCount={2}
      size="large"
      maxStyle={{
        color: '#f56a00',
        backgroundColor: '#fde3cf',
      }}
    >
      <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
      <Avatar
        style={{
          backgroundColor: '#f56a00',
        }}
      >
        K
      </Avatar>
      <Tooltip title="Ant User" placement="top">
        <Avatar
          style={{
            backgroundColor: '#87d068',
          }}
          icon={<UserOutlined />}
        />
      </Tooltip>
      <Avatar
        style={{
          backgroundColor: '#1677ff',
        }}
        icon={<AntDesignOutlined />}
      />
    </Avatar.Group>
    <Divider />
    <Avatar.Group
      maxCount={2}
      maxPopoverTrigger="click"
      size="large"
      maxStyle={{
        color: '#f56a00',
        backgroundColor: '#fde3cf',
        cursor: 'pointer',
      }}
    >
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <Avatar
        style={{
          backgroundColor: '#f56a00',
        }}
      >
        K
      </Avatar>
      <Tooltip title="Ant User" placement="top">
        <Avatar
          style={{
            backgroundColor: '#87d068',
          }}
          icon={<UserOutlined />}
        />
      </Tooltip>
      <Avatar
        style={{
          backgroundColor: '#1677ff',
        }}
        icon={<AntDesignOutlined />}
      />
    </Avatar.Group>
  </>
);
export default App;
`,description:"<p>Avatar group display.</p>"}},{demo:{id:"components-avatar-demo-toggle-debug"},previewerProps:{debug:!0,title:"Calculate text style when hiding",filename:"components/avatar/demo/toggle-debug.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { Avatar, Button, Space } from 'antd';
import React, { useState } from 'react';
const App = () => {
  const [hide, setHide] = useState(true);
  const [size, setSize] = useState('large');
  const [scale, setScale] = useState(1);
  const toggle = () => {
    setHide(!hide);
  };
  const toggleSize = () => {
    const sizes = ['small', 'default', 'large'];
    let current = sizes.indexOf(size) + 1;
    if (current > 2) {
      current = 0;
    }
    setSize(sizes[current]);
  };
  const changeScale = () => {
    setScale(scale === 1 ? 2 : 1);
  };
  return (
    <>
      <Space wrap>
        <Button onClick={toggle}>Toggle Avatar visibility</Button>
        <Button onClick={toggleSize}>Toggle Avatar size</Button>
        <Button onClick={changeScale}>Change Avatar scale</Button>
      </Space>
      <div
        style={{
          textAlign: 'center',
          transform: \`scale(\${scale})\`,
          marginTop: 24,
        }}
      >
        <Avatar
          size={size}
          style={{
            background: '#7265e6',
            display: hide ? 'none' : '',
          }}
        >
          Avatar
        </Avatar>
        <Avatar
          size={size}
          src="invalid"
          style={{
            background: '#00a2ae',
            display: hide ? 'none' : '',
          }}
        >
          Invalid
        </Avatar>
        <div
          style={{
            display: hide ? 'none' : '',
          }}
        >
          <Avatar
            size={size}
            style={{
              background: '#7265e6',
            }}
          >
            Avatar
          </Avatar>
          <Avatar
            size={size}
            src="invalid"
            style={{
              background: '#00a2ae',
            }}
          >
            Invalid
          </Avatar>
        </div>
      </div>
    </>
  );
};
export default App;
`,description:"<p>Text inside Avatar should be set a proper font size when toggle it's visibility.</p>"}},{demo:{id:"components-avatar-demo-responsive"},previewerProps:{title:"Responsive Size",filename:"components/avatar/demo/responsive.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
const App = () => (
  <Avatar
    size={{
      xs: 24,
      sm: 32,
      md: 40,
      lg: 64,
      xl: 80,
      xxl: 100,
    }}
    icon={<AntDesignOutlined />}
  />
);
export default App;
`,description:"<p>Avatar size can be automatically adjusted based on the screen size.</p>"}},{demo:{id:"components-avatar-demo-fallback"},previewerProps:{debug:!0,title:"Fallback",filename:"components/avatar/demo/fallback.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { Avatar, Space } from 'antd';
import React from 'react';
const App = () => (
  <Space>
    <Avatar shape="circle" src="http://abc.com/not-exist.jpg">
      A
    </Avatar>
    <Avatar shape="circle" src="http://abc.com/not-exist.jpg">
      ABC
    </Avatar>
  </Space>
);
export default App;
`,description:"<p>\u56FE\u7247\u4E0D\u5B58\u5728\u65F6\uFF0C\u5982\u679C <code>src</code> \u672C\u8EAB\u662F\u4E2A ReactElement\uFF0C\u4F1A\u5C1D\u8BD5\u56DE\u9000\u5230 <code>src</code>\uFF0C\u5426\u5219\u5C1D\u8BD5\u56DE\u9000\u5230 <code>icon</code>\uFF0C\u6700\u540E\u56DE\u9000\u5230\u663E\u793A <code>children</code>\u3002</p>"}},{demo:{id:"components-avatar-demo-component-token"},previewerProps:{debug:!0,title:"Component Token",filename:"components/avatar/demo/component-token.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, ConfigProvider, Space, Tooltip } from 'antd';
import React from 'react';
const App = () => (
  <ConfigProvider
    theme={{
      components: {
        Avatar: {
          containerSize: 60,
          containerSizeLG: 30,
          containerSizeSM: 16,
          textFontSize: 18,
          textFontSizeLG: 28,
          textFontSizeSM: 12,
          borderRadius: 10,
          groupOverlapping: -10,
          groupBorderColor: '#eee',
        },
      },
    }}
  >
    <Space>
      <Avatar shape="circle" src="http://abc.com/not-exist.jpg">
        A
      </Avatar>
    </Space>
    <Space>
      <Avatar.Group
        maxCount={2}
        maxStyle={{
          color: '#f56a00',
          backgroundColor: '#fde3cf',
        }}
      >
        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
        <Avatar
          style={{
            backgroundColor: '#f56a00',
          }}
        >
          K
        </Avatar>
        <Tooltip title="Ant User" placement="top">
          <Avatar
            style={{
              backgroundColor: '#87d068',
            }}
            icon={<UserOutlined />}
          />
        </Tooltip>
        <Avatar
          style={{
            backgroundColor: '#1890ff',
          }}
          icon={<AntDesignOutlined />}
        />
      </Avatar.Group>
    </Space>
    <Space>
      <Badge count={1}>
        <Avatar shape="square" icon={<UserOutlined />} />
      </Badge>
      <Badge dot>
        <Avatar shape="square" icon={<UserOutlined />} />
      </Badge>
    </Space>
  </ConfigProvider>
);
export default App;
`}}]}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"api"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"API"),(0,e.tZ)("h3",{id:"avatar"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#avatar",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Avatar"),(0,e.tZ)(o.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[3].value),(0,e.tZ)("th",null,n[4].value),(0,e.tZ)("th",null,n[5].value),(0,e.tZ)("th",null,n[6].value),(0,e.tZ)("th",null,n[7].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[8].value),(0,e.tZ)("td",null,n[9].value),(0,e.tZ)("td",null,n[10].value),(0,e.tZ)("td",null,n[11].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[12].value),(0,e.tZ)("td",null,n[13].value),(0,e.tZ)("td",null,n[14].value),(0,e.tZ)("td",null,n[15].value),(0,e.tZ)("td",null,n[16].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[17].value),(0,e.tZ)("td",null,n[18].value),(0,e.tZ)("td",null,n[19].value),(0,e.tZ)("td",null,n[20].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[21].value),(0,e.tZ)("td",null,n[22].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[23].value),n[24].value,(0,e.tZ)("code",null,n[25].value)),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[26].value)),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[27].value),(0,e.tZ)("td",null,n[28].value),(0,e.tZ)("td",null,n[29].value,(0,e.tZ)("code",null,n[30].value),n[31].value,(0,e.tZ)("code",null,n[32].value),n[33].value,(0,e.tZ)("code",null,n[34].value),n[35].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[36].value)),(0,e.tZ)("td",null,n[37].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[38].value),(0,e.tZ)("td",null,n[39].value),(0,e.tZ)("td",null,n[40].value),(0,e.tZ)("td",null,n[41].value),(0,e.tZ)("td",null,n[42].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[43].value),(0,e.tZ)("td",null,n[44].value),(0,e.tZ)("td",null,n[45].value),(0,e.tZ)("td",null,n[46].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[47].value),(0,e.tZ)("td",null,n[48].value),(0,e.tZ)("td",null,n[49].value,(0,e.tZ)("code",null,n[50].value),n[51].value,(0,e.tZ)("code",null,n[52].value)),(0,e.tZ)("td",null,n[53].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[54].value),(0,e.tZ)("td",null,n[55].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[56].value),n[57].value,(0,e.tZ)("code",null,n[58].value),n[59].value,(0,e.tZ)("code",null,n[60].value)),(0,e.tZ)("td",null,n[61].value),(0,e.tZ)("td",null,n[62].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[63].value),(0,e.tZ)("td",null,n[64].value),(0,e.tZ)("td",null,n[65].value),(0,e.tZ)("td",null,n[66].value),(0,e.tZ)("td",null)))),(0,e.tZ)("blockquote",null,(0,e.tZ)("p",null,n[67].value,(0,e.tZ)("code",null,n[68].value),n[69].value,(0,e.tZ)("code",null,n[70].value),n[71].value,(0,e.tZ)("code",null,n[72].value),n[73].value,(0,e.tZ)("code",null,n[74].value))),(0,e.tZ)("h3",{id:"avatargroup-450"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#avatargroup-450",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Avatar.Group (4.5.0+)"),(0,e.tZ)(o.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[75].value),(0,e.tZ)("th",null,n[76].value),(0,e.tZ)("th",null,n[77].value),(0,e.tZ)("th",null,n[78].value),(0,e.tZ)("th",null,n[79].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[80].value),(0,e.tZ)("td",null,n[81].value),(0,e.tZ)("td",null,n[82].value),(0,e.tZ)("td",null,n[83].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[84].value),(0,e.tZ)("td",null,n[85].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[86].value),n[87].value,(0,e.tZ)("code",null,n[88].value)),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[89].value)),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[90].value),(0,e.tZ)("td",null,n[91].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[92].value),n[93].value,(0,e.tZ)("code",null,n[94].value),n[95].value,(0,e.tZ)("code",null,n[96].value)),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[97].value)),(0,e.tZ)("td",null,n[98].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[99].value),(0,e.tZ)("td",null,n[100].value),(0,e.tZ)("td",null,n[101].value),(0,e.tZ)("td",null,n[102].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[103].value),(0,e.tZ)("td",null,n[104].value),(0,e.tZ)("td",null,n[105].value,(0,e.tZ)("code",null,n[106].value),n[107].value,(0,e.tZ)("code",null,n[108].value),n[109].value,(0,e.tZ)("code",null,n[110].value),n[111].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[112].value)),(0,e.tZ)("td",null,n[113].value)))),(0,e.tZ)("h2",{id:"design-token"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Design Token")),(0,e.tZ)(c.Z,{component:"Avatar"})))}a.default=d}}]);
