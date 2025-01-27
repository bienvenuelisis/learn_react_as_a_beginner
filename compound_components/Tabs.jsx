// Tabs.js
import React, { createContext, useState } from 'react';

// Create a Context for the Tabs component
const TabsContext = createContext();

const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0);

    const value = { activeTab, setActiveTab };

    return (
        <TabsContext.Provider value={value}>
            <div className="tabs">{children}</div>
        </TabsContext.Provider>
    );
};

export default Tabs;