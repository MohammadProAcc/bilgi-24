import { Grid, Typography } from "@mui/material";
import { CategoryCard } from "./molecules";
import { data } from "$/utils";
import Image from "next/image";

export function SelectCategories() {
  return (
    <Grid container direction="column" gap="40px" padding="0 93px">
      <Typography
        sx={{
          fontSize: "26px",
          fontWeight: 500,
          color: "#1E1E1E",
          textAlign: "center",
        }}
      >
        Select Category
      </Typography>
      <Grid container sx={{ flexWrap: "wrap", gap: "20px" }}>
        {data.map((item) => (
          <CategoryCard
            key={item.id}
            imageSrc={item.imageAddress}
            text={item.title}
          />
        ))}
      </Grid>
      <Grid
        container
        direction="row"
        sx={{
          width: "614px",
          height: "144px",
          backgroundColor: "#0A4556",
          boxShadow: "4px 4px 46px rgba(0, 0, 0, 0.1)",
          borderRadius: "5px",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          gap: "50px",
        }}
      >
        <Image
          width={168}
          height={82}
          alt="offer-pic"
          src="/images/offer-pic.svg"
        />
        <Typography sx={{ fontSize: "22px", fontWeight: 500, color: "white" }}>
          Five In One (Special Offer)
        </Typography>
      </Grid>
    </Grid>
  );
}
