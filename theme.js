import Provider from "./Provider";

const montserrat = "'Montserrat', system-ui,  sans-serif";
const teal = "#007A75";
const slate = "#1B0458";

export default {
  googleFont:
    "https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap",
  fonts: {
    body: montserrat,
    heading: montserrat,
    monospace: "Menlo, monospace"
  },
  colors: {
    dark: slate,
    bright: teal,
    headerFooterBackground: "white",
    text: slate,
    background: "white",
    link: teal,
    heading: slate
  },
  styles: {
    // Slide: {
    //   '*': {
    //     margin: '0'
    //   },
    //   '* + *': {
    //     marginTop: '2rem'
    //   }
    // },
    img: {
      maxWidth: '70vw',
      maxHeight: '50vh',
      margin: '0 auto',
      marginBottom: '2rem'
    },
    h1: {
      textAlign: 'center'
    },
    h2: {
      textAlign: 'center'
    },
    p: {
      textAlign: 'center',
      fontSize: '70%'
    },
    li: {
      marginBottom: '1em',
      fontSize: '70%'
    },
  },
};
