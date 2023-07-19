import { FaTimes } from "react-icons/fa";
import Modal from "../Modal";
import Detail from "./Detail";
import LineChartPatient from "../LineChart";

import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
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

CustomTabPanel.propTypes = {
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

const DetailPatient = ({ setOpenModal, info }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Modal>
      <div className="relative h-[85vh] w-[900px] overflow-auto rounded-lg bg-white py-16 px-8">
        <button
          className="absolute top-4 left-4 border-transparent bg-transparent text-2xl text-red-900"
          onClick={() => setOpenModal(false)}
        >
          <FaTimes />
        </button>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Thông tin" {...a11yProps(0)} />
              <Tab label="Tin nhắn" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <h1 className="hidden text-center text-2xl font-bold tracking-wide md:block">
              Thông tin bệnh nhân
            </h1>
            <div className="mt-12 flex flex-col items-center">
              <div className="avatar">
                <h2 className="uppercase">{info.firstName[0]}</h2>
              </div>
            </div>
            <Detail info={info} />
            <LineChartPatient />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Item Two
          </CustomTabPanel>
        </Box>
      </div>
    </Modal>
  );
};

export default DetailPatient;
