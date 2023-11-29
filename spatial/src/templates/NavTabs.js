import React, { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


function NavTabs(props) {
    const { sections } = props
    const [value, setValue] = useState('one');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <Toolbar
        component="nav"
        variant="dense"

      >
        <Box sx={{ width: '100%' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
            variant="fullWidth"
          
          >
            {sections.map((section) => (
            <Tab
              value={section.value}
              label={section.title}
            >
            </Tab>
          ))}

          </Tabs>
        </Box>
        
    </Toolbar>
        </React.Fragment>
    )

}
    
export default NavTabs