import { nestedForm } from "@/lib/nested-form";
import { Button } from "@components/atoms/Button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@components/atoms/Drawer";
import { Form } from "@components/atoms/Form";
import { HStack } from "@components/atoms/HStack";
import { Setting2Icon } from "@components/atoms/Icon";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { object } from "yup";
import { SettingForm } from "../setting-form";
import { SettingFormType, settingFormSchema } from "../setting-form/schema";
type SettingForm = {
  form: SettingFormType;
};
export const SettingDrawer = () => {
  const [open, setOpen] = useState(false);
  const form = useForm<SettingForm>({
    resolver: yupResolver(
      object({
        form: settingFormSchema,
      })
    ),
  });
  console.log(form.formState.errors);

  const onClose = () => {
    setOpen(false);
  };

  const onSubmit = (data: SettingForm) => {
    console.log(data);
    // onClose();
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        <Button variant={"ghost"} className="px-0">
          <Setting2Icon />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[90%]">
        <DrawerHeader>
          <DrawerTitle className="text-center">Настройки</DrawerTitle>
        </DrawerHeader>

        <div className="w-full mx-auto flex flex-col overflow-auto p-4">
          <Form {...form}>
            <SettingForm form={nestedForm(form, "form")} />
          </Form>
        </div>

        <DrawerFooter>
          <HStack className="gap-3 md:gap-6 flex-col md:flex-row w-full">
            <Button
              type="submit"
              className="rounded-xl w-full md:w-3/5"
              onClick={form.handleSubmit(onSubmit)}
            >
              Сохранить и вернуть
            </Button>

            <Button
              variant={"outline"}
              className="rounded-xl w-full md:w-2/5"
              onClick={onClose}
            >
              Сбросить
            </Button>
          </HStack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
