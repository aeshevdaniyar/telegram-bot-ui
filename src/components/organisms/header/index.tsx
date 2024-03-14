import { Box } from "@components/atoms/Box";
import { usePageHeader } from "../page-header";

export const Header = () => {
  const { content } = usePageHeader();
  return (
    <Box className="border-b border-secondary-foreground shadow-sm">
      {content}
    </Box>
  );
};
