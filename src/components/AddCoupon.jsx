import { Card, CardBody, Collapse, Typography } from "@material-tailwind/react";
import React from "react";

const AddCoupon = ({open}) => {
  return (
    <Collapse open={open}>
      <Card className="my-4 mx-auto w-8/12 shadow-none">
        <CardBody>
          <Typography>
            Use our Tailwind CSS collapse for your website. You can use if for
            accordion, collapsible items and much more.
          </Typography>
        </CardBody>
      </Card>
    </Collapse>
  );
};

export default AddCoupon;
