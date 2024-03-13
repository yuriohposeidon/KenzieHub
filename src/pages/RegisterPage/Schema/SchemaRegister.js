import { z } from "zod";

export const schemaRegister = z
  .object({
    name: z
      .string()
      .nonempty("O nome é obrigatório")
      .min(2, "O nome precisa conter pelo menos 2 caracteres"),
    email: z
      .string()
      .nonempty("O e-mail é obrigatório")
      .email("O email fornecido é invalido")
      .min(2, "O email precisa conter pelo menos 2 caracteres"),
    password: z
      .string()
      .min(8, "A senha é obrigatória e precisa de no mínimo 8 caracteres")
      .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número"),
    confirmPassword: z.string().nonempty("Confirmar a senha é obrigatório"),
    bio: z.string().nonempty("A bio é obrigatória"),
    contact: z.string().nonempty("O contato é obrigatório"),
    course_module: z.string().nonempty("Selecione o seu módulo correspondente"),
  })

  .refine(({ password, confirmPassword }) => confirmPassword === password, {
    message: "A confirmação e a senha precisam corresponder",
    path: ["confirmPassword"],
  });
