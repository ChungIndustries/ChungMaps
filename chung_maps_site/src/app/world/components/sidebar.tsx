'use client'

import { useState } from 'react';
import ExplorerControls from './explorer_controls';
import WorldViewControls from './world_view_controls';

import classNames from 'classnames';
import styles from '@styles/WorldView/sidebar.module.scss'


export function WorldViewSidebar() {
    const [collapsed, setCollapsed] = useState(true);


    return (
        <aside className={classNames(styles.sidebar, {[styles.collapsed]: collapsed})}>
            <WorldViewControls />
            <ExplorerControls />
        </aside>
    );
}