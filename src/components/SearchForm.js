import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

export default function SearchForm() {
  return (
    <React.Fragment>
      <Container>
        <Typography variant="h6" gutterBottom>
          Tell us what kind of date you fancy?
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Indoor/Outdoor"
              name="Indoor/Outdoor"
              label="Indoor/Outdoor"
              fullWidth
              autoComplete="Indoor/Outdoor"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="Day/Night"
              name="Day/Night"
              label="Day/Night"
              fullWidth
              autoComplete="Day/Night"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="price"
              name="price"
              label="Price"
              fullWidth
              autoComplete="price"
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="shipping country"
            />
          </Grid> */}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
