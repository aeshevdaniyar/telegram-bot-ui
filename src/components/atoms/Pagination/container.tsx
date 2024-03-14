import { FC, PropsWithChildren } from "react";

export const Container: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <ul className="flex gap-2.5 justify-center items-center">{children}</ul>
  );
};
