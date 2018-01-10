export interface Feedback {
  firstname: string;
  lastname: string;
  telnum: string;
  email: string;
  argee: boolean;
  contacttype: string;
  message: string;
}

export const ContactType = ['None', 'Tel', 'Email'];

