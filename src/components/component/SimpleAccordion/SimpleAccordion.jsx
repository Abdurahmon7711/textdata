import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./SimpleAccordion.css"

export default function SimpleAccordion() {
  return (
    <div className='akardion'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='Typography'>Registratsiya be’pulmi?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='Typography2'>
            Ha!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='Typography'>Mijoz qanaday qilib topsam bo‘ladi?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='Typography2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates rerum veniam nobis, aliquid ullam mollitia ipsum ratione ab totam! Molestiae.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className='Typography'>“Tekshirilgan” belgisini qanday qilib olsam bo’ladi?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='Typography2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className='Typography'>Profilga qayerdan kirsam bo‘ladi?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='Typography2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
