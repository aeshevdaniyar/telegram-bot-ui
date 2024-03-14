import IconProps from "./type";

export const PlusIcon: React.FC<IconProps> = ({
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
      color={color}
    >
      <path
        d="M12 5V19M5 12H19"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const MinusIcon: React.FC<IconProps> = ({
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
      color={color}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
        fill="#232627"
      />
    </svg>
  );
};

export const ChatTextIcon: React.FC<IconProps> = ({
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
      color={color}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.3572 3H14.0355C14.9373 2.99999 15.6647 2.99999 16.2567 3.04038C16.8654 3.08191 17.4037 3.16948 17.9134 3.3806C19.1386 3.88807 20.1119 4.86144 20.6194 6.08658C20.8305 6.59628 20.9181 7.13456 20.9596 7.74331C21 8.33531 21 9.06272 21 9.96448V10.0355C21 10.9373 21 11.6647 20.9596 12.2567C20.9181 12.8654 20.8305 13.4037 20.6194 13.9134C20.1119 15.1386 19.1386 16.1119 17.9134 16.6194C17.4037 16.8305 16.8654 16.9181 16.2567 16.9596C15.6647 17 14.9373 17 14.0355 17H11.4286C10.969 17 10.8774 17.0046 10.8026 17.0197C10.6284 17.0548 10.4667 17.1356 10.3342 17.2539C10.2773 17.3047 10.2186 17.3752 9.94286 17.7429L9.92131 17.7716C9.31559 18.5792 8.8329 19.2228 8.43791 19.6881C8.06664 20.1255 7.64696 20.5654 7.14609 20.7725C5.76787 21.3422 4.1804 20.813 3.41966 19.5303C3.14319 19.0641 3.07138 18.4604 3.03679 17.8878C2.99999 17.2785 3 16.474 3 15.4645V10.3572C2.99999 9.27341 2.99998 8.39926 3.05782 7.69138C3.11737 6.96253 3.24318 6.32234 3.54497 5.73005C4.02433 4.78924 4.78924 4.02433 5.73005 3.54497C6.32234 3.24318 6.96253 3.11737 7.69138 3.05782C8.39926 2.99998 9.27341 2.99999 10.3572 3ZM7.85424 5.05118C7.24907 5.10062 6.90138 5.19279 6.63803 5.32698C6.07354 5.6146 5.6146 6.07354 5.32698 6.63803C5.19279 6.90138 5.10062 7.24907 5.05118 7.85424C5.00078 8.47108 5 9.26339 5 10.4V15.4286C5 16.4821 5.00045 17.2257 5.03315 17.7672C5.04933 18.035 5.07195 18.2233 5.09854 18.356C5.12107 18.4685 5.14072 18.5106 5.1418 18.5133C5.39548 18.9375 5.92112 19.1127 6.37856 18.9256C6.38104 18.9241 6.42204 18.9021 6.50757 18.8257C6.60844 18.7355 6.73951 18.5984 6.91318 18.3938C7.26422 17.9803 7.71074 17.3857 8.34286 16.5429C8.35735 16.5235 8.37171 16.5044 8.38594 16.4853C8.59427 16.2071 8.77734 15.9626 9.00255 15.7617C9.40023 15.4068 9.88528 15.1642 10.4078 15.059C10.7037 14.9994 11.0091 14.9997 11.3567 15C11.3805 15 11.4044 15 11.4286 15H14C14.9456 15 15.6047 14.9995 16.1206 14.9643C16.6275 14.9297 16.9227 14.865 17.1481 14.7716C17.8831 14.4672 18.4672 13.8831 18.7716 13.1481C18.865 12.9227 18.9297 12.6275 18.9643 12.1206C18.9995 11.6047 19 10.9456 19 10C19 9.05444 18.9995 8.39534 18.9643 7.87945C18.9297 7.37254 18.865 7.07734 18.7716 6.85195C18.4672 6.11687 17.8831 5.53284 17.1481 5.22836C16.9227 5.135 16.6275 5.07033 16.1206 5.03574C15.6047 5.00054 14.9456 5 14 5H10.4C9.26339 5 8.47108 5.00078 7.85424 5.05118Z"
        fill="#3E90F0"
      />
      <path
        d="M8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9H16C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7H8Z"
        fill="#3E90F0"
      />
      <path
        d="M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H11C11.5523 13 12 12.5523 12 12C12 11.4477 11.5523 11 11 11H8Z"
        fill="#3E90F0"
      />
    </svg>
  );
};

export const SearchIcon: React.FC<IconProps> = ({
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
      color={color}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.7929 13.7929C14.1834 13.4024 14.8166 13.4024 15.2071 13.7929L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L13.7929 15.2071C13.4024 14.8166 13.4024 14.1834 13.7929 13.7929Z"
        fill="#3FDD78"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5ZM3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10Z"
        fill="#3FDD78"
      />
    </svg>
  );
};

export const FolderIcon: React.FC<IconProps> = ({
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
      color={color}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.10956 4.2981C1.83301 4.86724 1.83301 5.60608 1.83301 7.08376V12.65C1.83301 15.3998 1.83301 16.7747 2.53328 17.7385C2.75944 18.0498 3.03318 18.3236 3.34446 18.5497C4.3083 19.25 5.6832 19.25 8.43301 19.25H13.5663C16.3161 19.25 17.691 19.25 18.6549 18.5497C18.9662 18.3236 19.2399 18.0498 19.4661 17.7385C20.1663 16.7747 20.1663 15.3998 20.1663 12.65V11.6417C20.1663 8.89186 20.1663 7.51696 19.4661 6.55312C19.2399 6.24184 18.9662 5.9681 18.6549 5.74194C17.691 5.04167 16.3161 5.04167 13.5663 5.04167H11.5504C11.408 5.04167 11.3368 5.04167 11.269 5.03832C10.5292 5.00176 9.83544 4.66832 9.34474 4.11347C9.29976 4.0626 9.25529 4.00701 9.16634 3.89583L9.16632 3.89581C9.07739 3.78465 9.03292 3.72906 8.98794 3.6782C8.49725 3.12335 7.80348 2.78991 7.06369 2.75335C6.99586 2.75 6.92467 2.75 6.78229 2.75H6.16676C4.68908 2.75 3.95024 2.75 3.38111 3.02655C2.82674 3.29593 2.37894 3.74373 2.10956 4.2981ZM13.4747 15.2167C13.1203 15.2167 12.833 15.504 12.833 15.8583C12.833 16.2127 13.1203 16.5 13.4747 16.5H16.7747C17.1291 16.5 17.4163 16.2127 17.4163 15.8583C17.4163 15.504 17.1291 15.2167 16.7747 15.2167H13.4747Z"
        fill="#9CA3AF"
      />
    </svg>
  );
};

export const LogoutIcon: React.FC<IconProps> = ({
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
      color={color}
    >
      <path
        d="M6.2341 2.38843C6.72964 2.40809 7.3347 2.47533 8.07124 2.55718L9.17177 2.67945C9.42373 2.7074 9.61105 2.72818 9.78005 2.76178C11.5265 3.10902 12.8331 4.56887 12.9854 6.34296C13.0001 6.51463 13.0001 6.70309 13 6.95659V7.39988C13 7.95993 13 8.23996 12.891 8.45387C12.7951 8.64203 12.6422 8.79501 12.454 8.89088C12.2401 8.99988 11.9601 8.99988 11.4 8.99988H9C7.34315 8.99988 6 10.343 6 11.9999C6 13.6567 7.34315 14.9999 9 14.9999H11.4C11.9601 14.9999 12.2401 14.9999 12.454 15.1089C12.6422 15.2047 12.7951 15.3577 12.891 15.5459C13 15.7598 13 16.0398 13 16.5999V17.0431C13.0001 17.2966 13.0001 17.4851 12.9854 17.6568C12.8331 19.4309 11.5265 20.8907 9.78005 21.2379C9.61107 21.2715 9.42373 21.2923 9.17184 21.3203L8.10931 21.4383L8.10734 21.4385L8.07114 21.4426C7.33464 21.5244 6.72961 21.5916 6.23408 21.6113C5.72274 21.6316 5.24546 21.6064 4.78089 21.4578C3.69725 21.111 2.81256 20.3192 2.34824 19.2804C2.14918 18.8351 2.07147 18.3635 2.03517 17.8531C1.99998 17.3584 1.99999 16.7496 2 16.0086V7.99118C1.99999 7.25013 1.99998 6.64133 2.03517 6.14665C2.07147 5.63619 2.14918 5.16461 2.34824 4.71928C2.81256 3.68057 3.69725 2.88873 4.78089 2.54196C5.24547 2.39329 5.72275 2.36815 6.2341 2.38843Z"
        fill="#6C7275"
      />
      <path
        d="M15.2929 6.29277C15.6834 5.90225 16.3166 5.90225 16.7071 6.29277L21.7071 11.2928C22.0976 11.6833 22.0976 12.3165 21.7071 12.707L16.7071 17.707C16.3166 18.0975 15.6834 18.0975 15.2929 17.707C14.9024 17.3165 14.9024 16.6833 15.2929 16.2928L18.5858 12.9999H9C8.44772 12.9999 8 12.5522 8 11.9999C8 11.4476 8.44772 10.9999 9 10.9999H18.5858L15.2929 7.70698C14.9024 7.31646 14.9024 6.6833 15.2929 6.29277Z"
        fill="#6C7275"
      />
    </svg>
  );
};

export const ChevronDown: React.FC<IconProps> = ({
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
      color={"#000000"}
    >
      <path
        d="M6 9L12 15L18 9"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const PlusCircle: React.FC<IconProps> = ({
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
      color={color}
    >
      <circle cx="12" cy="12" r="9" fill="#6C7275" />
      <path
        d="M8 12H16"
        stroke="#141718"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 16L12 8"
        stroke="#141718"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const SettingIcon: React.FC<IconProps> = ({
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
      color={color}
    >
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke="#6C7275"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2 12.8804V11.1204C2 10.0804 2.85 9.22043 3.9 9.22043C5.71 9.22043 6.45 7.94042 5.54 6.37042C5.02 5.47042 5.33 4.30042 6.24 3.78042L7.97 2.79042C8.76 2.32042 9.78 2.60042 10.25 3.39042L10.36 3.58042C11.26 5.15042 12.74 5.15042 13.65 3.58042L13.76 3.39042C14.23 2.60042 15.25 2.32042 16.04 2.79042L17.77 3.78042C18.68 4.30042 18.99 5.47042 18.47 6.37042C17.56 7.94042 18.3 9.22043 20.11 9.22043C21.15 9.22043 22.01 10.0704 22.01 11.1204V12.8804C22.01 13.9204 21.16 14.7804 20.11 14.7804C18.3 14.7804 17.56 16.0604 18.47 17.6304C18.99 18.5404 18.68 19.7004 17.77 20.2204L16.04 21.2104C15.25 21.6804 14.23 21.4004 13.76 20.6104L13.65 20.4204C12.75 18.8504 11.27 18.8504 10.36 20.4204L10.25 20.6104C9.78 21.4004 8.76 21.6804 7.97 21.2104L6.24 20.2204C5.33 19.7004 5.02 18.5304 5.54 17.6304C6.45 16.0604 5.71 14.7804 3.9 14.7804C2.85 14.7804 2 13.9204 2 12.8804Z"
        stroke="#6C7275"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const SettingActiveIcon: React.FC<IconProps> = ({
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
      color={color}
    >
      <path
        opacity="0.4"
        d="M2 12.8804V11.1204C2 10.0804 2.85 9.22043 3.9 9.22043C5.71 9.22043 6.45 7.94042 5.54 6.37042C5.02 5.47042 5.33 4.30042 6.24 3.78042L7.97 2.79042C8.76 2.32042 9.78 2.60042 10.25 3.39042L10.36 3.58042C11.26 5.15042 12.74 5.15042 13.65 3.58042L13.76 3.39042C14.23 2.60042 15.25 2.32042 16.04 2.79042L17.77 3.78042C18.68 4.30042 18.99 5.47042 18.47 6.37042C17.56 7.94042 18.3 9.22043 20.11 9.22043C21.15 9.22043 22.01 10.0704 22.01 11.1204V12.8804C22.01 13.9204 21.16 14.7804 20.11 14.7804C18.3 14.7804 17.56 16.0604 18.47 17.6304C18.99 18.5404 18.68 19.7004 17.77 20.2204L16.04 21.2104C15.25 21.6804 14.23 21.4004 13.76 20.6104L13.65 20.4204C12.75 18.8504 11.27 18.8504 10.36 20.4204L10.25 20.6104C9.78 21.4004 8.76 21.6804 7.97 21.2104L6.24 20.2204C5.33 19.7004 5.02 18.5304 5.54 17.6304C6.45 16.0604 5.71 14.7804 3.9 14.7804C2.85 14.7804 2 13.9204 2 12.8804Z"
        fill="#141718"
      />
      <path
        d="M12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25Z"
        fill="#141718"
      />
    </svg>
  );
};

export const LockIcon: React.FC<IconProps> = ({
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
      color={color}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 8.66699C7 5.90557 9.23858 3.66699 12 3.66699C14.7614 3.66699 17 5.90557 17 8.66699V9.6256C17.2355 9.6772 17.4615 9.75235 17.68 9.86364C18.3072 10.1832 18.8171 10.6932 19.1367 11.3204C19.3428 11.7248 19.4249 12.1554 19.4632 12.6238C19.5 13.0748 19.5 13.6284 19.5 14.2992V15.5348C19.5 16.2056 19.5 16.7592 19.4632 17.2102C19.4249 17.6786 19.3428 18.1092 19.1367 18.5136C18.8171 19.1408 18.3072 19.6508 17.68 19.9703C17.2755 20.1764 16.8449 20.2586 16.3765 20.2968C15.9255 20.3337 15.3719 20.3337 14.7011 20.3337H9.29894C8.62812 20.3337 8.07448 20.3337 7.62348 20.2968C7.15507 20.2586 6.72448 20.1764 6.32003 19.9703C5.69283 19.6508 5.18289 19.1408 4.86331 18.5136C4.65724 18.1092 4.5751 17.6786 4.53683 17.2102C4.49998 16.7592 4.49999 16.2056 4.5 15.5348V14.2992C4.49999 13.6284 4.49998 13.0748 4.53683 12.6238C4.5751 12.1554 4.65724 11.7248 4.86331 11.3204C5.18289 10.6932 5.69283 10.1832 6.32003 9.86364C6.53845 9.75235 6.76449 9.6772 7 9.6256V8.66699ZM15.3333 8.66699V9.50168H8.66667V8.66699C8.66667 6.82604 10.1591 5.33366 12 5.33366C13.8409 5.33366 15.3333 6.82604 15.3333 8.66699ZM12.8333 14.0837C12.8333 13.6234 12.4602 13.2503 12 13.2503C11.5398 13.2503 11.1667 13.6234 11.1667 14.0837V15.7503C11.1667 16.2106 11.5398 16.5837 12 16.5837C12.4602 16.5837 12.8333 16.2106 12.8333 15.7503V14.0837Z"
        fill="#6C7275"
        fill-opacity="0.5"
      />
    </svg>
  );
};

export const UserIcon: React.FC<IconProps> = ({
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
      color={color}
    >
      <path
        d="M14.3747 13.7377C17.4995 13.7377 20.0326 11.2045 20.0326 8.07977C20.0326 4.955 17.4995 2.42188 14.3747 2.42188C11.2499 2.42188 8.7168 4.955 8.7168 8.07977C8.7168 11.2045 11.2499 13.7377 14.3747 13.7377Z"
        stroke="#9CA3AF"
        stroke-width="1.69737"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24.0958 25.0529C24.0958 20.6737 19.7392 17.1318 14.3755 17.1318C9.01185 17.1318 4.65527 20.6737 4.65527 25.0529"
        stroke="#9CA3AF"
        stroke-width="1.69737"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const ActiveUserIcon: React.FC<IconProps> = ({
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
      color={color}
    >
      <path
        d="M12.875 12C15.6364 12 17.875 9.76142 17.875 7C17.875 4.23858 15.6364 2 12.875 2C10.1136 2 7.875 4.23858 7.875 7C7.875 9.76142 10.1136 12 12.875 12Z"
        fill="#AC6AFF"
      />
      <path
        d="M12.8752 14.5C7.86516 14.5 3.78516 17.86 3.78516 22C3.78516 22.28 4.00516 22.5 4.28516 22.5H21.4652C21.7452 22.5 21.9652 22.28 21.9652 22C21.9652 17.86 17.8852 14.5 12.8752 14.5Z"
        fill="#AC6AFF"
      />
    </svg>
  );
};

export const AddIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_288_1984)">
        <rect
          width="24"
          height="24"
          rx="12"
          fill="url(#paint0_linear_288_1984)"
        />
        <path
          d="M12 8V16"
          stroke="#F3F5F7"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M8 12L16 12"
          stroke="#F3F5F7"
          stroke-width="2"
          stroke-linecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_288_1984"
          x="0"
          y="-1"
          width="24"
          height="25"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.363104 0 0 0 0 0.401094 0 0 0 0 0.420088 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_288_1984"
          />
        </filter>
        <linearGradient
          id="paint0_linear_288_1984"
          x1="12"
          y1="0"
          x2="12"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#7F8689" />
          <stop offset="1" stop-color="#6C7275" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const ArrowRight: React.FC<IconProps> = ({
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
      color={color}
    >
      <path
        d="M14.7071 5.29289C14.3166 4.90237 13.6834 4.90237 13.2929 5.29289C12.9024 5.68342 12.9024 6.31658 13.2929 6.70711L17.5858 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H17.5858L13.2929 17.2929C12.9024 17.6834 12.9024 18.3166 13.2929 18.7071C13.6834 19.0976 14.3166 19.0976 14.7071 18.7071L20.7071 12.7071C21.0976 12.3166 21.0976 11.6834 20.7071 11.2929L14.7071 5.29289Z"
        fill={color}
      />
    </svg>
  );
};

export const MessageIcon: React.FC<IconProps> = ({
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
      color={color}
    >
      <path
        d="M9.125 19H8.625C4.625 19 2.625 18 2.625 13V8C2.625 4 4.625 2 8.625 2H16.625C20.625 2 22.625 4 22.625 8V13C22.625 17 20.625 19 16.625 19H16.125C15.815 19 15.515 19.15 15.325 19.4L13.825 21.4C13.165 22.28 12.085 22.28 11.425 21.4L9.925 19.4C9.765 19.18 9.395 19 9.125 19Z"
        stroke="#9CA3AF"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.6215 11H16.6304"
        stroke="#9CA3AF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.6205 11H12.6295"
        stroke="#9CA3AF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.61951 11H8.62849"
        stroke="#9CA3AF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const ActiveMessageIcon: React.FC<IconProps> = ({
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
      color={color}
    >
      <path
        d="M9.125 19H8.625C4.625 19 2.625 18 2.625 13V8C2.625 4 4.625 2 8.625 2H16.625C20.625 2 22.625 4 22.625 8V13C22.625 17 20.625 19 16.625 19H16.125C15.815 19 15.515 19.15 15.325 19.4L13.825 21.4C13.165 22.28 12.085 22.28 11.425 21.4L9.925 19.4C9.765 19.18 9.395 19 9.125 19Z"
        stroke="#9CA3AF"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.6215 11H16.6304"
        stroke="#9CA3AF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.6205 11H12.6295"
        stroke="#9CA3AF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.61951 11H8.62849"
        stroke="#9CA3AF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const PeopleIcon: React.FC<IconProps> = ({
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
      color={color}
    >
      <path
        d="M18.1251 7.16C18.0651 7.15 17.9951 7.15 17.9351 7.16C16.5551 7.11 15.4551 5.98 15.4551 4.58C15.4551 3.15 16.6051 2 18.0351 2C19.4651 2 20.6151 3.16 20.6151 4.58C20.6051 5.98 19.5051 7.11 18.1251 7.16Z"
        stroke="#9CA3AF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.0954 14.4402C18.4654 14.6702 19.9754 14.4302 21.0354 13.7202C22.4454 12.7802 22.4454 11.2402 21.0354 10.3002C19.9654 9.59016 18.4354 9.35016 17.0654 9.59016"
        stroke="#9CA3AF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.09547 7.16C6.15547 7.15 6.22547 7.15 6.28547 7.16C7.66547 7.11 8.76547 5.98 8.76547 4.58C8.76547 3.15 7.61547 2 6.18547 2C4.75547 2 3.60547 3.16 3.60547 4.58C3.61547 5.98 4.71547 7.11 6.09547 7.16Z"
        stroke="#9CA3AF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.12543 14.4402C5.75543 14.6702 4.24543 14.4302 3.18543 13.7202C1.77543 12.7802 1.77543 11.2402 3.18543 10.3002C4.25543 9.59016 5.78543 9.35016 7.15543 9.59016"
        stroke="#9CA3AF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.1251 14.6297C12.0651 14.6197 11.9951 14.6197 11.9351 14.6297C10.5551 14.5797 9.45508 13.4497 9.45508 12.0497C9.45508 10.6197 10.6051 9.46973 12.0351 9.46973C13.4651 9.46973 14.6151 10.6297 14.6151 12.0497C14.6051 13.4497 13.5051 14.5897 12.1251 14.6297Z"
        stroke="#9CA3AF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.21473 17.7794C7.80473 18.7194 7.80473 20.2594 9.21473 21.1994C10.8147 22.2694 13.4347 22.2694 15.0347 21.1994C16.4447 20.2594 16.4447 18.7194 15.0347 17.7794C13.4447 16.7194 10.8147 16.7194 9.21473 17.7794Z"
        stroke="#9CA3AF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const ActivePeopleIcon: React.FC<IconProps> = ({
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
      color={color}
    >
      <path
        d="M20.3824 8.95109C20.3032 8.93977 20.224 8.93977 20.1448 8.95109C18.3909 8.89451 16.999 7.4574 16.999 5.69214C16.999 3.89293 18.4588 2.42188 20.2693 2.42188C22.0685 2.42188 23.5395 3.88161 23.5395 5.69214C23.5282 7.4574 22.1364 8.89451 20.3824 8.95109Z"
        fill="#AC6AFF"
      />
      <path
        d="M24.0709 16.7925C22.8035 17.6411 21.027 17.958 19.3862 17.743C19.8162 16.8151 20.0425 15.7854 20.0538 14.699C20.0538 13.5675 19.8049 12.4925 19.3296 11.5532C21.0043 11.3269 22.7809 11.6438 24.0596 12.4925C25.8475 13.6693 25.8475 15.6043 24.0709 16.7925Z"
        fill="#AC6AFF"
      />
      <path
        d="M7.83378 8.95109C7.91299 8.93977 7.9922 8.93977 8.07141 8.95109C9.82536 8.89451 11.2172 7.4574 11.2172 5.69214C11.2172 3.88161 9.75746 2.42188 7.94694 2.42188C6.14772 2.42188 4.68799 3.88161 4.68799 5.69214C4.68799 7.4574 6.07983 8.89451 7.83378 8.95109Z"
        fill="#AC6AFF"
      />
      <path
        d="M7.95805 14.6983C7.95805 15.7959 8.19568 16.837 8.62568 17.7762C7.03016 17.9459 5.36674 17.6064 4.14463 16.803C2.35674 15.6149 2.35674 13.6799 4.14463 12.4917C5.35542 11.677 7.06411 11.3488 8.67095 11.5299C8.207 12.4804 7.95805 13.5554 7.95805 14.6983Z"
        fill="#AC6AFF"
      />
      <path
        d="M14.2604 18.1167C14.1699 18.1054 14.0681 18.1054 13.9662 18.1167C11.8841 18.0488 10.2207 16.3401 10.2207 14.2354C10.232 12.0854 11.9633 10.3428 14.1247 10.3428C16.2747 10.3428 18.0173 12.0854 18.0173 14.2354C18.006 16.3401 16.3539 18.0488 14.2604 18.1167Z"
        fill="#AC6AFF"
      />
      <path
        d="M10.5828 20.4584C8.8741 21.6013 8.8741 23.4797 10.5828 24.6113C12.5291 25.9126 15.7202 25.9126 17.6665 24.6113C19.3752 23.4684 19.3752 21.59 17.6665 20.4584C15.7315 19.1571 12.5404 19.1571 10.5828 20.4584Z"
        fill="#AC6AFF"
      />
    </svg>
  );
};
export const HashtagIcon: React.FC<IconProps> = ({
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
      color={color}
    >
      <path
        d="M12.1098 3.55273L9.84668 23.9212"
        stroke="#9CA3AF"
        stroke-width="1.69737"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.8989 3.55273L16.6357 23.9212"
        stroke="#9CA3AF"
        stroke-width="1.69737"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.75488 10.3428H25.1233"
        stroke="#9CA3AF"
        stroke-width="1.69737"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.62305 17.1318H23.9915"
        stroke="#9CA3AF"
        stroke-width="1.69737"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const ActiveHashtagIcon: React.FC<IconProps> = ({
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
      color={color}
    >
      <path
        d="M12.0879 15.3445H15.3016L15.6637 12.1309H12.45L12.0879 15.3445Z"
        fill="#AC6AFF"
      />
      <path
        d="M18.6167 2.4209H9.13404C5.0151 2.4209 2.55957 4.87642 2.55957 8.99537V18.4667C2.55957 22.597 5.0151 25.0525 9.13404 25.0525H18.6054C22.7243 25.0525 25.1798 22.597 25.1798 18.478V8.99537C25.1911 4.87642 22.7356 2.4209 18.6167 2.4209ZM21.5927 12.1298H17.3267L16.9646 15.3548H20.778C21.2306 15.3548 21.604 15.7283 21.604 16.1809C21.604 16.6335 21.2306 17.007 20.778 17.007H16.7835L16.3196 21.1485C16.2743 21.5672 15.9122 21.8841 15.4935 21.8841C15.4596 21.8841 15.4369 21.8841 15.403 21.8841C14.9504 21.8388 14.6222 21.4201 14.6675 20.9675L15.1088 17.007H11.8951L11.4311 21.1485C11.3859 21.5672 11.0238 21.8841 10.6051 21.8841C10.5711 21.8841 10.5485 21.8841 10.5146 21.8841C10.0619 21.8388 9.73378 21.4201 9.77904 20.9675L10.2204 17.007H6.15799C5.70536 17.007 5.33194 16.6335 5.33194 16.1809C5.33194 15.7283 5.70536 15.3548 6.15799 15.3548H10.424L10.7861 12.1298H6.97273C6.5201 12.1298 6.14668 11.7564 6.14668 11.3038C6.14668 10.8512 6.5201 10.4777 6.97273 10.4777H10.9672L11.4311 6.33616C11.4764 5.88353 11.8951 5.55537 12.3477 5.60064C12.8004 5.6459 13.1285 6.06458 13.0833 6.51721L12.6419 10.4777H15.8556L16.3196 6.33616C16.3761 5.88353 16.7835 5.55537 17.2361 5.60064C17.6888 5.6459 18.0169 6.06458 17.9717 6.51721L17.5304 10.4777H21.6154C22.068 10.4777 22.4414 10.8512 22.4414 11.3038C22.4414 11.7564 22.0454 12.1298 21.5927 12.1298Z"
        fill="#AC6AFF"
      />
    </svg>
  );
};

export const FolderAddIcon: React.FC<IconProps> = ({
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
      color={color}
    >
      <path
        d="M12.0605 17V12"
        stroke={color}
        stroke-width="1.46875"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.5 14.5H9.5"
        stroke="white"
        stroke-width="1.46875"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22 11.5V17.5C22 21.5 21 22.5 17 22.5H7C3 22.5 2 21.5 2 17.5V7.5C2 3.5 3 2.5 7 2.5H8.5C10 2.5 10.33 2.94 10.9 3.7L12.4 5.7C12.78 6.2 13 6.5 14 6.5H17C21 6.5 22 7.5 22 11.5Z"
        stroke="white"
        stroke-width="1.46875"
        stroke-miterlimit="10"
      />
    </svg>
  );
};

export const ForwardIcon: React.FC<IconProps> = ({
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
      color={color}
    >
      <path
        d="M2.16699 6.94987V13.0499C2.16699 14.2999 3.52532 15.0832 4.60865 14.4582L7.25033 12.9415L9.89198 11.4165C10.0587 11.3165 10.192 11.2082 10.3003 11.0749V8.94155C10.192 8.80821 10.0587 8.69988 9.89198 8.59988L7.25033 7.07486L4.60865 5.55822C3.52532 4.91655 2.16699 5.69987 2.16699 6.94987Z"
        stroke="white"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.2998 6.94987V13.0499C10.2998 14.2999 11.6581 15.0832 12.7415 14.4582L15.3831 12.9415L18.0248 11.4165C19.1081 10.7915 19.1081 9.23321 18.0248 8.59988L15.3831 7.07486L12.7415 5.55822C11.6581 4.91655 10.2998 5.69987 10.2998 6.94987Z"
        stroke="white"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const BackwardIcon: React.FC<IconProps> = ({
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
      color={color}
    >
      <path
        d="M18.8335 6.94987V13.0499C18.8335 14.2999 17.4752 15.0832 16.3919 14.4582L13.7502 12.9415L11.1085 11.4165C10.9419 11.3165 10.8085 11.2082 10.7002 11.0749V8.94155C10.8085 8.80821 10.9419 8.69988 11.1085 8.59988L13.7502 7.07486L16.3919 5.55822C17.4752 4.91655 18.8335 5.69987 18.8335 6.94987Z"
        stroke="white"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.6996 6.94987V13.0499C10.6996 14.2999 9.34127 15.0832 8.25794 14.4582L5.61629 12.9415L2.97461 11.4165C1.89128 10.7915 1.89128 9.23321 2.97461 8.59988L5.61629 7.07486L8.25794 5.55822C9.34127 4.91655 10.6996 5.69987 10.6996 6.94987Z"
        stroke="white"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const RecordingIcon: React.FC<IconProps> = ({
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
      color={color}
    >
      <path
        d="M3 10L3 14M7.5 6L7.5 18M12 3V21M16.5 6V18M21 10V14"
        stroke="#6C7275"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const Setting2Icon: React.FC<IconProps> = ({
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
      color={color}
    >
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke="#6C7275"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2 12.8804V11.1204C2 10.0804 2.85 9.22043 3.9 9.22043C5.71 9.22043 6.45 7.94042 5.54 6.37042C5.02 5.47042 5.33 4.30042 6.24 3.78042L7.97 2.79042C8.76 2.32042 9.78 2.60042 10.25 3.39042L10.36 3.58042C11.26 5.15042 12.74 5.15042 13.65 3.58042L13.76 3.39042C14.23 2.60042 15.25 2.32042 16.04 2.79042L17.77 3.78042C18.68 4.30042 18.99 5.47042 18.47 6.37042C17.56 7.94042 18.3 9.22043 20.11 9.22043C21.15 9.22043 22.01 10.0704 22.01 11.1204V12.8804C22.01 13.9204 21.16 14.7804 20.11 14.7804C18.3 14.7804 17.56 16.0604 18.47 17.6304C18.99 18.5404 18.68 19.7004 17.77 20.2204L16.04 21.2104C15.25 21.6804 14.23 21.4004 13.76 20.6104L13.65 20.4204C12.75 18.8504 11.27 18.8504 10.36 20.4204L10.25 20.6104C9.78 21.4004 8.76 21.6804 7.97 21.2104L6.24 20.2204C5.33 19.7004 5.02 18.5304 5.54 17.6304C6.45 16.0604 5.71 14.7804 3.9 14.7804C2.85 14.7804 2 13.9204 2 12.8804Z"
        stroke="#6C7275"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
