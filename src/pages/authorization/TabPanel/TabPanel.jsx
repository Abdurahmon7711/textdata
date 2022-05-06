import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "../../../components/component/buttnBg/Button";
import { Link } from "react-router-dom";
import "../authorization/register.scss";
import BasicTextFields from "../../../components/component/textField/BasicTextFields";

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

export default function BasicTabs(label) {
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
          <Tab className="tabs" label="Ro’yhattan o’tish" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="EnterEmail">
          <BasicTextFields label="E-mail ni kiriting" />
        </div>
        <div className="EnterPassword">
          <BasicTextFields label="Parolingizni kiriting" textType="password" />
        </div>
        <p className="remindPassword">Parolni eslatish</p>
        <div className="enterBtn">
          <Link to="/">
            <Button button="Kirish" />
          </Link>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="mainBlock">
          <div className="nameBlock">
            <BasicTextFields label="Ismingiz" />
          </div>

          <div className="surNameBlock">
            <BasicTextFields label="Familiyangiz" />
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
        <div className="EnterEmail">
          <BasicTextFields label="E-mail ni kiriting" />
        </div>

        <div className="EnterPassword">
          <BasicTextFields textType="password" label="Parolingizni kiriting" />
        </div>
        <div className="EnterPassword">
          <BasicTextFields
            textType="password"
            label="Parolingizni tasdiqlang"
          />
        </div>
        <div>
          <div className="registerBtn">
            <Link to="/">
              <Button button="Ro‘yhattan o’tish" />
            </Link>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
