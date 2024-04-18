export default interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  telefono: string;
  isActive: boolean;
  roles: string[];
}
