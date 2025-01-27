// TabPanel.js
import React, { useContext } from 'react';
import { TabsContext } from './Tabs';

const TabPanel = ({ children, index }) => {
    const { activeTab } = useContext(TabsContext);

    return activeTab === index ? <div className="tab-panel">{children}</div> : null;
};

export default TabPanel;