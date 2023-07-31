import React, { useState } from 'react';
import { ExpandMore } from '@material-ui/icons';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import './Blog.css';

const Techaccordion=(props)=>{
    const [expandedPanel, setExpandedPanel] = useState(false);

    const handleAccordionChange = (panel) => (event, isExpanded) => {
      console.log({ event, isExpanded });
      setExpandedPanel(isExpanded ? panel : false);
    };
    
    return(
<>

<div className='accordian'>
<Accordion    expanded={expandedPanel === 'panel1'} onChange={handleAccordionChange('panel1')} style={{width:'100%',borderRadius:'30px 50px 15px',marginBottom:'10px',fontWeight:'700',color:'black'}}>
<span>
<AccordionSummary style={{border:'3px solid #3ec5ba',borderRadius:'30px 50px 15px',fontSize:'20px',paddingLeft:'30%'}} expandIcon={<ExpandMore />}>
 {props.title}
</AccordionSummary>
</span>
<AccordionDetails style={{textAlign:'center'}}>
 <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
  sit amet blandit leo lobortis eget.</p>
</AccordionDetails>

</Accordion>
     
</div>
</>
    );
}

export default Techaccordion;