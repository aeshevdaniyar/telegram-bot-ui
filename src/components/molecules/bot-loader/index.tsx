import { HStack } from "@components/atoms/HStack";
import classes from "./bot-loader.module.css";
export const BotLoader = () => {
  return (
    <HStack className="pl-4">
      <span className={classes.BotLoader} />
    </HStack>
  );
};
