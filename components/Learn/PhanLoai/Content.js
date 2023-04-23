"use client";

import { setNavigationContent } from "@/redux/actions/_navigationContent";
import { Box, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import DanhSachCacChuong from "./DanhSachCacChuong";
const Content = ({ data }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (data && data.data) {
      dispatch(
        setNavigationContent({
          phanLoai: data.data.slug,
          chuongHoc: null,
          phanMuc: null,
          baiHoc: null,
        })
      );
    }
  }, [data]);
  const params = useParams();
  return (
    <>
      {data && data.data && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            className="learn__title"
            sx={{
              fontWeight: "700",
              fontSize: "3rem",
              margin: "20px 0",
            }}
          >
            Phân loại: {data.data.tenPhanLoai}
          </Typography>
          <Typography
            component="div"
            sx={{
              fontFamily: "Noto Sans",
              width: "100%",
              fontSize: "2rem",
            }}
          >
            <div
              className="content-html"
              dangerouslySetInnerHTML={{ __html: data.data.noiDung }}
            />
          </Typography>
          <DanhSachCacChuong data={data.chuongHoc}></DanhSachCacChuong>
        </Box>
      )}
    </>
  );
};
export default Content;
