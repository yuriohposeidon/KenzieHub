import { z } from "zod";

export const schemaModalNew = z.object({
  title: z
    .string()
    .nonempty("O nome é obrigatório")
    .min(2, "O email precisa conter pelo menos 2 caracteres"),

  status: z.string().nonempty("Selecione o seu status correspondente"),
});