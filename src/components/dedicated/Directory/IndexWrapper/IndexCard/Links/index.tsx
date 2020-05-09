import React, { MouseEvent, useState } from 'react';
import { Icon } from 'semantic-ui-react';
import classnames from 'classnames';

import styles from './Links.module.scss';
import { List, ListItem, ListItemText, Divider } from '@material-ui/core';

const Links = ({ source }) => {
  const [drawer, setDrawer] = useState(false);
  const handleDrawer = (event: MouseEvent<HTMLDivElement | HTMLElement>): void => {
    setDrawer(!drawer);
  };

  const renderLinks = () => {
    const _links = !!source ? (
      <div onClick={handleDrawer} className={classnames(styles.linkDrawer, drawer && styles.open)}>
        <List component="nav" aria-label="mailbox folders">
          {source.map((item, index) => (
            // <a href={item} key={index}>
            <ListItem button>
              <Icon className="linkify" />
              <Divider orientation="vertical" flexItem style={{ marginRight: '0.5rem' }} />
              <ListItemText primary={`${index + 1}`} />
            </ListItem>
            // </a>
          ))}
        </List>
      </div>
    ) : (
      <div>
        <hr />
      </div>
    );
    return _links;
  };

  return <div className={styles.wrapper}>{renderLinks()}</div>;
};

export default Links;
