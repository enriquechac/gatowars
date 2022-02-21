import React from 'react'
import { UserShortInfo } from './UserShortInfo'
import style from '../styles/general.module.css'

export const LeftPanel = () => {
  return (
		<div className={style.leftPanelContainer}>
			<UserShortInfo />
    </div>
  )
}
