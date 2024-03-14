import { InferType, number, object, string } from "yup";
export const settingFormSchema = object({
  negativePromt: string(),
  speed: number(),
  scope: string(),
  aspectRatio: object({
    width: number(),
    height: number(),
  }),
  cfgScale: number(),
  compression: number(),
  decoderIferenceSteps: number(),
  denoisingStrenght: number(),
});

export type SettingFormType = InferType<typeof settingFormSchema>;
