import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/atoms/Form";
import { HStack } from "@components/atoms/HStack";
import { Input } from "@components/atoms/Input";
import { Stack } from "@components/atoms/Stack";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { QuestionMark } from "../question-mark";
import { SettingFormType, settingFormSchema } from "./schema";
import { Slider } from "@components/atoms/Slider";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@components/atoms/Select";
import { Button } from "@components/atoms/Button";

export const SettingForm = () => {
  const form = useForm<SettingFormType>({
    resolver: yupResolver(settingFormSchema),
  });

  const onSubmit = (data: SettingFormType) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Stack className="gap-6">
          <HStack className="gap-6">
            <Button type="submit" className="rounded-xl w-3/5">
              Сохранить и вернуть
            </Button>
            <Button variant={"outline"} className="rounded-xl w-2/5">
              Сбросить
            </Button>
          </HStack>
          <FormField
            control={form.control}
            name="negativePromt"
            render={({ field }) => (
              <FormItem>
                <HStack className="justify-between">
                  <FormLabel>Негативный промт</FormLabel>
                  <QuestionMark popoverText="Какойто текст" />
                </HStack>

                <FormControl>
                  <Input
                    placeholder="Введите негативный промт"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="speed"
            render={({ field }) => (
              <FormItem>
                <HStack className="justify-between">
                  <FormLabel>Speed</FormLabel>
                  <QuestionMark popoverText="Какойто текст" />
                </HStack>

                <FormControl>
                  <HStack className="items-center">
                    <Slider
                      value={[field.value || 0]}
                      onValueChange={field.onChange}
                      className="w-full"
                    />
                    <Input className="max-w-36 w-full" {...field} />
                  </HStack>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="scope"
            render={({ field }) => (
              <FormItem>
                <HStack className="justify-between">
                  <FormLabel>Тематика</FormLabel>
                  <QuestionMark popoverText="Какойто текст" />
                </HStack>

                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Машина">Машина</SelectItem>
                      <SelectItem value="Велосипед">Велосипед</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormItem>
            <HStack className="justify-between">
              <FormLabel>Соотношение сторон</FormLabel>
              <QuestionMark popoverText="Какойто текст" />
            </HStack>

            <FormControl>
              <HStack>
                <FormField
                  control={form.control}
                  name="aspectRatio.width"
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value?.toString()}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Ширина" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="12">12</SelectItem>
                        <SelectItem value="19">19</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                <FormField
                  control={form.control}
                  name="aspectRatio.height"
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value?.toString()}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Высота" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="12">12</SelectItem>
                        <SelectItem value="19">19</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </HStack>
            </FormControl>
            <FormMessage />
          </FormItem>
          <FormField
            control={form.control}
            name="cfgScale"
            render={({ field }) => (
              <FormItem>
                <HStack className="justify-between">
                  <FormLabel>Креативность (Cfg Scale)</FormLabel>
                  <QuestionMark popoverText="Какойто текст" />
                </HStack>

                <FormControl>
                  <HStack className="items-center">
                    <Slider
                      value={[field.value || 0]}
                      onValueChange={field.onChange}
                      className="w-full"
                    />
                    <Input
                      className="max-w-16 w-full px-3 py-2 text-base"
                      {...field}
                    />
                  </HStack>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="compression"
            render={({ field }) => (
              <FormItem>
                <HStack className="justify-between">
                  <FormLabel>Компрессия (Compression))</FormLabel>
                  <QuestionMark popoverText="Какойто текст" />
                </HStack>

                <FormControl>
                  <HStack className="items-center">
                    <Slider
                      value={[field.value || 0]}
                      onValueChange={field.onChange}
                      className="w-full"
                    />
                    <Input
                      className="max-w-16 w-full px-3 py-2 text-base"
                      {...field}
                    />
                  </HStack>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="decoderIferenceSteps"
            render={({ field }) => (
              <FormItem>
                <HStack className="justify-between">
                  <FormLabel>Шаги (Decoder Iference Steps)</FormLabel>
                  <QuestionMark popoverText="Какойто текст" />
                </HStack>

                <FormControl>
                  <HStack className="items-center">
                    <Slider
                      value={[field.value || 0]}
                      onValueChange={field.onChange}
                      className="w-full"
                    />
                    <Input
                      className="max-w-16 w-full px-3 py-2 text-base"
                      {...field}
                    />
                  </HStack>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="denoisingStrenght"
            render={({ field }) => (
              <FormItem>
                <HStack className="justify-between">
                  <FormLabel>Степень шума (Denoising Strenght)</FormLabel>
                  <QuestionMark popoverText="Какойто текст" />
                </HStack>

                <FormControl>
                  <HStack className="items-center">
                    <Slider
                      value={[field.value || 0]}
                      onValueChange={field.onChange}
                      className="w-full"
                    />
                    <Input
                      className="max-w-16 w-full px-3 py-2 text-base"
                      {...field}
                    />
                  </HStack>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Stack>
      </form>
    </Form>
  );
};
