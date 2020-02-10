import { Box } from "rebass";

const View = ({ children }) => (
  <Box
    className="main-view"
    width="100%"
    height="100%"
    padding="1"
    margin="1"
    backgroundColor="background"
  >
    {children}
  </Box>
);

export default View;
