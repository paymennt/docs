import React from 'react';
import Admonition from '@theme-original/Admonition';
import CustomInfoIcon from '@site/static/img/custom-info.svg';
import CustomNoteIcon from '@site/static/img/custom-note.svg';
import CustomTipIcon from '@site/static/img/custom-tip.svg';
import CustomWarningIcon from '@site/static/img/custom-warning.svg';

export default function AdmonitionWrapper(props) {
  if (props.type == 'note') {
    return <Admonition icon={<CustomNoteIcon />} {...props} />;
  }
  if (props.type == 'info') {
    return <Admonition icon={<CustomInfoIcon />} {...props} />;
  }
  if (props.type == 'tip') {
    return <Admonition icon={<CustomTipIcon />} {...props} />;
  }
  if (props.type == 'warning') {
    return <Admonition icon={<CustomWarningIcon />} {...props} />;
  }
  
  return <Admonition title="My Custom Admonition Title" {...props} />;
}
