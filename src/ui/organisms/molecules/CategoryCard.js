import { Zindex } from "$/design";
import {
  Grid,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export function CategoryCard(props) {
  const responsive = useMediaQuery("(max-width:400px)");
  const Main = styled(Grid)(({ theme }) => ({
    width: `${!responsive ? "120px" : "75px"}`,
    height: `${!responsive ? "146px" : "86px"}`,
    boxShadow: " 5px 5px 46px rgba(0, 0, 0, 0.1)",
    position: "relative",
    zIndex: 2,
    backgroundColor: "#0A4556",
    borderRadius: "5px",
    alignItems: "center",
    justifyContent: "center",
    gap: `${!responsive ? "20px" : "14px"}`,
    zIndex: Zindex.categoryCard,
    "&:hover": {
      boxShadow: " 5px 5px 46px rgba(0, 0, 0, 0.2)",
      cursor: "pointer",
    },
  }));
  const Text = styled(Typography)(({ theme }) => ({
    fontSize: `${!responsive ? "14px" : "9px"}`,
    fontWeight: 500,
    color: "white",
  }));
  return (
    <Link href="/category">
      <Main container direction="column">
        <Image
          width={!responsive ? 64 : 40}
          height={!responsive ? 70 : 40}
          alt="vector-box"
          src={props.imageSrc}
        />
        <Text>{props.text}</Text>
      </Main>
    </Link>
  );
}
