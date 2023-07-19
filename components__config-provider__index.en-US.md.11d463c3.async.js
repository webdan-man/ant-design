"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[4766],{626132:function(v,u,t){t.r(u);var m=t(502143),Z=t(968521),_=t(720719),g=t(28840),a=t(759907),o=t(828089),h=t(825673),f=t(902068),b=t(574399),C=t(863942),y=t(316073),w=t(24628),P=t(719260),x=t(956140),S=t(127179),i=t(905388),k=t(40428),O=t(606965),d=t(268696),R=t(587302),l=t(424128),B=t(249706),T=t(795127),D=t(116846),I=t(212039),E=t(73024),M=t(553913),r=t(606641),c=t(667294),n=t(370917);function s(){var p=(0,r.eL)(),e=p.texts;return(0,n.tZ)(r.dY,null,(0,n.tZ)(c.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,(0,n.tZ)("code",null,e[0].value),e[1].value),(0,n.tZ)("h2",{id:"usage"},(0,n.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#usage",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Usage"),(0,n.tZ)("p",null,e[2].value,(0,n.tZ)(l.Z,{href:"https://facebook.github.io/react/docs/context.html",sourceType:"a"},e[3].value),e[4].value),(0,n.tZ)(a.Z,{lang:"tsx"},e[5].value),(0,n.tZ)("h3",{id:"content-security-policy"},(0,n.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#content-security-policy",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Content Security Policy"),(0,n.tZ)("p",null,e[6].value,(0,n.tZ)("code",null,e[7].value),e[8].value),(0,n.tZ)(a.Z,{lang:"tsx"},e[9].value),(0,n.tZ)("h2",{id:"examples"},(0,n.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,n.tZ)(i.Z,{items:[{demo:{id:"components-config-provider-demo-locale"},previewerProps:{title:"Locale",filename:"components/config-provider/demo/locale.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { EllipsisOutlined } from '@ant-design/icons';
import {
  Upload,
  Tour,
  Input,
  Form,
  QRCode,
  Button,
  Calendar,
  ConfigProvider,
  DatePicker,
  Modal,
  Pagination,
  Popconfirm,
  Radio,
  Select,
  Space,
  Table,
  theme,
  TimePicker,
  Transfer,
  Image,
  InputNumber,
  Divider,
} from 'antd';
import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import React, { useState } from 'react';
dayjs.locale('en');
const { Option } = Select;
const { RangePicker } = DatePicker;
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'filter1',
        value: 'filter1',
      },
    ],
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
];
const Page = () => {
  const { token } = theme.useToken();
  const [open, setOpen] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);
  const tourRefs = React.useRef([]);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const info = () => {
    Modal.info({
      title: 'some info',
      content: 'some info',
    });
  };
  const confirm = () => {
    Modal.confirm({
      title: 'some info',
      content: 'some info',
    });
  };
  const steps = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      target: () => tourRefs.current[0],
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => tourRefs.current[1],
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => tourRefs.current[2],
    },
  ];
  const fileList = [
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'error',
    },
  ];
  return (
    <Space
      direction="vertical"
      size={[0, 16]}
      style={{
        width: '100%',
        paddingTop: 16,
        borderTop: \`1px solid \${token.colorBorder}\`,
      }}
    >
      <Pagination defaultCurrent={1} total={50} showSizeChanger />
      <Space wrap>
        <Select
          showSearch
          style={{
            width: 200,
          }}
        >
          <Option value="jack">jack</Option>
          <Option value="lucy">lucy</Option>
        </Select>
        <DatePicker />
        <TimePicker />
        <RangePicker />
      </Space>
      <Space wrap>
        <Button type="primary" onClick={showModal}>
          Show Modal
        </Button>
        <Button onClick={info}>Show info</Button>
        <Button onClick={confirm}>Show confirm</Button>
        <Popconfirm title="Question?">
          <a href="#">Click to confirm</a>
        </Popconfirm>
      </Space>
      <Transfer dataSource={[]} showSearch targetKeys={[]} />
      <div
        style={{
          width: 320,
          border: \`1px solid \${token.colorBorder}\`,
          borderRadius: 8,
        }}
      >
        <Calendar fullscreen={false} value={dayjs()} />
      </div>
      <Form
        name="basic"
        autoComplete="off"
        labelCol={{
          sm: {
            span: 4,
          },
        }}
        wrapperCol={{
          span: 6,
        }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input width={200} />
        </Form.Item>
        <Form.Item
          label="Age"
          name="age"
          rules={[
            {
              type: 'number',
              min: 0,
              max: 99,
            },
          ]}
          initialValue={100}
        >
          <InputNumber width={200} />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 2,
            span: 6,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Table dataSource={[]} columns={columns} />
      <Modal title="Locale Modal" open={open} onCancel={hideModal}>
        <p>Locale Modal</p>
      </Modal>
      <Space wrap size={80}>
        <QRCode
          value="https://ant.design/"
          status="expired"
          onRefresh={() => console.log('refresh')}
        />
        <Image
          width={160}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </Space>
      <Upload listType="picture-card" fileList={fileList} />
      <Divider orientation="left">Tour</Divider>
      <Button type="primary" onClick={() => setTourOpen(true)}>
        Begin Tour
      </Button>
      <Space>
        <Button ref={(node) => node && tourRefs.current.splice(0, 0, node)}> Upload</Button>
        <Button ref={(node) => node && tourRefs.current.splice(1, 0, node)} type="primary">
          Save
        </Button>
        <Button
          ref={(node) => node && tourRefs.current.splice(2, 0, node)}
          icon={<EllipsisOutlined />}
        />
      </Space>
      <Tour open={tourOpen} steps={steps} onClose={() => setTourOpen(false)} />
    </Space>
  );
};
const App = () => {
  const [locale, setLocal] = useState(enUS);
  const changeLocale = (e) => {
    const localeValue = e.target.value;
    setLocal(localeValue);
    if (!localeValue) {
      dayjs.locale('en');
    } else {
      dayjs.locale('zh-cn');
    }
  };
  return (
    <>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <span
          style={{
            marginRight: 16,
          }}
        >
          Change locale of components:
        </span>
        <Radio.Group value={locale} onChange={changeLocale}>
          <Radio.Button key="en" value={enUS}>
            English
          </Radio.Button>
          <Radio.Button key="cn" value={zhCN}>
            \u4E2D\u6587
          </Radio.Button>
        </Radio.Group>
      </div>
      <ConfigProvider locale={locale}>
        <Page />
      </ConfigProvider>
    </>
  );
};
export default App;
`,description:"<p>Components which need localization support are listed here, you can toggle the language in the demo.</p>"}},{demo:{id:"components-config-provider-demo-direction"},previewerProps:{title:"Direction",filename:"components/config-provider/demo/direction.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import {
  DownloadOutlined,
  LeftOutlined,
  MinusOutlined,
  PlusOutlined,
  RightOutlined,
  SearchOutlined as SearchIcon,
  SmileOutlined,
} from '@ant-design/icons';
import {
  Badge,
  Button,
  Cascader,
  Col,
  ConfigProvider,
  Divider,
  Input,
  InputNumber,
  Modal,
  Pagination,
  Radio,
  Rate,
  Row,
  Select,
  Space,
  Steps,
  Switch,
  Tree,
  TreeSelect,
} from 'antd';
import React, { useState } from 'react';
const InputGroup = Input.Group;
const ButtonGroup = Button.Group;
const { Option } = Select;
const { TreeNode } = Tree;
const { Search } = Input;
const cascaderOptions = [
  {
    value: 'tehran',
    label: '\u062A\u0647\u0631\u0627\u0646',
    children: [
      {
        value: 'tehran-c',
        label: '\u062A\u0647\u0631\u0627\u0646',
        children: [
          {
            value: 'saadat-abad',
            label: '\u0633\u0639\u0627\u062F\u062A \u0622\u06CC\u0627\u062F',
          },
        ],
      },
    ],
  },
  {
    value: 'ardabil',
    label: '\u0627\u0631\u062F\u0628\u06CC\u0644',
    children: [
      {
        value: 'ardabil-c',
        label: '\u0627\u0631\u062F\u0628\u06CC\u0644',
        children: [
          {
            value: 'primadar',
            label: '\u067E\u06CC\u0631\u0645\u0627\u062F\u0631',
          },
        ],
      },
    ],
  },
  {
    value: 'gilan',
    label: '\u06AF\u06CC\u0644\u0627\u0646',
    children: [
      {
        value: 'rasht',
        label: '\u0631\u0634\u062A',
        children: [
          {
            value: 'district-3',
            label: '\u0645\u0646\u0637\u0642\u0647 \u06F3',
          },
        ],
      },
    ],
  },
];
const Page = ({ popupPlacement }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [badgeCount, setBadgeCount] = useState(5);
  const [showBadge, setShowBadge] = useState(true);
  const selectBefore = (
    <Select
      defaultValue="Http://"
      style={{
        width: 90,
      }}
    >
      <Option value="Http://">Http://</Option>
      <Option value="Https://">Https://</Option>
    </Select>
  );
  const selectAfter = (
    <Select
      defaultValue=".com"
      style={{
        width: 80,
      }}
    >
      <Option value=".com">.com</Option>
      <Option value=".jp">.jp</Option>
      <Option value=".cn">.cn</Option>
      <Option value=".org">.org</Option>
    </Select>
  );

  // ==== Cascader ====
  const cascaderFilter = (inputValue, path) =>
    path.some((option) => option.label.toLowerCase().includes(inputValue.toLowerCase()));
  const onCascaderChange = (value) => {
    console.log(value);
  };
  // ==== End Cascader ====

  // ==== Modal ====
  const showModal = () => {
    setModalOpen(true);
  };
  const handleOk = (e) => {
    console.log(e);
    setModalOpen(false);
  };
  const handleCancel = (e) => {
    console.log(e);
    setModalOpen(false);
  };

  // ==== End Modal ====
  const onStepsChange = (newCurrentStep) => {
    console.log('onChange:', newCurrentStep);
    setCurrentStep(newCurrentStep);
  };

  // ==== Badge ====
  const increaseBadge = () => {
    setBadgeCount(badgeCount + 1);
  };
  const declineBadge = () => {
    setBadgeCount((prev) => (prev - 1 < 0 ? 0 : prev - 1));
  };
  const onChangeBadge = (checked) => {
    setShowBadge(checked);
  };
  // ==== End Badge ====

  return (
    <div className="direction-components">
      <Row>
        <Col span={24}>
          <Divider orientation="left">Cascader example</Divider>
          <Cascader
            suffixIcon={<SearchIcon />}
            options={cascaderOptions}
            onChange={onCascaderChange}
            placeholder="\u06CC\u06A9 \u0645\u0648\u0631\u062F \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F"
            popupPlacement={popupPlacement}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;With search:&nbsp;&nbsp;
          <Cascader
            suffixIcon={<SmileOutlined />}
            options={cascaderOptions}
            onChange={onCascaderChange}
            placeholder="Select an item"
            popupPlacement={popupPlacement}
            showSearch={{
              filter: cascaderFilter,
            }}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={12}>
          <Divider orientation="left">Switch example</Divider>
          &nbsp;&nbsp;
          <Switch defaultChecked />
          &nbsp;&nbsp;
          <Switch loading defaultChecked />
          &nbsp;&nbsp;
          <Switch size="small" loading />
        </Col>
        <Col span={12}>
          <Divider orientation="left">Radio Group example</Divider>
          <Radio.Group defaultValue="c" buttonStyle="solid">
            <Radio.Button value="a">\u062A\u0647\u0631\u0627\u0646</Radio.Button>
            <Radio.Button value="b" disabled>
              \u0627\u0635\u0641\u0647\u0627\u0646
            </Radio.Button>
            <Radio.Button value="c">\u0641\u0627\u0631\u0633</Radio.Button>
            <Radio.Button value="d">\u062E\u0648\u0632\u0633\u062A\u0627\u0646</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={12}>
          <Divider orientation="left">Button example</Divider>
          <div className="button-demo">
            <Button type="primary" icon={<DownloadOutlined />} />
            <Button type="primary" shape="circle" icon={<DownloadOutlined />} />
            <Button type="primary" shape="round" icon={<DownloadOutlined />} />
            <Button type="primary" shape="round" icon={<DownloadOutlined />}>
              Download
            </Button>
            <Button type="primary" icon={<DownloadOutlined />}>
              Download
            </Button>
            <br />
            <Button.Group>
              <Button type="primary">
                <LeftOutlined />
                Backward
              </Button>
              <Button type="primary">
                Forward
                <RightOutlined />
              </Button>
            </Button.Group>
            <Button type="primary" loading>
              Loading
            </Button>
            <Button type="primary" size="small" loading>
              Loading
            </Button>
          </div>
        </Col>
        <Col span={12}>
          <Divider orientation="left">Tree example</Divider>
          <Tree
            showLine
            checkable
            defaultExpandedKeys={['0-0-0', '0-0-1']}
            defaultSelectedKeys={['0-0-0', '0-0-1']}
            defaultCheckedKeys={['0-0-0', '0-0-1']}
          >
            <TreeNode title="parent 1" key="0-0">
              <TreeNode title="parent 1-0" key="0-0-0" disabled>
                <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
                <TreeNode title="leaf" key="0-0-0-1" />
              </TreeNode>
              <TreeNode title="parent 1-1" key="0-0-1">
                <TreeNode
                  title={
                    <span
                      style={{
                        color: '#1677ff',
                      }}
                    >
                      sss
                    </span>
                  }
                  key="0-0-1-0"
                />
              </TreeNode>
            </TreeNode>
          </Tree>
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={24}>
          <Divider orientation="left">Input (Input Group) example</Divider>
          <InputGroup size="large">
            <Row gutter={8}>
              <Col span={5}>
                <Input defaultValue="0571" />
              </Col>
              <Col span={8}>
                <Input defaultValue="26888888" />
              </Col>
            </Row>
          </InputGroup>
          <br />
          <InputGroup compact>
            <Input
              style={{
                width: '20%',
              }}
              defaultValue="0571"
            />
            <Input
              style={{
                width: '30%',
              }}
              defaultValue="26888888"
            />
          </InputGroup>
          <br />
          <InputGroup compact>
            <Select defaultValue="Option1">
              <Option value="Option1">Option1</Option>
              <Option value="Option2">Option2</Option>
            </Select>
            <Input
              style={{
                width: '50%',
              }}
              defaultValue="input content"
            />
            <InputNumber />
          </InputGroup>
          <br />
          <Search placeholder="input search text" enterButton="Search" size="large" />
          <br />
          <br />
          <div
            style={{
              marginBottom: 16,
            }}
          >
            <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
          </div>
          <br />
          <Row>
            <Col span={12}>
              <Divider orientation="left">Select example</Divider>
              <Space wrap>
                <Select
                  mode="multiple"
                  defaultValue="\u0645\u0648\u0631\u0686\u0647"
                  style={{
                    width: 120,
                  }}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="\u0645\u0648\u0631\u0686\u0647">\u0645\u0648\u0631\u0686\u0647</Option>
                  <Option value="disabled" disabled>
                    Disabled
                  </Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
                <Select
                  defaultValue="\u0645\u0648\u0631\u0686\u0647"
                  style={{
                    width: 120,
                  }}
                  disabled
                >
                  <Option value="\u0645\u0648\u0631\u0686\u0647">\u0645\u0648\u0631\u0686\u0647</Option>
                </Select>
                <Select
                  defaultValue="\u0645\u0648\u0631\u0686\u0647"
                  style={{
                    width: 120,
                  }}
                  loading
                >
                  <Option value="\u0645\u0648\u0631\u0686\u0647">\u0645\u0648\u0631\u0686\u0647</Option>
                </Select>
                <Select
                  showSearch
                  style={{
                    width: 200,
                  }}
                  placeholder="Select a person"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option?.props.children.toLowerCase().includes(input.toLowerCase())
                  }
                >
                  <Option value="jack">Jack</Option>
                  <Option value="\u0633\u0639\u06CC\u062F">\u0633\u0639\u06CC\u062F</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </Space>
            </Col>
            <Col span={12}>
              <Divider orientation="left">TreeSelect example</Divider>
              <TreeSelect
                showSearch
                style={{
                  width: '100%',
                }}
                dropdownStyle={{
                  maxHeight: 400,
                  overflow: 'auto',
                }}
                placeholder="Please select"
                allowClear
                treeDefaultExpandAll
              >
                <TreeNode title="parent 1" key="0-1">
                  <TreeNode title="parent 1-0" key="0-1-1">
                    <TreeNode title="my leaf" key="random" />
                    <TreeNode title="your leaf" key="random1" />
                  </TreeNode>
                  <TreeNode title="parent 1-1" key="random2">
                    <TreeNode
                      title={
                        <b
                          style={{
                            color: '#08c',
                          }}
                        >
                          sss
                        </b>
                      }
                      key="random3"
                    />
                  </TreeNode>
                </TreeNode>
              </TreeSelect>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={24}>
              <Divider orientation="left">Modal example</Divider>
              <Button type="primary" onClick={showModal}>
                Open Modal
              </Button>
              <Modal title="\u067E\u0646\u0686\u0631\u0647 \u0633\u0627\u062F\u0647" open={modalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>\u0646\u06AF\u0627\u0634\u062A\u0647\u200C\u0647\u0627\u06CC \u062E\u0648\u062F \u0631\u0627 \u0627\u06CC\u0646\u062C\u0627 \u0642\u0631\u0627\u0631\u062F\u0647\u06CC\u062F</p>
                <p>\u0646\u06AF\u0627\u0634\u062A\u0647\u200C\u0647\u0627\u06CC \u062E\u0648\u062F \u0631\u0627 \u0627\u06CC\u0646\u062C\u0627 \u0642\u0631\u0627\u0631\u062F\u0647\u06CC\u062F</p>
                <p>\u0646\u06AF\u0627\u0634\u062A\u0647\u200C\u0647\u0627\u06CC \u062E\u0648\u062F \u0631\u0627 \u0627\u06CC\u0646\u062C\u0627 \u0642\u0631\u0627\u0631\u062F\u0647\u06CC\u062F</p>
              </Modal>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={24}>
              <Divider orientation="left">Steps example</Divider>
              <Steps
                progressDot
                current={currentStep}
                items={[
                  {
                    title: 'Finished',
                    description: 'This is a description.',
                  },
                  {
                    title: 'In Progress',
                    description: 'This is a description.',
                  },
                  {
                    title: 'Waiting',
                    description: 'This is a description.',
                  },
                ]}
              />
              <br />
              <Steps
                current={currentStep}
                onChange={onStepsChange}
                items={[
                  {
                    title: 'Step 1',
                    description: 'This is a description.',
                  },
                  {
                    title: 'Step 2',
                    description: 'This is a description.',
                  },
                  {
                    title: 'Step 3',
                    description: 'This is a description.',
                  },
                ]}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={12}>
              <Divider orientation="left">Rate example</Divider>
              <Rate defaultValue={2.5} />
              <br />
              <strong>* Note:</strong> Half star not implemented in RTL direction, it will be
              supported after <a href="https://github.com/react-component/rate">rc-rate</a>{' '}
              implement rtl support.
            </Col>
            <Col span={12}>
              <Divider orientation="left">Badge example</Divider>
              <Badge count={badgeCount}>
                <a href="#" className="head-example" />
              </Badge>
              <ButtonGroup>
                <Button onClick={declineBadge}>
                  <MinusOutlined />
                </Button>
                <Button onClick={increaseBadge}>
                  <PlusOutlined />
                </Button>
              </ButtonGroup>
              <div
                style={{
                  marginTop: 12,
                }}
              >
                <Badge dot={showBadge}>
                  <a href="#" className="head-example" />
                </Badge>
                <Switch onChange={onChangeBadge} checked={showBadge} />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col span={24}>
          <Divider orientation="left">Pagination example</Divider>
          <Pagination showSizeChanger defaultCurrent={3} total={500} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={24}>
          <Divider orientation="left">Grid System example</Divider>
          <div className="grid-demo">
            <div className="code-box-demo">
              <p>
                <strong>* Note:</strong> Every calculation in RTL grid system is from right side
                (offset, push, etc.)
              </p>
              <Row>
                <Col span={8}>col-8</Col>
                <Col span={8} offset={8}>
                  col-8
                </Col>
              </Row>
              <Row>
                <Col span={6} offset={6}>
                  col-6 col-offset-6
                </Col>
                <Col span={6} offset={6}>
                  col-6 col-offset-6
                </Col>
              </Row>
              <Row>
                <Col span={12} offset={6}>
                  col-12 col-offset-6
                </Col>
              </Row>
              <Row>
                <Col span={18} push={6}>
                  col-18 col-push-6
                </Col>
                <Col span={6} pull={18}>
                  col-6 col-pull-18
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
const App = () => {
  const [direction, setDirection] = useState('ltr');
  const [popupPlacement, setPopupPlacement] = useState('bottomLeft');
  const changeDirection = (e) => {
    const directionValue = e.target.value;
    setDirection(directionValue);
    if (directionValue === 'rtl') {
      setPopupPlacement('bottomRight');
    } else {
      setPopupPlacement('bottomLeft');
    }
  };
  return (
    <>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <span
          style={{
            marginRight: 16,
          }}
        >
          Change direction of components:
        </span>
        <Radio.Group defaultValue="ltr" onChange={changeDirection}>
          <Radio.Button key="ltr" value="ltr">
            LTR
          </Radio.Button>
          <Radio.Button key="rtl" value="rtl">
            RTL
          </Radio.Button>
        </Radio.Group>
      </div>
      <ConfigProvider direction={direction}>
        <Page popupPlacement={popupPlacement} />
      </ConfigProvider>
    </>
  );
};
export default App;
`,description:"<p>Components which support rtl direction are listed here, you can toggle the direction in the demo.</p>",style:`.button-demo .ant-btn,
.button-demo .ant-btn-group {
  margin-right: 8px;
  margin-bottom: 12px;
}
.button-demo .ant-btn-group > .ant-btn,
.button-demo .ant-btn-group > span > .ant-btn {
  margin-right: 0;
  margin-left: 0;
}

.head-example {
  display: inline-block;
  width: 42px;
  height: 42px;
  vertical-align: middle;
  background: #eee;
  border-radius: 4px;
}

.ant-badge:not(.ant-badge-not-a-wrapper) {
  margin-right: 20px;
}
.ant-badge-rtl:not(.ant-badge-not-a-wrapper) {
  margin-right: 0;
  margin-left: 20px;
}`}},{demo:{id:"components-config-provider-demo-size"},previewerProps:{title:"Component size",filename:"components/config-provider/demo/size.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import {
  Button,
  Card,
  ConfigProvider,
  DatePicker,
  Divider,
  Input,
  Radio,
  Select,
  Space,
  Table,
  Tabs,
} from 'antd';
import React, { useState } from 'react';
const { TabPane } = Tabs;
const App = () => {
  const [componentSize, setComponentSize] = useState('small');
  return (
    <>
      <Radio.Group
        value={componentSize}
        onChange={(e) => {
          setComponentSize(e.target.value);
        }}
      >
        <Radio.Button value="small">Small</Radio.Button>
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="large">Large</Radio.Button>
      </Radio.Group>
      <Divider />
      <ConfigProvider componentSize={componentSize}>
        <Space
          size={[0, 16]}
          style={{
            width: '100%',
          }}
          direction="vertical"
        >
          <Input />
          <Tabs defaultActiveKey="1">
            <TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
          <Input.Search allowClear />
          <Input.TextArea allowClear />
          <Select
            defaultValue="demo"
            options={[
              {
                value: 'demo',
              },
            ]}
          />
          <DatePicker />
          <DatePicker.RangePicker />
          <Button>Button</Button>
          <Card title="Card">
            <Table
              columns={[
                {
                  title: 'Name',
                  dataIndex: 'name',
                },
                {
                  title: 'Age',
                  dataIndex: 'age',
                },
              ]}
              dataSource={[
                {
                  key: '1',
                  name: 'John Brown',
                  age: 32,
                },
                {
                  key: '2',
                  name: 'Jim Green',
                  age: 42,
                },
                {
                  key: '3',
                  name: 'Joe Black',
                  age: 32,
                },
              ]}
            />
          </Card>
        </Space>
      </ConfigProvider>
    </>
  );
};
export default App;
`,description:"<p>Config component default size.</p>"}},{demo:{id:"components-config-provider-demo-theme"},previewerProps:{title:"Theme",filename:"components/config-provider/demo/theme.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { Button, ColorPicker, ConfigProvider, Form, InputNumber } from 'antd';
import React from 'react';
const defaultData = {
  borderRadius: 6,
  colorPrimary: '#1677ff',
};
export default () => {
  const [form] = Form.useForm();
  const [data, setData] = React.useState(defaultData);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: data.colorPrimary,
          borderRadius: data.borderRadius,
        },
      }}
    >
      <Form
        form={form}
        onValuesChange={(changedValues, allValues) => {
          const colorObj = changedValues?.colorPrimary
            ? {
                colorPrimary: allValues?.colorPrimary?.toHexString(),
              }
            : {};
          setData({
            ...allValues,
            ...colorObj,
          });
        }}
        name="theme"
        initialValues={defaultData}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 20,
        }}
      >
        <Form.Item valuePropName="color" name="colorPrimary" label="Primary Color">
          <ColorPicker />
        </Form.Item>
        <Form.Item name="borderRadius" label="Border Radius">
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="submit"
          wrapperCol={{
            offset: 4,
            span: 20,
          }}
        >
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};
`,description:"<p>Modify theme by <code>theme</code> prop.</p>"}},{demo:{id:"components-config-provider-demo-prefixcls"},previewerProps:{debug:!0,title:"prefixCls",filename:"components/config-provider/demo/prefixCls.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { SmileOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Select } from 'antd';
import React, { useState } from 'react';

// Ant Design site use \`es\` module for view
// but do not replace related lib \`lib\` with \`es\`
// which do not show correct in site.
// We may need do convert in site also.
const App = () => {
  const [prefixCls, setPrefixCls] = useState('light');
  return (
    <>
      <Button
        style={{
          marginBottom: '12px',
        }}
        type="primary"
        onClick={() => setPrefixCls('dark')}
      >
        toggle prefixCls
      </Button>
      <br />
      <ConfigProvider prefixCls={prefixCls} iconPrefixCls="bamboo">
        <SmileOutlined />
        <Select
          style={{
            width: 120,
          }}
        />
      </ConfigProvider>
    </>
  );
};
export default App;
`,description:"<p>Config component and icon prefixCls.</p>"}},{demo:{id:"components-config-provider-demo-useconfig"},previewerProps:{debug:!0,title:"useConfig",filename:"components/config-provider/demo/useConfig.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Checkbox, ConfigProvider, Divider, Form, Input, Radio, Space } from 'antd';
const ConfigDisplay = () => {
  const { componentDisabled, componentSize } = ConfigProvider.useConfig();
  return (
    <>
      <Form.Item label="componentSize value">
        <Input value={componentSize} />
      </Form.Item>
      <Form.Item label="componentDisabled value">
        <Input value={String(componentDisabled)} disabled={componentDisabled} />
      </Form.Item>
    </>
  );
};
const App = () => {
  const [componentSize, setComponentSize] = useState('small');
  const [disabled, setDisabled] = useState(true);
  return (
    <div>
      <Space>
        <Radio.Group
          value={componentSize}
          onChange={(e) => {
            setComponentSize(e.target.value);
          }}
        >
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="middle">Middle</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
        <Checkbox checked={disabled} onChange={(e) => setDisabled(e.target.checked)}>
          Form disabled
        </Checkbox>
      </Space>
      <Divider />
      <ConfigProvider componentSize={componentSize}>
        <div className="example">
          <Form disabled={disabled}>
            <ConfigDisplay />
          </Form>
        </div>
      </ConfigProvider>
    </div>
  );
};
export default App;
`,description:"<p>Get the value of the parent <code>Provider</code>. Such as <code>DisabledContextProvider</code>, <code>SizeContextProvider</code>.</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)(o.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[10].value),(0,n.tZ)("th",null,e[11].value),(0,n.tZ)("th",null,e[12].value),(0,n.tZ)("th",null,e[13].value),(0,n.tZ)("th",null,e[14].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[15].value),(0,n.tZ)("td",null,e[16].value),(0,n.tZ)("td",null,e[17].value),(0,n.tZ)("td",null,e[18].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[19].value),(0,n.tZ)("td",null,e[20].value,(0,n.tZ)("code",null,e[21].value)),(0,n.tZ)("td",null,e[22].value),(0,n.tZ)("td",null,e[23].value),(0,n.tZ)("td",null,e[24].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[25].value),(0,n.tZ)("td",null,e[26].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[27].value),e[28].value,(0,n.tZ)("code",null,e[29].value),e[30].value,(0,n.tZ)("code",null,e[31].value)),(0,n.tZ)("td",null,e[32].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[33].value),(0,n.tZ)("td",null,e[34].value,(0,n.tZ)(l.Z,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",sourceType:"a"},e[35].value),e[36].value),(0,n.tZ)("td",null,e[37].value),(0,n.tZ)("td",null,e[38].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[39].value),(0,n.tZ)("td",null,e[40].value,(0,n.tZ)(l.Z,{to:"#components-config-provider-demo-direction",sourceType:"Link"},e[41].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[42].value),e[43].value,(0,n.tZ)("code",null,e[44].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[45].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[46].value),(0,n.tZ)("td",null,e[47].value,(0,n.tZ)("code",null,e[48].value),e[49].value,(0,n.tZ)("code",null,e[50].value)),(0,n.tZ)("td",null,e[51].value),(0,n.tZ)("td",null,e[52].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[53].value),(0,n.tZ)("td",null,e[54].value),(0,n.tZ)("td",null,e[55].value),(0,n.tZ)("td",null,e[56].value),(0,n.tZ)("td",null,e[57].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[58].value),(0,n.tZ)("td",null,e[59].value),(0,n.tZ)("td",null,e[60].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[61].value)),(0,n.tZ)("td",null,e[62].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[63].value),(0,n.tZ)("td",null,e[64].value,(0,n.tZ)(l.Z,{href:"http://unpkg.com/antd/locale/",sourceType:"a"},e[65].value)),(0,n.tZ)("td",null,e[66].value),(0,n.tZ)("td",null,e[67].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[68].value),(0,n.tZ)("td",null,e[69].value,(0,n.tZ)("code",null,e[70].value),e[71].value,(0,n.tZ)("code",null,e[72].value),e[73].value),(0,n.tZ)("td",null,e[74].value),(0,n.tZ)("td",null,e[75].value),(0,n.tZ)("td",null,e[76].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[77].value),(0,n.tZ)("td",null,e[78].value),(0,n.tZ)("td",null,e[79].value,(0,n.tZ)(d.Z,{previewURL:"https://user-images.githubusercontent.com/5378891/230344474-5b9f7e09-0a5d-49e8-bae8-7d2abed6c837.png",previewurl:"https://user-images.githubusercontent.com/5378891/230344474-5b9f7e09-0a5d-49e8-bae8-7d2abed6c837.png"})),(0,n.tZ)("td",null,e[80].value),(0,n.tZ)("td",null,e[81].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[82].value),(0,n.tZ)("td",null,e[83].value),(0,n.tZ)("td",null,e[84].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[85].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[86].value),(0,n.tZ)("td",null,e[87].value,(0,n.tZ)(l.Z,{to:"/components/empty/",sourceType:"Link"},e[88].value)),(0,n.tZ)("td",null,e[89].value),(0,n.tZ)("td",null,e[90].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[91].value),(0,n.tZ)("td",null,e[92].value,(0,n.tZ)(l.Z,{to:"/docs/react/customize-theme",sourceType:"Link"},e[93].value)),(0,n.tZ)("td",null,e[94].value),(0,n.tZ)("td",null,e[95].value),(0,n.tZ)("td",null,e[96].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[97].value),(0,n.tZ)("td",null,e[98].value,(0,n.tZ)("code",null,e[99].value)),(0,n.tZ)("td",null,e[100].value),(0,n.tZ)("td",null,e[101].value),(0,n.tZ)("td",null,e[102].value)))),(0,n.tZ)("h3",{id:"configproviderconfig"},(0,n.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#configproviderconfig",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"ConfigProvider.config()"),(0,n.tZ)("p",null,e[103].value,(0,n.tZ)("code",null,e[104].value),e[105].value,(0,n.tZ)("code",null,e[106].value),e[107].value,(0,n.tZ)("code",null,e[108].value),e[109].value),(0,n.tZ)(a.Z,{lang:"ts"},e[110].value),(0,n.tZ)("h3",{id:"configprovideruseconfig-530"},(0,n.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#configprovideruseconfig-530",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"ConfigProvider.useConfig() ",(0,n.tZ)("code",null,e[111].value)),(0,n.tZ)("p",null,e[112].value,(0,n.tZ)("code",null,e[113].value),e[114].value,(0,n.tZ)("code",null,e[115].value),e[116].value,(0,n.tZ)("code",null,e[117].value),e[118].value,(0,n.tZ)("code",null,e[119].value),e[120].value),(0,n.tZ)(a.Z,{lang:"jsx"},e[121].value),(0,n.tZ)(o.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[122].value),(0,n.tZ)("th",null,e[123].value),(0,n.tZ)("th",null,e[124].value),(0,n.tZ)("th",null,e[125].value),(0,n.tZ)("th",null,e[126].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[127].value),(0,n.tZ)("td",null,e[128].value),(0,n.tZ)("td",null,e[129].value),(0,n.tZ)("td",null,e[130].value),(0,n.tZ)("td",null,e[131].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[132].value),(0,n.tZ)("td",null,e[133].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[134].value),e[135].value,(0,n.tZ)("code",null,e[136].value),e[137].value,(0,n.tZ)("code",null,e[138].value)),(0,n.tZ)("td",null,e[139].value),(0,n.tZ)("td",null,e[140].value)))),(0,n.tZ)("h3",{id:"component-config"},(0,n.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#component-config",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Component Config"),(0,n.tZ)(o.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[141].value),(0,n.tZ)("th",null,e[142].value),(0,n.tZ)("th",null,e[143].value),(0,n.tZ)("th",null,e[144].value),(0,n.tZ)("th",null,e[145].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[146].value),(0,n.tZ)("td",null,e[147].value),(0,n.tZ)("td",null,e[148].value),(0,n.tZ)("td",null,e[149].value),(0,n.tZ)("td",null,e[150].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[151].value),(0,n.tZ)("td",null,e[152].value),(0,n.tZ)("td",null,e[153].value),(0,n.tZ)("td",null,e[154].value),(0,n.tZ)("td",null,e[155].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[156].value),(0,n.tZ)("td",null,e[157].value),(0,n.tZ)("td",null,e[158].value),(0,n.tZ)("td",null,e[159].value),(0,n.tZ)("td",null,e[160].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[161].value),(0,n.tZ)("td",null,e[162].value),(0,n.tZ)("td",null,e[163].value),(0,n.tZ)("td",null,e[164].value),(0,n.tZ)("td",null,e[165].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[166].value),(0,n.tZ)("td",null,e[167].value),(0,n.tZ)("td",null,e[168].value),(0,n.tZ)("td",null,e[169].value),(0,n.tZ)("td",null,e[170].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[171].value),(0,n.tZ)("td",null,e[172].value),(0,n.tZ)("td",null,e[173].value),(0,n.tZ)("td",null,e[174].value),(0,n.tZ)("td",null,e[175].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[176].value),(0,n.tZ)("td",null,e[177].value),(0,n.tZ)("td",null,e[178].value),(0,n.tZ)("td",null,e[179].value),(0,n.tZ)("td",null,e[180].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[181].value),(0,n.tZ)("td",null,e[182].value),(0,n.tZ)("td",null,e[183].value),(0,n.tZ)("td",null,e[184].value),(0,n.tZ)("td",null,e[185].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[186].value),(0,n.tZ)("td",null,e[187].value),(0,n.tZ)("td",null,e[188].value),(0,n.tZ)("td",null,e[189].value),(0,n.tZ)("td",null,e[190].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[191].value),(0,n.tZ)("td",null,e[192].value),(0,n.tZ)("td",null,e[193].value),(0,n.tZ)("td",null,e[194].value),(0,n.tZ)("td",null,e[195].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[196].value),(0,n.tZ)("td",null,e[197].value),(0,n.tZ)("td",null,e[198].value),(0,n.tZ)("td",null,e[199].value),(0,n.tZ)("td",null,e[200].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[201].value),(0,n.tZ)("td",null,e[202].value),(0,n.tZ)("td",null,e[203].value),(0,n.tZ)("td",null,e[204].value),(0,n.tZ)("td",null,e[205].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[206].value),(0,n.tZ)("td",null,e[207].value),(0,n.tZ)("td",null,e[208].value),(0,n.tZ)("td",null,e[209].value),(0,n.tZ)("td",null,e[210].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[211].value),(0,n.tZ)("td",null,e[212].value),(0,n.tZ)("td",null,e[213].value),(0,n.tZ)("td",null,e[214].value),(0,n.tZ)("td",null,e[215].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[216].value),(0,n.tZ)("td",null,e[217].value),(0,n.tZ)("td",null,e[218].value),(0,n.tZ)("td",null,e[219].value),(0,n.tZ)("td",null,e[220].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[221].value),(0,n.tZ)("td",null,e[222].value),(0,n.tZ)("td",null,e[223].value),(0,n.tZ)("td",null,e[224].value),(0,n.tZ)("td",null,e[225].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[226].value),(0,n.tZ)("td",null,e[227].value),(0,n.tZ)("td",null,e[228].value),(0,n.tZ)("td",null,e[229].value),(0,n.tZ)("td",null,e[230].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[231].value),(0,n.tZ)("td",null,e[232].value),(0,n.tZ)("td",null,e[233].value),(0,n.tZ)("td",null,e[234].value),(0,n.tZ)("td",null,e[235].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[236].value),(0,n.tZ)("td",null,e[237].value),(0,n.tZ)("td",null,e[238].value,(0,n.tZ)(l.Z,{to:"/components/form/#validatemessages",sourceType:"Link"},e[239].value),e[240].value,(0,n.tZ)("code",null,e[241].value),e[242].value,(0,n.tZ)(l.Z,{href:"https://github.com/stipsan/scroll-into-view-if-needed/tree/ece40bd9143f48caf4b99503425ecb16b0ad8249#options",sourceType:"a"},e[243].value),e[244].value),(0,n.tZ)("td",null,e[245].value),(0,n.tZ)("td",null,e[246].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[247].value),(0,n.tZ)("td",null,e[248].value),(0,n.tZ)("td",null,e[249].value),(0,n.tZ)("td",null,e[250].value),(0,n.tZ)("td",null,e[251].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[252].value),(0,n.tZ)("td",null,e[253].value),(0,n.tZ)("td",null,e[254].value),(0,n.tZ)("td",null,e[255].value),(0,n.tZ)("td",null,e[256].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[257].value),(0,n.tZ)("td",null,e[258].value),(0,n.tZ)("td",null,e[259].value),(0,n.tZ)("td",null,e[260].value),(0,n.tZ)("td",null,e[261].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[262].value),(0,n.tZ)("td",null,e[263].value),(0,n.tZ)("td",null,e[264].value),(0,n.tZ)("td",null,e[265].value),(0,n.tZ)("td",null,e[266].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[267].value),(0,n.tZ)("td",null,e[268].value),(0,n.tZ)("td",null,e[269].value),(0,n.tZ)("td",null,e[270].value),(0,n.tZ)("td",null,e[271].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[272].value),(0,n.tZ)("td",null,e[273].value),(0,n.tZ)("td",null,e[274].value),(0,n.tZ)("td",null,e[275].value),(0,n.tZ)("td",null,e[276].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[277].value),(0,n.tZ)("td",null,e[278].value),(0,n.tZ)("td",null,e[279].value),(0,n.tZ)("td",null,e[280].value),(0,n.tZ)("td",null,e[281].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[282].value),(0,n.tZ)("td",null,e[283].value),(0,n.tZ)("td",null,e[284].value),(0,n.tZ)("td",null,e[285].value),(0,n.tZ)("td",null,e[286].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[287].value),(0,n.tZ)("td",null,e[288].value),(0,n.tZ)("td",null,e[289].value),(0,n.tZ)("td",null,e[290].value),(0,n.tZ)("td",null,e[291].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[292].value),(0,n.tZ)("td",null,e[293].value),(0,n.tZ)("td",null,e[294].value),(0,n.tZ)("td",null,e[295].value),(0,n.tZ)("td",null,e[296].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[297].value),(0,n.tZ)("td",null,e[298].value),(0,n.tZ)("td",null,e[299].value),(0,n.tZ)("td",null,e[300].value),(0,n.tZ)("td",null,e[301].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[302].value),(0,n.tZ)("td",null,e[303].value),(0,n.tZ)("td",null,e[304].value),(0,n.tZ)("td",null,e[305].value),(0,n.tZ)("td",null,e[306].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[307].value),(0,n.tZ)("td",null,e[308].value),(0,n.tZ)("td",null,e[309].value),(0,n.tZ)("td",null,e[310].value),(0,n.tZ)("td",null,e[311].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[312].value),(0,n.tZ)("td",null,e[313].value),(0,n.tZ)("td",null,e[314].value),(0,n.tZ)("td",null,e[315].value),(0,n.tZ)("td",null,e[316].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[317].value),(0,n.tZ)("td",null,e[318].value),(0,n.tZ)("td",null,e[319].value),(0,n.tZ)("td",null,e[320].value),(0,n.tZ)("td",null,e[321].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[322].value),(0,n.tZ)("td",null,e[323].value),(0,n.tZ)("td",null,e[324].value),(0,n.tZ)("td",null,e[325].value),(0,n.tZ)("td",null,e[326].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[327].value),(0,n.tZ)("td",null,e[328].value),(0,n.tZ)("td",null,e[329].value),(0,n.tZ)("td",null,e[330].value),(0,n.tZ)("td",null,e[331].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[332].value),(0,n.tZ)("td",null,e[333].value),(0,n.tZ)("td",null,e[334].value),(0,n.tZ)("td",null,e[335].value),(0,n.tZ)("td",null,e[336].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[337].value),(0,n.tZ)("td",null,e[338].value),(0,n.tZ)("td",null,e[339].value),(0,n.tZ)("td",null,e[340].value),(0,n.tZ)("td",null,e[341].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[342].value),(0,n.tZ)("td",null,e[343].value,(0,n.tZ)(l.Z,{to:"/components/space",sourceType:"Link"},e[344].value)),(0,n.tZ)("td",null,e[345].value,(0,n.tZ)("code",null,e[346].value),e[347].value,(0,n.tZ)("code",null,e[348].value),e[349].value,(0,n.tZ)("code",null,e[350].value),e[351].value,(0,n.tZ)("code",null,e[352].value),e[353].value),(0,n.tZ)("td",null,e[354].value),(0,n.tZ)("td",null,e[355].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[356].value),(0,n.tZ)("td",null,e[357].value),(0,n.tZ)("td",null,e[358].value),(0,n.tZ)("td",null,e[359].value),(0,n.tZ)("td",null,e[360].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[361].value),(0,n.tZ)("td",null,e[362].value),(0,n.tZ)("td",null,e[363].value),(0,n.tZ)("td",null,e[364].value),(0,n.tZ)("td",null,e[365].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[366].value),(0,n.tZ)("td",null,e[367].value),(0,n.tZ)("td",null,e[368].value),(0,n.tZ)("td",null,e[369].value),(0,n.tZ)("td",null,e[370].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[371].value),(0,n.tZ)("td",null,e[372].value),(0,n.tZ)("td",null,e[373].value),(0,n.tZ)("td",null,e[374].value),(0,n.tZ)("td",null,e[375].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[376].value),(0,n.tZ)("td",null,e[377].value),(0,n.tZ)("td",null,e[378].value),(0,n.tZ)("td",null,e[379].value),(0,n.tZ)("td",null,e[380].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[381].value),(0,n.tZ)("td",null,e[382].value),(0,n.tZ)("td",null,e[383].value),(0,n.tZ)("td",null,e[384].value),(0,n.tZ)("td",null,e[385].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[386].value),(0,n.tZ)("td",null,e[387].value),(0,n.tZ)("td",null,e[388].value),(0,n.tZ)("td",null,e[389].value),(0,n.tZ)("td",null,e[390].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[391].value),(0,n.tZ)("td",null,e[392].value),(0,n.tZ)("td",null,e[393].value),(0,n.tZ)("td",null,e[394].value),(0,n.tZ)("td",null,e[395].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[396].value),(0,n.tZ)("td",null,e[397].value),(0,n.tZ)("td",null,e[398].value),(0,n.tZ)("td",null,e[399].value),(0,n.tZ)("td",null,e[400].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[401].value),(0,n.tZ)("td",null,e[402].value),(0,n.tZ)("td",null,e[403].value),(0,n.tZ)("td",null,e[404].value),(0,n.tZ)("td",null,e[405].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[406].value),(0,n.tZ)("td",null,e[407].value),(0,n.tZ)("td",null,e[408].value),(0,n.tZ)("td",null,e[409].value),(0,n.tZ)("td",null,e[410].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[411].value),(0,n.tZ)("td",null,e[412].value),(0,n.tZ)("td",null,e[413].value),(0,n.tZ)("td",null,e[414].value),(0,n.tZ)("td",null,e[415].value)))),(0,n.tZ)("h2",{id:"faq"},(0,n.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,n.tZ)("h4",{id:"how-to-contribute-a-new-language"},(0,n.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-contribute-a-new-language",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"How to contribute a new language?"),(0,n.tZ)("p",null,e[416].value,(0,n.tZ)(l.Z,{to:"/docs/react/i18n#adding-newplanguage",sourceType:"Link"},e[417].value),e[418].value),(0,n.tZ)("h4",{id:"date-related-components-locale-is-not-working"},(0,n.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#date-related-components-locale-is-not-working",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Date-related components locale is not working?"),(0,n.tZ)("p",null,e[419].value,(0,n.tZ)(l.Z,{to:"/docs/react/faq#date-related-components-locale-is-not-working",sourceType:"Link"},e[420].value)),(0,n.tZ)("h4",{id:"modal-throw-error-when-setting-getpopupcontainer"},(0,n.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#modal-throw-error-when-setting-getpopupcontainer",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Modal throw error when setting ",(0,n.tZ)("code",null,e[421].value),"?"),(0,n.tZ)("p",null,e[422].value,(0,n.tZ)(l.Z,{href:"https://github.com/ant-design/ant-design/issues/19974",sourceType:"a"},e[423].value)),(0,n.tZ)("p",null,e[424].value,(0,n.tZ)("code",null,e[425].value),e[426].value,(0,n.tZ)("code",null,e[427].value),e[428].value,(0,n.tZ)(l.Z,{href:"https://github.com/afc163/feedback-antd/commit/3e4d1ad1bc1a38460dc3bf3c56517f737fe7d44a",sourceType:"a"},e[429].value),e[430].value),(0,n.tZ)(a.Z,{lang:"diff"},e[431].value),(0,n.tZ)("h4",{id:"why-cant-configprovider-props-like-prefixcls-and-theme-affect-reactnode-inside-messageinfo-notificationopen-modalconfirm"},(0,n.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#why-cant-configprovider-props-like-prefixcls-and-theme-affect-reactnode-inside-messageinfo-notificationopen-modalconfirm",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Why can't ConfigProvider props (like ",(0,n.tZ)("code",null,e[432].value)," and ",(0,n.tZ)("code",null,e[433].value),") affect ReactNode inside ",(0,n.tZ)("code",null,e[434].value),", ",(0,n.tZ)("code",null,e[435].value),", ",(0,n.tZ)("code",null,e[436].value),"?"),(0,n.tZ)("p",null,e[437].value,(0,n.tZ)("code",null,e[438].value),e[439].value,(0,n.tZ)("code",null,e[440].value),e[441].value,(0,n.tZ)("code",null,e[442].value),e[443].value,(0,n.tZ)("code",null,e[444].value),e[445].value,(0,n.tZ)("code",null,e[446].value),e[447].value),(0,n.tZ)("h4",{id:"locale-is-not-working-with-vite-in-production-mode"},(0,n.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#locale-is-not-working-with-vite-in-production-mode",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Locale is not working with Vite in production mode?"),(0,n.tZ)("p",null,e[448].value,(0,n.tZ)(l.Z,{href:"https://github.com/ant-design/ant-design/issues/39045",sourceType:"a"},e[449].value)),(0,n.tZ)("p",null,e[450].value,(0,n.tZ)("code",null,e[451].value),e[452].value,(0,n.tZ)("code",null,e[453].value),e[454].value,(0,n.tZ)("code",null,e[455].value),e[456].value))))}u.default=s}}]);
