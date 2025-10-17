import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from "@/shared/ui/";

export function LoginForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Iniciar sesión</CardTitle>
        <CardDescription>
          Ingresa tu correo y contraseña para iniciar sesión en tu cuenta
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className='flex flex-col gap-6'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Correo</Label>
              <Input
                id='email'
                type='email'
                placeholder='m@example.com'
                required
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='password'>Contraseña</Label>
              <Input
                id='password'
                type='password'
                placeholder='Tu contraseña'
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className='flex-col gap-2'>
        <Button type='submit' className='w-full bg-purple-800'>
          Iniciar sesión
        </Button>
      </CardFooter>
    </Card>
  );
}
