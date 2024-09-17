import { Box, Button, Typography, Divider } from "@mui/material";
const TermsAndConditions = () => {
  return (
    <>
      <Box display={"flex"} marginLeft={'1rem'}>
        <Typography variant="h4">
          <strong> Terms and Conditions</strong>
        </Typography>
      </Box>
        <Divider />
      <Box marginLeft={"3rem"} marginTop={0} paddingTop={0}>
        <Typography variant="body2" marginTop="0.5rem">
          1. <strong>Introduction</strong>:
          <Typography>
            These terms govern the use of our clothing e-commerce platform. By
            purchasing from our site, you agree to comply with the following
            conditions.
          </Typography>
        </Typography>
        <Typography variant="body2" marginTop="0.5rem">
          2. <strong>Product Use</strong>:
          <Typography>
            Our products are intended for personal, non-commercial use. Any
            resale or redistribution of products purchased on this platform is
            prohibited.
          </Typography>
        </Typography>
        <Typography variant="body2" marginTop="0.5rem">
          3. <strong>Pricing and Payments</strong>:
          <Typography>
            All prices listed are in INR and include applicable taxes. Payment
            must be made in full at the time of purchase using the available
            payment methods.
          </Typography>
        </Typography>
        <Typography variant="body2" marginTop="0.5rem">
          4. <strong>Shipping and Delivery</strong>:
          <Typography>
            We aim to deliver your products within the estimated delivery time.
            However, delays may occur due to unforeseen circumstances. Customers
            will be notified of any delays or changes.
          </Typography>
        </Typography>
        <Typography variant="body2" marginTop="0.5rem">
          5. <strong>Return and Exchange Policy</strong>:
          <Typography>
            Products can be returned or exchanged within 30 days of purchase,
            provided they are in original condition with all tags intact.
            Refunds will be processed within 7-10 business days.
          </Typography>
        </Typography>
        <Typography variant="body2" marginTop="0.5rem">
          6. <strong>Limitation of Liability</strong>:
          <Typography>
            Our liability is limited to the price of the product purchased. We
            are not responsible for any indirect, incidental, or consequential
            damages arising from the use of our products.
          </Typography>
        </Typography>
        <Typography variant="body2" marginTop="0.5rem">
          7. <strong>Size and Fit</strong>:
          <Typography>
            While we strive to provide accurate sizing information, individual
            fit may vary. We recommend reviewing our size chart before making a
            purchase.
          </Typography>
        </Typography>
        <Typography variant="body2" marginTop="0.5rem">
          8. <strong>User Data and Privacy</strong>:
          <Typography>
            We value your privacy. Any personal data provided during the
            checkout process will be stored securely and used only for order
            fulfillment and improving your shopping experience.
          </Typography>
        </Typography>
        <Typography variant="body2" marginTop="0.5rem">
          9. <strong>Changes to Terms</strong>:
          <Typography>
            We reserve the right to update or modify these terms at any time.
            Users will be notified of significant changes via email or an
            announcement on the website.
          </Typography>
        </Typography>
        <Typography variant="body2" marginTop="0.5rem">
          10. <strong>Governing Law</strong>:
          <Typography>
            These terms are governed by the laws of the region or country in
            which the company is based. Any disputes will be subject to local
            jurisdiction.
          </Typography>
        </Typography>
      </Box>
    </>
  );
};
export default TermsAndConditions;
