import styled from "@emotion/styled";
import { Layout, CartBox, Flex } from "$/ui";
import { Color } from "$/design";
import { Button, Grid } from "@mui/material";
import numeral from "numeral";
import { theme } from "$/utils";

export function CartPage() {
  return (
    <Layout>
      <_>
        <h1>Cart</h1>

        <Grid
          height="25rem"
          container
          direction="column"
          gap="25px"
          justifyContent="flex-start"
          alignItems="center"
          sx={{
            [theme.breakpoints.down("md")]: {
              padding: "0 1rem",
            },
          }}
        >
          <CartBox />
          <CartBox />
        </Grid>

        <div className="cart-footer">
          <div className="total-price">
            Total Price: <strong>{numeral(30000).format("0,0")}$</strong>
          </div>
          <Button color="sub" variant="contained" style={{ width: "10.75rem" }}>
            Checkout
          </Button>
        </div>
      </_>
    </Layout>
  );
}

const _ = styled.div`
  h1 {
    margin: 3.625rem auto 3rem auto;
    text-align: center;
    color: ${Color.sub};
  }

  .cart-footer {
    margin-bottom: 4.375rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .total-price {
    text-align: center;
    strong {
      font-weight: 500;
    }
  }
`;
