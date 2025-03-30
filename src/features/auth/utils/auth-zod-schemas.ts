/**
 * @fileoverview zod schemas for form data validation
 */

import { z } from "zod";

const baseAuthSchema = {
  email: z
    .string({
      required_error: "El email es requerido",
    })
    .min(1, "El email es requerido")
    .email("Email inválido"),
  password: z
    .string({ required_error: "La contraseña es requerida" })
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
};

export const loginSchema = z.object({
  ...baseAuthSchema,
  remember: z.boolean().default(false),
});

export const registerSchema = z.object({
  ...baseAuthSchema,
  username: z
    .string({ required_error: "El nombre de usuario es requerido" })
    .min(3, "El nombre de usuario debe tener al menos 3 caracteres"),

  passwordConfirmation: z
    .string({ required_error: "La confirmación de la contraseña es requerida" })
    .min(
      6,
      "La confirmación de la contraseña debe tener al menos 6 caracteres",
    ),
  terms: z
    .boolean()
    .refine((val) => val === true, {
      message: "Debes aceptar los términos y condiciones",
    })
    .default(false),
});
