import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import styles from './Homepage.scss';

export default class Homepage extends Component {
  render() {
    console.log(styles.btn);
    return (
      <div className={styles.container}>
        <Button className={styles.btn}>lalalaa</Button>
        <p> Welcome to Homepage </p>
      </div>
    );
  }
}