import { Button, styled } from "@mui/material";

export function CustomButton(props) {
  const CustomButton = styled(Button)(({ theme }) => ({
    width: "fit-content",
    minWidth: "fit-content",
    maxWidth: "0",
    height: "20px",
    textTransform: "none",
    borderRadius: "5px",
    borderColor: "#F5B61A",
    color: "#1E1E1E",
    fontSize: "10px",
    fontWeight: 400,
    ...props.sx,
    [theme.breakpoints.between("xs","md")]:{
      fontSize: "7px",
      height: "15px",
    }
  }));
  return (
    <CustomButton variant="outlined" size="small">
      {props.children}
    </CustomButton>
  );
}
