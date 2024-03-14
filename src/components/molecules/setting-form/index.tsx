import { NestedForm } from "@/lib/nested-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/atoms/Form";
import { HStack } from "@components/atoms/HStack";
import { Input } from "@components/atoms/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/atoms/Select";
import { Slider } from "@components/atoms/Slider";
import { Stack } from "@components/atoms/Stack";
import { FC } from "react";
import { QuestionMark } from "../question-mark";
import { SettingFormType } from "./schema";
export interface SettingFormProps {
  form: NestedForm<SettingFormType>;
}
export const SettingForm: FC<SettingFormProps> = (props) => {
  const {
    form: { path, control },
  } = props;

  return (
    <Stack className="gap-6">
      <FormField
        control={control}
        name={path("negativePromt")}
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
        control={control}
        name={path("speed")}
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
        control={control}
        name={path("scope")}
        render={({ field }) => (
          <FormItem>
            <HStack className="justify-between">
              <FormLabel>Тематика</FormLabel>
              <QuestionMark popoverText="Какойто текст" />
            </HStack>

            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
              control={control}
              name={path("aspectRatio.width")}
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
              control={control}
              name={path("aspectRatio.height")}
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
        control={control}
        name={path("cfgScale")}
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
        control={control}
        name={path("compression")}
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
        control={control}
        name={path("decoderIferenceSteps")}
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
        control={control}
        name={path("denoisingStrenght")}
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
  );
};
