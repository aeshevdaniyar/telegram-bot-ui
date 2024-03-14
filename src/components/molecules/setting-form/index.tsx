import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/atoms/Select";

export const SettingForm = () => {
  return (
    <Select defaultValue={"red"}>
      <SelectTrigger>
        <SelectValue placeholder="Select a verified email to display" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="m@example.com">m@example.com</SelectItem>
        <SelectItem value="m@google.com">m@google.com</SelectItem>
        <SelectItem value="m@support.com">m@support.com</SelectItem>
      </SelectContent>
    </Select>
  );
};
