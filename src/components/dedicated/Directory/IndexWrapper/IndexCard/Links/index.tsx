import React, { MouseEvent, useRef } from 'react';
import { Icon } from 'semantic-ui-react';
import cx from 'classnames';

import styles from './Links.module.scss';
import { List, ListItem, ListItemText, Divider } from '@material-ui/core';

const Links = ({ source }) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const handleDrawer = (event: MouseEvent<HTMLDivElement | HTMLElement>): void => {
    const linkHeight = source.length * 50 + 34;
    if (typeof drawerRef.current === 'object') {
      const drawerWrap = drawerRef.current;
      const drawerHeightToggle = drawerWrap.clientHeight === 34 ? `${linkHeight}px` : '34px';
      drawerWrap.style.height = drawerHeightToggle;
      drawerWrap.style.transition = 'all 0.5s';
    }
  };

  const renderLinks = () => {
    const _links = !!source.length && (
      <div ref={drawerRef} className={styles.linkDrawer}>
        <div className={styles.iconWrapper} onClick={handleDrawer}>
          <Icon className={cx('linkify')} />
        </div>
        <List component="nav" aria-label="mailbox folders">
          {source.map((item, index) => (
            <a href={item} key={index}>
              <ListItem button>
                <Divider orientation="vertical" flexItem style={{ marginRight: '0.5rem' }} />
                <ListItemText primary={`${index + 1}`} />
              </ListItem>
            </a>
          ))}
        </List>
      </div>
    );
    return _links;
  };

  return <div className={styles.wrapper}>{renderLinks()}</div>;
};

export default Links;
