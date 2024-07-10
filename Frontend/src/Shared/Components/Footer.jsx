// import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  // can we do array of objects and then iterate over it ?
  // const Footer = [
  //   {
  //     company: [
  //       "About",
  //       "Privacy Policy",
  //       "Terms&Conditions",
  //       "Partners",
  //       "Contact",
  //     ],
  //   },
  //   { resources: ["Blog", "Tools", "Support"] },
  //   { Product: ["Home", "Career", "Teams"] },
  // ];

  // const footer = {
  //   company: [
  //     "About",
  //     "Privacy Policy",
  //     "Terms&Conditions",
  //     "Partners",
  //     "Contact",
  //   ],
  //   resources: ["Blog", "Tools", "Support"],
  //   Product: ["Home", "Career", "Teams"],
  // };
  const company = [
    "About",
    "Privacy Policy",
    "Terms&Conditions",
    "Partners",
    "Contact",
  ];
  const resources = ["Blog", "Tools", "Support"];
  const Product = ["Home", "Career", "Teams"];
  return (
    <div>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid item xs={6}>
          <div
            style={{
              backgroundColor: "#1b2833",
              height: "300px",
              width: "100%",
              border: "2px solid grey",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "20px",
            }}
          >
            <div>
              <div style={{ marginBottom: "20px", width: "80%" }}>
                <Typography color="white" variant="h7">
                  <LocalMallIcon /> CoolName+
                </Typography>
              </div>
              <div style={{ width: "80%" }}>
                <Typography variant="h6" color="white">
                  Style Flows Here: Your Ultimate Fashion Destination! Explore
                  Trendsetting Collections, Shop the Latest Looks, and Let Your
                  Fashion Flow with Us!
                </Typography>
              </div>
              <div style={{ marginTop: "20px", width: "80%" }}>
                <Typography color="white" variant="h7">
                  <EmailOutlinedIcon /> slimShady@gmail.com
                </Typography>
              </div>
            </div>
            <div style={{ width: "80%" }}>
              <Typography color="white" variant="body2">
                © 2024 All rights reserved.
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div
            style={{
              backgroundColor: "#1b2833",
              height: "300px",
              width: "94%",
              border: "2px solid grey",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div style={{ marginBottom: "20px", width: "80%" }}>
                {company.map((valCompany, index) => (
                  <Typography color="white" key={index}>
                    {valCompany}
                  </Typography>
                ))}
              </div>

              <div style={{ width: "80%" }}>
                <div style={{ marginBottom: "20px", width: "80%" }}>
                  {resources.map((valResources, index) => (
                    <Typography color="white" key={index}>
                      {valResources}
                    </Typography>
                  ))}
                </div>
              </div>
              <div style={{ width: "80%" }}>
                <div style={{ marginBottom: "20px", width: "80%" }}>
                  {Product.map((valResources, index) => (
                    <Typography color="white" key={index}>
                      {valResources}
                    </Typography>
                  ))}
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              {/* <div> */}
              <Typography color="white">© 2024 All rights reserved.</Typography>
              {/* </div> */}
              <div>
                <IconButton >
                  <Tooltip title="Instagram">
                    <InstagramIcon style={{color:'white'}}  alt="Remy Sharp" />
                  </Tooltip>
                </IconButton>
                <IconButton>
                  <Tooltip title="X">
                    <XIcon style={{color:'white'}} alt="Remy Sharp" />
                  </Tooltip>
                </IconButton>
                <IconButton>
                  <Tooltip title="LinkedIn">
                    <LinkedInIcon style={{color:'white'}} alt="Remy Sharp" />
                  </Tooltip>
                </IconButton>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Footer;
