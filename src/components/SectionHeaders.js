// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { Grid, Typography } from "@material-ui/core";

// const backgroundImage =
//   "https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80";

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: "flex",
//     overflow: "hidden",
//     backgroundColor: theme.palette.secondary.light
//   },
//   layoutBody: {
//     marginTop: theme.spacing.unit * 15,
//     marginBottom: theme.spacing.unit * 30,
//     display: "flex",
//     position: "relative"
//   },
//   item: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     padding: `0px ${theme.spacing.unit * 5}px`
//   },
//   image: {
//     height: 55
//   },
//   title: {
//     marginTop: theme.spacing.unit * 5,
//     marginBottom: theme.spacing.unit * 5
//   },
//   beach: {
//     pointerEvents: "none",
//     position: "absolute",
//     top: -180
//   }
// }));

// export default function SectionHeaders() {
//   const classes = useStyles();
//   return (
//     <div className={classes.root}>
//       <img src={backgroundImage} className={classes.beach} alt="beach" />
//       <Grid container spacing={40}>
//         <Grid item xs={12} md={4}>
//           <div className={classes.item}>
//             <img
//               className={classes.image}
//               src="/static/themes/onepirate/productValues1.svg"
//               alt="suitcase"
//             />
//             <Typography variant="h6" className={classes.title}>
//               The perfect date night
//             </Typography>
//             <Typography variant="h5">
//               {
//                 "If you and your spouse of friends are struggling to thihnk of a date night idea"
//               }
//               {
//                 "you're in the right spot. We help you decide on the perfect day/night to enjoy with your loved ones"
//               }
//             </Typography>
//           </div>
//         </Grid>
//         <Grid item xs={12} md={4}>
//           <div className={classes.item}>
//             <img
//               className={classes.image}
//               src="/static/themes/onepirate/productValues2.svg"
//               alt="graph"
//             />
//             <Typography variant="h6" className={classes.title}>
//               New experiences
//             </Typography>
//             <Typography variant="h5">
//               {
//                 "Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… "
//               }
//               {"your Sundays will not be alike."}
//             </Typography>
//           </div>
//         </Grid>
//         <Grid item xs={12} md={4}>
//           <div className={classes.item}>
//             <img
//               className={classes.image}
//               src="/static/themes/onepirate/productValues3.svg"
//               alt="clock"
//             />
//             <Typography variant="h6" className={classes.title}>
//               Exclusive rates
//             </Typography>
//             <Typography variant="h5">
//               {"By registering, you will access specially negotiated rates "}
//               {"that you will not find anywhere else."}
//             </Typography>
//           </div>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }
