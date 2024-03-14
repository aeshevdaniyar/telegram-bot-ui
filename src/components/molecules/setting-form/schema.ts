import { InferType, number, object, string } from "yup";
export const settingFormSchema = object({
  negativePromt: string().required(),
  speed: number().required(),
  scope: string().required(),
  aspectRatio: object({
    width: number().required(),
    height: number().required(),
  }).required(),
  cfgScale: number().required(),
  compression: number().required(),
  decoderIferenceSteps: number().required(),
  denoisingStrenght: number().required(),
});

export type SettingFormType = InferType<typeof settingFormSchema>;
