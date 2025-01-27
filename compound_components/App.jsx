// App.js
import React from 'react';
import Tab from './Tab';
import TabList from './TabList';
import TabPanel from './TabPanel';
import Tabs from './Tabs';
import './styles.css'; // Import your CSS styles

const App = () => {
    return (
        <div className="app">
            <h1>Compound Components Example: Tabs</h1>
            <Tabs>
                <TabList>
                    <Tab index={0}>Tab 1</Tab>
                    <Tab index={1}>Tab 2</Tab>
                    <Tab index={2}>Tab 3</Tab>
                </TabList>
                <TabPanel index={0}>
                    <h2>Content for Tab 1</h2>
                    <p>This is the content for the first tab.</p>
                </TabPanel>
                <TabPanel index={1}>
                    <h2>Content for Tab 2</h2>
                    <p>This is the content for the second tab.</p>
                </TabPanel>
                <TabPanel index={2}>
                    <h2>Content for Tab 3</h2>
                    <p>This is the content for the third tab.</p>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default App;