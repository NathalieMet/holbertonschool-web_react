import React from 'react'
import img1 from '../assets/holberton-logo.jpg'
import { StyleSheet, css } from 'aphrodite'

export default function Header() {
	return (
		<header className={css(styles.AppHeader)}>
      <div className={css(styles.headerContent)}>
        <img src={img1} alt="Logo" />
        <h1 className={css(styles.headerContentH1)}>School dashboard</h1>
      </div>
			<div className={css(styles.trait)}></div>
    </header>
  );
}

const styles = StyleSheet.create({
AppHeader: {
	display: 'flex',
	justifyContent: 'LEFT',
	flexDirection: 'column'
  },

  headerContent: {
	display: 'flex',
	alignItems: 'center'
  },

  headerContentH1: {
	color: '#E0354B',
	fontSize: '50px'
  },

  trait: {
	borderBottom: '5px solid #E0354B',
	width: '100%',
	marginTop: '5px',
	marginBottom: '2em'
  }
});
