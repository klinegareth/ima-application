import React, { useState } from 'react'
import css from './Layout.module.css'

const Layout = React.memo(function Layout({children}) {
	return (
		<div className={css.container}>
			<div className={css.content}>
			{children}
			</div>
		</div>
  		)
	}
);

export default Layout