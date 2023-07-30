import WorldView from './components/world_view';
import { WorldViewSidebar } from "./components/sidebar";

import classNames from 'classnames';
import styles from '@styles/globals.module.scss'
//import styles from '@styles/WorldView/world_view.module.scss'



// TODO: Not sure if this is needed
export const revalidate = 0;


export default async function World() {
    return (
        <div className={classNames(styles.landingPage, styles.sideBySide, styles.relative)}>
            <WorldViewSidebar />
            <WorldView />
        </div>
    );
}