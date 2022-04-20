import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Kirish" {...a11yProps(0)} />
          <Tab label="Ro’yhattan o’tish" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <input className="EnterEmail" type="text" placeholder="E-mail kiriting"></input><br />
        <input className="EnterPassword" type="password" placeholder="Parolingizni kiriting"></input>
        <div className="remindPassword">
          <p>Parolni eslatish</p>
        </div>
        <button>Kirish</button>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className='mainBlock'>
          <div className='nameBlock'>
            <p>Ismingiz</p><br />
            <input type="text" placeholder="Abdusattor" />
          </div>

          <div className='surnameBlock'>
            <p>Familiyangiz</p>
            <input type="text" placeholder="Mirsaidov" />
          </div>
        </div>

        <div className='jobBlock'>
          <select>
            <option value="translater">Tarjimon</option>
            <option value="gid">Gid</option>
            <option selected value="writer">Yozuvchi</option>
            <option value="copywriter">Kopirayter</option>

          </select>

        </div>

        <div className='emailBlock'>
          <input type="text" placeholder="adminov@gids.uz" />
        </div>

        <div>
          <p>Parolingizni kiriting</p>
          <input type="password" placeholder='password' />

        </div>

        <div>
          <p>Parolingizni tasdiqlang</p>
          <input type="password" placeholder='check password' /><br /><br />
          <button>Ro‘yhattan o’tish</button>

        </div>

      </TabPanel>
    </Box>
  );
}

