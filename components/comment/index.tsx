import * as React from 'react';
import Tooltip from '../tooltip';

export interface CommentProps {
  /** List of action items rendered below the comment content */
  actions?: Array<React.ReactNode>;
  /** The element to display as the comment author. */
  author: string;
  /** The element to display as the comment avatar - generally an antd Avatar */
  avatar: React.ReactNode;
  /** The main content of the comment */
  children: React.ReactNode;
  /** Additional style for the comment content */
  contentStyle?: React.CSSProperties;
  /** Additional style for the comment head */
  headStyle?: React.CSSProperties;
  /** Optional ID for the comment */
  id?: string;
  /** Additional style for the comment inner wrapper */
  innerStyle?: React.CSSProperties;
  /** Comment prefix className defaults to '.ant-comment' */
  prefixCls?: string;
  /** Additional style for the comment */
  style?: React.CSSProperties;
  /** A time element containing the time to be displayed */
  time?: React.ReactNode;
  /** A time element to be displayed as the time tooltip  */
  tooltipTime?: React.ReactNode;
}

export default class Comment extends React.Component<CommentProps, {}> {
  getAction(actions: React.ReactNode[]) {
    if (!actions || !actions.length) {
      return null;
    }
    const actionList = actions.map((action, index) => (
        <li key={`action-${index}`}>
          <span>{action}</span>
        </li>
      ),
    );
    return actionList;
  }

  render() {
    const {
      actions,
      author,
      avatar,
      children,
      contentStyle = {},
      headStyle = {},
      innerStyle = {},
      prefixCls = 'ant-comment',
      style = {},
      time,
      tooltipTime,
      ...otherProps
    } = this.props;

    const avatarDom = typeof avatar === 'string'
      ? <img src={avatar} />
      : avatar;

    let timeDom;
    if (time) {
      timeDom = <span className={`${prefixCls}-header-author-time`}>{time}</span>
    }

    if (time && tooltipTime) {
      timeDom = (
        <Tooltip title={tooltipTime}>
          <span className={`${prefixCls}-header-author-time`}>{time}</span>
        </Tooltip>
      )
    }

    const head = (
      <div className={`${prefixCls}-header`} style={headStyle}>
        <span className={`${prefixCls}-header-avatar`}>
          {avatarDom}
        </span>
        <div className={`${prefixCls}-header-author`}>
          <span className={`${prefixCls}-header-author-name`}>
            {author}
          </span>
          {timeDom}
        </div>
      </div>
    );

    const actionDom = actions && actions.length
      ? <ul className={`${prefixCls}-actions`}>{this.getAction(actions)}</ul>
      : null;

    const content = (
      <div className={`${prefixCls}-content`} style={contentStyle}>
        <div className={`${prefixCls}-content-detail`}>
          {children}
        </div>
        {actionDom}
      </div>
    );

    return (
      <div {...otherProps} className={prefixCls} style={style}>
        <div className={`${prefixCls}-inner`} style={innerStyle}>
          {head}
          {content}
        </div>
      </div>
    );
  }
}
