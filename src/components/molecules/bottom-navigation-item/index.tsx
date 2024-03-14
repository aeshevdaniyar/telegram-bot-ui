import { Stack } from "@components/atoms/Stack";
import { FC, useCallback } from "react";
import { NavLink } from "react-router-dom";

export interface BottomNavigationItemProps {
  icon: JSX.Element;
  text: string;
  activeIcon: JSX.Element;
  pageLink: string;
}

export const BottomNavigationItem: FC<BottomNavigationItemProps> = (props) => {
  const { icon, pageLink, text, activeIcon } = props;
  const styles = "group ";
  const activeStyles = "is-active";

  const classNameFn = useCallback(
    ({ isActive }: { isActive: boolean }) =>
      isActive ? `${styles} ${activeStyles}` : styles,
    []
  );
  return (
    <NavLink to={pageLink} className={classNameFn}>
      <Stack className="gap-1 items-center">
        <span className="block group-[.is-active]:hidden ">{icon}</span>
        <span className="hidden group-[.is-active]:block ">{activeIcon}</span>
        <span className="group-[.is-active]:text-violet font-medium text-xs">
          {text}
        </span>
      </Stack>
    </NavLink>
  );
};
