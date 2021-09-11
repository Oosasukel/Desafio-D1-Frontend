export interface User {
  name: string;
  phones: Array<{
    number: string;
    type: "COMMERCIAL" | "RESIDENTIAL";
  }>;
  birthDate: string;
  addresses: Array<{
    state: string;
    city: string;
    district: string;
    number: string;
    complement?: string;
  }>;
  socialMedias: {
    facebook?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
  cpf: string;
  rg: string;
}

export type UserWithoutId = Omit<User, "id">;
