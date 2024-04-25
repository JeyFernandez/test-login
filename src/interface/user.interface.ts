export default interface UserInterface {
  id: number;
  name: string;
  email: string;
  password: string;
  telefono: string;
  isActive: boolean;
  roles?: [
    {
      id: number;
      rol: string;
    }
  ];
}
