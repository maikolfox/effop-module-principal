import React from "react";
import { Grid, InputLabel } from "material-ui";

import { RegularCard, Button, CustomInput, ItemGrid } from "components";

function UserProfile({ ...props }) {
  return (
    <div>
      <Grid container>
        <ItemGrid xs={8} sm={8} md={8}>
          <RegularCard
            cardTitle="Enregistrer une agence"
            cardSubtitle="Ajoute une agence dans le système"
            content={
              <div>
                <Grid container>
                  {/* <ItemGrid xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Company (disabled)"
                      id="company-disabled"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: true
                      }}
                    />
                  </ItemGrid> */}
                  <ItemGrid xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Libellé de l'agence"
                      id="libelleAgence"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="CodeAgence"
                      id="codeAgence"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                </Grid>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Ville"
                      id="villeAgence"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Zone"
                      id="zoneAgence"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                </Grid>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="City"
                      id="city"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Country"
                      id="country"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Postal Code"
                      id="postal-code"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                </Grid>
              </div>
            }
            footer={<Button color="orangered">Enregistrer</Button>}
          />
        </ItemGrid>
      </Grid>
    </div>
  );
}

export default UserProfile;
