export interface SocialMedias {
  facebook?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
}

export interface User {
  id: string;
  name: string;
  birthDate: string;
  cpf: string;
  rg: string;

  phones: Array<{
    id?: number;
    number: string;
    type: 'COMMERCIAL' | 'RESIDENTIAL';
  }>;

  addresses: Array<{
    id?: number;
    state: string;
    city: string;
    district: string;
    number: string;
    complement?: string;
  }>;

  socialMedias: SocialMedias;
}

export type UserWithoutId = Omit<User, 'id'>;
