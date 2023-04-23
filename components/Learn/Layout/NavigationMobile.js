"use client";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useSelector } from "react-redux";
import ChuongHoc from "../Navigation/ChuongHoc";

const NavigationMobile = ({ staticData }) => {
  const getStatusNavigation = useSelector((state) => state.navigation.on);

  return (
    <>
      {getStatusNavigation && staticData && (
        <Box
          sx={{
            marginTop: "64px",
            width: "100%",
            backgroundColor: "header.background.default",
            zIndex: 99,
            color: "text.color.first",
            top: 0,
            position: "fixed",
            bottom: 0,
          }}
        >
          <Box sx={{}}>
            <Box
              sx={{
                paddingRight: "1.25rem",
                width: "100%",
                height: "100%",
              }}
            >
              {staticData.data &&
                staticData.data?.map((e, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      paddingBottom: "10px",
                      borderBottom: "2px solid #ccc",
                    }}
                  >
                    <Box
                      sx={{
                        padding: "8px 10px",
                      }}
                    >
                      <Link href={`/learn/phan-loai/${e.idPhanLoai}`}>
                        <Typography
                          sx={{
                            textTransform: "uppercase",
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                          }}
                        >
                          Phân loại: {e.tenPhanLoai}
                        </Typography>
                      </Link>
                    </Box>
                    {e.chuongHoc?.map((chuong) => (
                      <ChuongHoc chuong={chuong} />
                    ))}
                  </Box>
                ))}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};
export default NavigationMobile;
