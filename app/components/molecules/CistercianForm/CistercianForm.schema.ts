import { z } from "zod";

export const cistercianSchema = z.object({
  number: z
    .number({
      message: "Type correct number",
    })
    .int("Number must be an integer")
    .min(1, "Number must be greater than 0")
    .max(9999, "Maximum value is 9999"),
});

export type CistercianFormData = z.infer<typeof cistercianSchema>;

export const defaultValues = {
  number: 1992,
};
