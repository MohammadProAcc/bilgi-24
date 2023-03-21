import Image from "next/image";
import {
  Box,
  Breadcrumbs,
  Grid,
  Link,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { BoxTypography, CustomButton } from "./atoms";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
// FIXME:
export function CategoryListViewCard(props) {
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.between("xs", "md"));

  const CustomLink = styled(Link)({
    fontSize: `${!responsive ? "10px" : "8px"}`,
    fontWeight: 500,
  });
  const breadcrumbs = [
    <CustomLink
      underline="none"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Turkey
    </CustomLink>,
    <CustomLink
      underline="none"
      key="2"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Istanbul
    </CustomLink>,
  ];
  const Container = styled(Grid)(({ theme }) => ({
    width: "890px",
    height: "174px",
    boxShadow: "6px 7px 28px rgba(0, 0, 0, 0.07)",
    borderRadius: "10px",
    cursor: "pointer",
    [theme.breakpoints.between("xs", "md")]: {
      width: "100%",
      height: "auto",
    },
  }));
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    fontWeight: 500,
    color: "#1E1E1E",
    [theme.breakpoints.between("xs", "md")]: {
      fontSize: "10px",
    },
  }));
  const PriceText = styled(Typography)(({ theme }) => ({
    fontSize: "12px",
    fontWeight: 500,
    color: "#1E1E1E",
    [theme.breakpoints.between("xs", "md")]: {
      fontSize: "8px",
    },
  }));
  const Text = styled(Typography)(({ theme }) => ({
    fontSize: "10px",
    fontWeight: 500,
    color: "#1E1E1E",
    marginRight: "14px",
    [theme.breakpoints.between("xs", "md")]: {
      fontSize: "6px",
      marginRight: "0",
    },
  }));
  const Description = styled(Typography)(({ theme }) => ({
    fontSize: "11px",
    fontWeight: 300,
    lineHeight: "203%",
    textAlign: "justify",
    [theme.breakpoints.between("xs", "md")]: {
      fontSize: "6px",
      marginRight: "0",
    },
  }));
  return (
    <Link underline="none" href="/post-single">
      <Container id="main" container direction="row">
        {responsive && (
          <Grid id="images" container position="relative">
            <Image
              width={90}
              height={90}
              alt="picture"
              src={props.srcImageLarge}
              style={{
                borderRadius: "5px",
                position: "absolute",
                top: "50px",
                right: "10px",
              }}
            />
            <Image
              width={65}
              height={65}
              alt="picture"
              src={props.srcImageSmall}
              style={{
                filter: "drop-shadow(5px 0px 35px rgba(0, 0, 0, 0.3))",
                borderRadius: "5px",
                position: "absolute",
                top: "64px",
                right: "65px",
              }}
            />
          </Grid>
        )}
        <Grid
          id="content"
          container
          direction="column"
          padding="27px"
          gap={`${!responsive ? "20px" : "5px"}`}
          xl={8}
        >
          <Grid
            container
            direction="row"
            gap={`${!responsive ? "20px" : "5px"}`}
          >
            <Grid container direction="column" sx={{ width: "fit-content" }} xl>
              <Grid container direction="row" alignItems="center" gap="4px">
                <Title>Apartment Best Location</Title>
                <Text>(3 Rooms)</Text>
                {!responsive ? (
                  <PriceText>
                    -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 35,000$
                  </PriceText>
                ) : (
                  <PriceText>-&nbsp;35,000$</PriceText>
                )}
              </Grid>
              <Grid container direction="row" gap="12px" alignItems="center">
                <Box xl>
                  <Breadcrumbs
                    sx={{
                      "& .MuiBreadcrumbs-separator": {
                        marginLeft: "0",
                        marginRight: "0",
                      },
                      "& .MuiBreadcrumbs-ol": {
                        display: "flex",
                        alignItems: "end",
                      },
                    }}
                    separator={
                      <NavigateNextIcon
                        fontSize={`${!responsive ? "10px" : "2px"}`}
                      />
                    }
                  >
                    {breadcrumbs}
                  </Breadcrumbs>
                </Box>
                <Grid container direction="row" gap="6px" xl>
                  <CustomButton>Elevator</CustomButton>
                  <CustomButton>Labi</CustomButton>
                  <CustomButton>Parking</CustomButton>
                </Grid>
              </Grid>
            </Grid>
            <Box width={`${!responsive ? "28%" : "55%"}`}>
              <BoxTypography text="M2 (groos)" number="105" />
              <BoxTypography text="M2 (net)" number="95" />
            </Box>
          </Grid>
          {!responsive ? (
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
              purus viverra accumsan in nisl nisi Arcu cursus vitae congue
              mauris rhoncus aenean vel elit scelerisque.
            </Description>
          ) : (
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </Description>
          )}
        </Grid>
        {!responsive && (
          <Grid
            id="images"
            container
            padding="14px"
            position="relative"
            justifyContent="flex-end"
            xl={4}
          >
            <Image
              width={148}
              height={148}
              alt="picture"
              src={props.srcImageLarge}
              style={{ borderRadius: "5px", position: "absolute" }}
            />
            <Image
              width={126}
              height={126}
              alt="picture"
              src={props.srcImageSmall}
              style={{
                filter: "drop-shadow(5px 0px 35px rgba(0, 0, 0, 0.3))",
                borderRadius: "5px",
                position: "absolute",
                top: "26px",
                right: "112px",
              }}
            />
          </Grid>
        )}
      </Container>
    </Link>
  );
}
