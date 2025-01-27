// Tab.js
import React, { useContext } from 'react';
import { TabsContext } from './Tabs';

const Tab = ({ children, index }) => {
    const { activeTab, setActiveTab } = useContext(TabsContext);

    const handleClick = () => {
        setActiveTab(index);
    };

    return (
        <button
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

export default Tab;