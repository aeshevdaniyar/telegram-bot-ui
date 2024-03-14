import { Button } from "@components/atoms/Button";
import { HStack } from "@components/atoms/HStack";
import { ArrowRight } from "@components/atoms/Icon";
import { Text } from "@components/atoms/Text";
import { FC } from "react";
import { Link } from "react-router-dom";
interface AITypeItemProps {
  image: string;
  title: string;
  pageLink: string;
}
export const AITypeItem: FC<AITypeItemProps> = (props) => {
  const { image, pageLink, title } = props;
  return (
    <Link to={pageLink} className="w-full">
      <HStack className="border rounded-xl border-secondary-foreground items-center  p-4 w-full transition-all hover:shadow-lg hover:border-transparent justify-between">
        <HStack className="gap-6 items-center">
          <img className="w-16 h-16" src={image} />
          <Text size={"lg"}>{title}</Text>
        </HStack>
        <Button variant={"ghost"}>
          <ArrowRight />
        </Button>
      </HStack>
    </Link>
  );
};
