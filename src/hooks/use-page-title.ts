import { PAGE_TITLES } from "@constants/page-titles";
import { useLocation } from "react-router-dom";

export const usePageTitle = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return {
    title: PAGE_TITLES[pathname],
  };
};
