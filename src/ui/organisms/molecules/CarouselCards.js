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
import Image from "next/image";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { BoxTypography } from "$/ui/organisms/molecules/atoms";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
export function CarouselCards(props) {
  let isShop = props.isShop;
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down("md"));
  const Container = styled(Grid)(({ theme }) => ({
    width: "296px",
    height: "138px",
    boxShadow: "6px 7px 28px rgba(0, 0, 0, 0.1)",
    alignItems: "center",
    gap: "18px",
    padding: "12px",
    [theme.breakpoints.between("xs", "md")]: {
      width: "200px",
      height: "280px",
      justifyContent: "center",
      padding: "5px",
      gap: "0",
    },
  }));
  const CustomLink = styled(Link)({
    fontSize: `${!responsive ? "10px" : "8px"}`,
    fontWeight: 500,
    color: "#1E1E1E",
    opacity: 0.7,
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
  return (
    <Link underline="none" href="/post-single">
      <>
        <Container container direction="row">
          <Box position="relative" xl lg md>
            <Image
              width={!responsive ? 114 : 180}
              height={!responsive ? 114 : 138}
              alt="box-image"
              src={props.srcImage}
              style={{ borderRadius: "10px" }}
            />
            {isShop === "true" ? (
              <Image
                width={140}
                height={120}
                alt="box-image"
                src="/images/shop-label.svg"
                style={{
                  borderRadius: "5px",
                  position: "absolute",
                  top: "0",
                  right: "-10px",
                }}
              />
            ) : (
              <></>
            )}
          </Box>
          <Grid
            container
            direction="column"
            gap={`${!responsive ? "4px" : "0"}`}
            xl
            lg
            md
          >
            <Typography
              sx={{
                fontSize: `${!responsive ? "14px" : "12px"}`,
                fontWeight: 500,
                color: "#1E1E1E",
              }}
            >
              Apartment
            </Typography>
            <Breadcrumbs
              sx={{
                "& .MuiBreadcrumbs-ol": {
                  display: "flex",
                  alignItems: "end",
                },
                "& .MuiBreadcrumbs-separator": {
                  marginLeft: "0",
                  marginRight: "0",
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
            <Grid
              container
              direction="column"
              gap={`${!responsive ? "2px" : "0"}`}
            >
              <BoxTypography text="M2 (groos)" number="105" />
              <BoxTypography text="M2 (net)" number="95" />
            </Grid>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontSize: `${!responsive ? "10px" : "8px"}`,
                  fontWeight: 500,
                }}
              >
                3 Rooms
              </Typography>
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontSize: `${!responsive ? "4px" : "10px"}`,
                  fontWeight: 500,
                }}
              >
                35,000$
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </>
    </Link>
  );
}
