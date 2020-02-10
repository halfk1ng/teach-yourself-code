import { Box } from "rebass";

const View = ({ children }) => (
  <Box
    width="100%"
    padding="1"
    margin="1"
    backgroundColor="white"
    height="100vh"
    overflow="scroll"
  >
    {children}
  </Box>
);

export default View;
