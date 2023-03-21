import {
  Grid,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { CategoryCard } from "./molecules";
import { data } from "$/utils";
import Image from "next/image";
import { Justifier } from "../atoms";

export function SelectCategories() {
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down("md"));
  const responsiveImage = useMediaQuery("max-width:340px");
  const Container = styled(Grid)(({ theme }) => ({
    marginTop: "2rem",
    gap: "40px",
    padding: "0 74px",
    [theme.breakpoints.between("xs", "md")]: {
      padding: "0 0",
    },
  }));
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "26px",
    fontWeight: 500,
    color: "#1E1E1E",
    textAlign: "center",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "16px",
    },
  }));
  const Main = styled(Grid)(({ theme }) => ({
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    [theme.breakpoints.between("xs", "sm")]: {
      gap: "10px",
    },
  }));
  const ImageBox = styled(Grid)(({ theme }) => ({
    width: "614px",
    height: "144px",
    backgroundColor: "#0A4556",
    boxShadow: "4px 4px 46px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    cursor:"pointer",
    gap: `${!responsiveImage ? "50px" : "25px"}`,
    justifyContent: "center",
    [theme.breakpoints.between("xs", "md")]: {
      width: "100%",
      height: "100%",
      gap: "20px",
    },
  }));
  const ImageBoxText = styled(Typography)(({ theme }) => ({
    fontSize: "22px",
    fontWeight: 500,
    color: "white",
    [theme.breakpoints.between("xs", "md")]: {
      fontSize: "14px",
    },
  }));
  return (
    <Justifier>
      <Container container direction="column">
        <Title>Select Category</Title>
        <Main container>
          {data.map((item) => (
            <CategoryCard
              key={item.id}
              imageSrc={item.imageAddress}
              text={item.title}
            />
          ))}
        </Main>
        <ImageBox container direction="row">
          <Image
            width={!responsive ? 168 : 80}
            height={!responsive ? 82 : 70}
            alt="offer-pic"
            src="/images/offer-pic.svg"
          />
          <ImageBoxText>Five In One (Special Offer)</ImageBoxText>
        </ImageBox>
      </Container>
    </Justifier>
  );
}
