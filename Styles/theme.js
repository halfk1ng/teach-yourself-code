export default {
  useCustomProperties: true,
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#1841D3",
    secondary: "#E94200",
    accent: "#00BB61"
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit"
  },
  styles: {
    root: {
      fontFamily: "body",
      color: "text",
      bg: "primary"
    },
    h1: {
      fontSize: [4, 5, 6],
      color: "primary"
    },
    a: {
      color: "primary",
      textDecoration: "none",
      ":hover": {
        color: "secondary",
        textDecoration: "underline"
      }
    },
    buttons: {
      primary: {
        color: "text",
        bg: "secondary"
      }
    }
  }
};
