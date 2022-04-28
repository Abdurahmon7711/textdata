import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "../../../components/component/buttnBg/Button";
import { Link } from "react-router-dom";
import '../authorization/register.scss'

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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "green" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
            <Tab className="tabs" label="Kirish" {...a11yProps(0)} />
            <Tab className="tabs"  label="Ro’yhattan o’tish" {...a11yProps(1)} />
      
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <input
          className="EnterEmail"
          type="text"
          placeholder="E-mail kiriting"
        ></input>
        <br />
        <input
          className="EnterPassword"
          type="password"
          placeholder="Parolingizni kiriting"
        ></input>
        <p className="remindPassword">Parolni eslatish</p>
        <Link to="/">
          <Button button="Kirish" />
        </Link>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="mainBlock">
          <div>
            <input className="nameBlock" type="text" placeholder="Ismingiz" />
          </div>

          <div>
            <input
              className="surnameBlock"
              type="text"
              placeholder="Familiyangiz"
            />
          </div>
        </div>

        <select className="jobBlock">
          <option value="translater">Tarjimon</option>
          <option value="gid">Gid</option>
          <option selected value="writer">
            Yozuvchi
          </option>
          <option value="copywriter">Kopirayter</option>
        </select>

        <div>
          <input
            className="emailBlock"
            type="text"
            placeholder="adminov@gids.uz"
          />
        </div>

        <div>
          <input
            className="EnterPassword"
            type="password"
            placeholder="Enter Password"
          />
        </div>

        <div>
          <input
            className="EnterPassword"
            type="password"
            placeholder="Check password"
          />
          <br />
          <br />
          <Link to="/">
            <Button button="Ro‘yhattan o’tish" />
          </Link>
        </div>
      </TabPanel>
    </Box>
  );
}
