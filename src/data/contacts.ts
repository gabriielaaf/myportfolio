export interface Contact {
  id: string;
  label: string;
  value: string;
  href: string;
  external: boolean;
}

export const contacts: Contact[] = [
  {
    id: "email",
    label: "Email",
    value: "gabriela.abreu.felgueiras@gmail.com",
    href: "mailto:gabriela.abreu.felgueiras@gmail.com",
    external: false,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/gabrielafelgueiras",
    href: "https://www.linkedin.com/in/gabrielafelgueiras",
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/gabriielaaf",
    href: "https://github.com/gabriielaaf",
    external: true,
  },
];