# Prueba Técnica — Frontend con Next.js

Desarrollo e implementación de Frontend para una aplicación web desarrollada en Next.js, usando tecnologías como TypeScript, Zustand, TanStack Query, TanStack Table, TailwindCSS y Shadcn Components, implementando autenticación y rutas protegidas, gestión de sesiones con JWT y consumo de API externas.

## 📋 Tabla de Contenidos

- [Tecnologías](#-tecnologías)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Ejecución](#-ejecución)
- [Arquitectura](#-arquitectura)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Funcionalidades](#-funcionalidades)
- [API Endpoints](#-api-endpoints)
- [Despliegue](#-despliegue)
- [Solución de Problemas](#-solución-de-problemas)

## 🚀 Tecnologías

### Core

- **Next.js** `15.5.5` - Framework Next.js con App Router
- **React** `19.1.0` - Librería UI
- **TypeScript** `5.x` - Tipado estático
- **Tailwind CSS** `4.x` - Framework CSS

### Autenticación y Estado

- **jose** `6.1.0` - Manejo de tokens JWT
- **Zod** `4.1.12` - Validación de esquemas y validación de formularios
- **TanStack Query** `5.90.5` - Manejo de estado del servidor y caché de solicitudes
- **Zustand** `5.0.8` - Gestión de estado global

### UI Components

- **Shadcn UI** - Componentes accesibles basados en shadcn/ui
- **Lucide React** `0.546.0` - Librería de íconos
- **TanStack Table** `8.21.3` - Tablas de datos

### Herramientas de Desarrollo

- **ESLint** `9.x` - Linter
- **Prettier** `3.6.2` - Formateador de código
- **pnpm** - Gestor de paquetes

## 📦 Requisitos Previos

- **Node.js**: >= 20.x
- **pnpm**: >= 8.x (recomendado) o npm/yarn

## 🔧 Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/isahecam/xdevelop-technical-assessment
cd xdevelop-technical-assessment
```

2. **Instalar dependencias**

```bash
pnpm install
```

## ⚙️ Configuración

### Variables de Entorno

Crear un archivo `.env.local` en la raíz del proyecto:

```env
# Clave secreta para JWT (mínimo 32 caracteres), usada para firmar y verificar tokens
SESSION_SECRET=tu-clave-secreta-super-segura-de-minimo-32-caracteres

# API Key de ReqRes (ReqRes necesita una API Key para obtener la lista e información de usuarios)
REQRES_API_KEY=tu-api-key-opcional
```

**Nota**: La clave `SESSION_SECRET` es obligatoria, puedes generar un valor de clave seguro usando openssl o cualquier generador de strings aleatorios.:

```bash
openssl rand -base64 32
```

## 🏃 Ejecución

### Modo Desarrollo

```bash
pnpm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

### Modo Producción

```bash
# Construir la aplicación
pnpm run build

# Iniciar servidor de producción
pnpm next start
```

### Otros Comandos

```bash
# Ejecutar linter
pnpm lint

# Formatear código
pnpm format
```

## 🏗️ Arquitectura

### Flujo de la Aplicación

![Flujo de la aplicación](https://322jhqgc0o.ucarecd.net/2fa9252e-6a27-45d2-beb6-04c814561008/flowauthentication.png)

### Flujo de Autenticación

![Flujo de autenticación](https://322jhqgc0o.ucarecd.net/26511e7d-2b8e-42f4-978f-aaddc3e4703c/flowapp.png)

### Arquitectura de Módulos

El proyecto sigue una arquitectura modular basada en screaming architecture, donde cada módulo de dominio (auth, books, comments, posts, users) contiene su propia lógica, componentes, servicios y tipos. La estructura principal es la siguiente:

```
src/
├── app/              # App Router de Next.js
│   ├── _actions/     # Server Actions
│   └── [routes]/     # Rutas de la aplicación
├── modules/          # Módulos de dominio
│   ├── auth/         # Autenticación
│   └── books/        # Gestión de libros
│   └── comments/     # Gestión de comentarios
│   └── posts/        # Gestión de publicaciones
│   └── users/        # Gestión de usuarios
├── lib/              # Utilidades compartidas
├── shared/           # Componentes UI reutilizables
└── styles/           # Estilos globales
```

## 📁 Estructura del Proyecto

```
xdevelop-technical-assessment/
├── public/                                  # Archivos estáticos
├── src/
│   ├── app/
│   │   ├── _actions/
│   │   │   └── auth.ts                     # Server actions de autenticación
│   │   ├── (dashboard)/                    # Grupo de rutas con layout compartido
│   │   │   ├── layout.tsx                  # Layout del dashboard
│   │   │   ├── books/
│   │   │   │   ├── page.tsx                # Lista de libros
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx            # Detalle de libro
│   │   │   ├── posts/
│   │   │   │   ├── page.tsx                # Lista de publicaciones
│   │   │   │   ├── [id]/
│   │   │   │   │   └── page.tsx            # Detalle de publicación
│   │   │   │   └── favorites/
│   │   │   │       └── page.tsx            # Publicaciones favoritas
│   │   │   └── users/
│   │   │       └── page.tsx                # Página protegida de usuarios
│   │   ├── favicon.ico                     # Icono de la aplicación
│   │   ├── layout.tsx                      # Layout raíz con providers
│   │   └── page.tsx                        # Página de login (home)
│   │
│   ├── modules/
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   │   ├── LoginForm.tsx           # Formulario de login
│   │   │   │   ├── LogoutButton.tsx        # Botón de cerrar sesión
│   │   │   │   └── SubmitButton.tsx        # Botón de envío de formulario
│   │   │   ├── schemas/
│   │   │   │   └── loginSchema.ts          # Validación con Zod
│   │   │   ├── services/
│   │   │   │   ├── authentication.ts       # Lógica de autenticación
│   │   │   │   ├── middleware.ts           # Protección de rutas
│   │   │   │   └── session.ts              # Gestión de sesiones
│   │   │   └── types/
│   │   │       ├── auth.types.ts           # Tipos de autenticación
│   │   │       └── session.types.ts        # Tipos de sesión
│   │   │
│   │   ├── books/
│   │   │   ├── components/
│   │   │   │   ├── BookCard.tsx            # Tarjeta de libro
│   │   │   │   ├── BookDetails.tsx         # Detalles de libro
│   │   │   │   ├── BookList.tsx            # Lista de libros
│   │   │   │   ├── BooksPagination.tsx     # Paginación de libros
│   │   │   │   └── Search.tsx              # Búsqueda de libros
│   │   │   ├── hooks/
│   │   │   │   └── useBook.ts              # Hook para gestión de libros
│   │   │   ├── services/
│   │   │   │   ├── getBookById.ts          # Obtener libro por ID
│   │   │   │   ├── getBooksPages.ts        # Obtener páginas de libros
│   │   │   │   └── getFilteredBooks.ts     # Obtener libros filtrados
│   │   │   ├── skeletons/
│   │   │   │   ├── BookCardSkeleton.tsx    # Skeleton de tarjeta
│   │   │   │   ├── BookDetailsSkeleton.tsx # Skeleton de detalles
│   │   │   │   └── BookListSkeleton.tsx    # Skeleton de lista
│   │   │   └── types/
│   │   │       └── book.types.ts           # Tipos de libros
│   │   │
│   │   ├── comments/
│   │   │   ├── components/
│   │   │   │   └── CommentCard.tsx         # Tarjeta de comentario
│   │   │   ├── hooks/
│   │   │   │   └── useComments.ts          # Hook para comentarios
│   │   │   ├── services/
│   │   │   │   └── getAllCommentsByPost.ts # Obtener comentarios por post
│   │   │   ├── skeletons/
│   │   │   │   └── CommentCardSkeleton.tsx # Skeleton de comentario
│   │   │   └── types/
│   │   │       └── comment.types.ts        # Tipos de comentarios
│   │   │
│   │   ├── posts/
│   │   │   ├── components/
│   │   │   │   ├── FavoritePostsCounter.tsx   # Contador de favoritos
│   │   │   │   ├── FavoritePostsList.tsx      # Lista de favoritos
│   │   │   │   ├── PostCard.tsx               # Tarjeta de publicación
│   │   │   │   ├── PostComments.tsx           # Comentarios de publicación
│   │   │   │   ├── PostDetails.tsx            # Detalles de publicación
│   │   │   │   ├── PostList.tsx               # Lista de publicaciones
│   │   │   │   └── skeletons/                 # Skeletons de posts
│   │   │   ├── hooks/
│   │   │   │   ├── usePost.ts              # Hook para post individual
│   │   │   │   └── usePosts.ts             # Hook para lista de posts
│   │   │   ├── services/
│   │   │   │   ├── getAllPosts.ts          # Obtener todas las publicaciones
│   │   │   │   └── getPostById.ts          # Obtener publicación por ID
│   │   │   ├── store/
│   │   │   │   └── favoritePosts.store.ts  # Store Zustand para favoritos
│   │   │   └── types/
│   │   │       └── post.types.ts           # Tipos de publicaciones
│   │   │
│   │   └── users/
│   │       ├── components/
│   │       │   ├── UserCard.tsx            # Tarjeta de usuario
│   │       │   ├── UserCardContainer.tsx   # Contenedor de tarjetas
│   │       │   ├── UserProfile.tsx         # Perfil de usuario
│   │       │   ├── skeletons/              # Skeletons de usuarios
│   │       │   └── users-table/            # Componentes de tabla
│   │       ├── hooks/
│   │       │   └── useUserProfile.ts       # Hook para perfil de usuario
│   │       ├── services/
│   │       │   ├── getAllUsers.ts          # Obtener lista de usuarios
│   │       │   ├── getUser.ts              # Obtener usuario por ID
│   │       │   └── getUserPublicInfo.ts    # Obtener info pública
│   │       └── types/                      # TypeScript types
│   │
│   ├── lib/
│   │   ├── generatePagination.tsx          # Utilidad para paginación
│   │   ├── getRandomRole.ts                # Asignación de roles
│   │   ├── jwt.ts                          # Utilidades JWT (encrypt/decrypt)
│   │   ├── utils.ts                        # Utilidades generales
│   │   └── react-query/
│   │       ├── client.ts                   # Cliente de React Query
│   │       └── provider.tsx                # Provider de React Query
│   │
│   ├── shared/
│   │   ├── Header.tsx                      # Componente de encabezado
│   │   ├── Navbar.tsx                      # Componente de barra de navegación
│   │   ├── NavLinks.tsx                    # Enlaces de navegación
│   │   └── ui/                             # Componentes UI (shadcn/ui)
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── index.ts
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── pagination.tsx
│   │       ├── select.tsx
│   │       ├── skeleton.tsx
│   │       └── table.tsx
│   │
│   ├── styles/
│   │   └── globals.css                     # Estilos globales con Tailwind
│   │
│   └── middleware.ts                       # Middleware de Next.js
│
├── .env                                     # Variables de entorno (no commitear)
├── .env.example                             # Ejemplo de variables de entorno
├── .gitignore                               # Archivos ignorados por Git
├── .prettierrc                              # Configuración de Prettier
├── components.json                          # Configuración de shadcn/ui
├── eslint.config.mjs                        # Configuración de ESLint
├── next.config.ts                           # Configuración de Next.js
├── next-env.d.ts                            # Tipos de Next.js
├── package.json                             # Dependencias del proyecto
├── pnpm-lock.yaml                           # Lock file de pnpm
├── postcss.config.mjs                       # Configuración de PostCSS
├── README.md                                # Documentación del proyecto
└── tsconfig.json                            # Configuración de TypeScript
```

## ✨ Funcionalidades

### Sistema de Autenticación

- Login con validación de formularios (Zod) implementado a través de Server Actions, usando la API externa ReqRes a traves de `https://reqres.in/api/login`
- Gestión de sesiones con JWT en cookies HTTP-only, asegurando que el token no sea accesible desde JavaScript, evitando vulnerabilidades XSS.
- Tokens con expiración de 7 días, renovados automáticamente en cada request.
- Renovación automática de sesión en cada request

### Protección de Rutas

El archivo `middleware.ts` almacenado en `src/modules/auth/services/middleware.ts` implementa la protección de rutas a nivel de edge, validando la sesión del usuario en cada navegación y redirigiendo según a la pagina `/` si el usuario no está autenticado.

- Middleware `src/middleware.ts` de Next.js que valida sesiones en cada navegación
- Rutas públicas: `/` (login)
- Rutas protegidas: `/users`, `/books`, `/posts`, `/books/[id]`, `/posts/[id]`, `/posts/favorites`
- Redirección automática según estado de autenticación, si el usuario no está autenticado se redirige a `/`.
- Si el usuario ya está autenticado y accede a la página de login, se le redirige automáticamente a `/users`.

### Gestión de Usuarios

- Tabla de usuarios con paginación usando TanStack Table y React Query para mostrar datos obtenidos de la API externa ReqRes.
- Asignación aleatoria de roles (Admin/Usuario), funcionalidad simulada para aplicar un rol a un usuario.
- Perfil de usuario autenticado.
- Carga de datos con React Query (caché y refetch)

### UI/UX

- Diseño responsive con Tailwind CSS
- Componentes accesibles (Shadcn UI)

## 🔌 API Endpoints

### API Externa: ReqRes (https://reqres.in)

#### Autenticación

```http
POST https://reqres.in/api/login
Content-Type: application/json

{
  "email": "george.bluth@reqres.in",
  "password": "cityslicka"
}

Response:
{
  "token": "QpwL5tke4Pnpja7X4"
}
```

#### Obtener Usuario

```http
GET https://reqres.in/api/users/{id}
x-api-key: [REQRES_API_KEY]

Response:
{
  "data": {
    "id": 1,
    "email": "george.bluth@reqres.in",
    "first_name": "George",
    "last_name": "Bluth",
    "avatar": "https://reqres.in/img/faces/1-image.jpg"
  }
}
```

#### Listar Usuarios

```http
GET https://reqres.in/api/users?per_page=12
x-api-key: [REQRES_API_KEY]

Response:
{
  "page": 1,
  "per_page": 12,
  "total": 12,
  "total_pages": 1,
  "data": [...]
}
```

### Credenciales de Prueba

Para probar la aplicación, utiliza estas credenciales de ReqRes:

| Email                    | Password |
| ------------------------ | -------- |
| `george.bluth@reqres.in` | `pistol` |

## 🚢 Despliegue

### Vercel

1. **Conectar repositorio a Vercel**
2. **Configurar variables de entorno**:
   - `SESSION_SECRET`: Mi clave secreta
   - `REQRES_API_KEY`: (opcional)
3. **Deploy automático** desde la rama principal

## 📝 Notas Técnicas

### Decisiones de Arquitectura

1. **Modularización por dominio**: Cada módulo es independiente y contiene su propia lógica, componentes y tipos.

Decidí utilizar esta arquitectura modular por dominio para mejorar la mantenibilidad y escalabilidad del proyecto. Cada módulo encapsula su propia lógica, componentes y tipos, lo que facilita la comprensión y el desarrollo independiente de cada parte de la aplicación, sin afectar otras áreas del código.

2. **Server Actions**: Utilicé estas operaciones en el lado del servidor, evitando la creación de API routes innecesarias, manteniendo la lógica del servidor más cerca de los componentes que la utilizan mejorando el rendimiento al reducir la latencia de las llamadas API.

3. **Middleware propio**: Protección de rutas a nivel de edge, ejecutándose antes de cada request.
   Para la protección de rutas, opté por crear un middleware de gestión de sesión aplicando y la gestión de las rutas públicas y privadas, validando la ruta visitada en cada navegación de manera eficiente y rápida. Al llamar a este middleware de validación en el middleware core de Next.js, se asegura que cada la validación de sesión se realice de forma separada y consistente en toda la aplicación sin duplicar lógica en cada módulo.

4. **JWT en cookies HTTP-only**: Mayor seguridad al no exponer tokens en localStorage.
   El uso de las cookies HTTP-only fue uno de los aspectos clave y que más valoré en la implementación de la gestión de sesión del usuario. Al crear una sesión utilice la librería `jose` para encriptar y desencriptar los tokens JWT, almacenándolos en cookies con la bandera HTTP-only activada. Configurando las cookies con una expiración de 7 días en simulación a la obtención del `Refresh Token` que por defecto el endpoint de "https://reqres.in" no proporciona, creando una función de renuevo automáticamente en cada request.

5. **React Query**: Gestión eficiente del estado del servidor con caché automático.
   Implementé React Query para manejar los estados de los datos obtenidos a partir de las APIs externas, mejorando el mantenimiento de los estados de carga, error y éxito, con una visualización de lo que está ocurriendo en cada request en el frontend. A partir de esta implementación se derivaron la creación de hooks personalizados para cada módulo, facilitando la reutilización y estandarización de las llamadas a las APIs.

### Tipos de Renderizado

- **Server-side Rendering (SSR)**: Páginas públicas como el login.
- **Client-side Rendering (CSR)**: Componentes interactivos y tablas de usuarios

En la implementación del uso de los tipos de renderizado, que Next.js ofrece, opté por utilizar Server-side Rendering (SSR) para las páginas públicas como el login, ya que estas no requieren interactividad inmediata y se benefician de una carga inicial rápida y optimizada para SEO. Por otro lado, para los componentes interactivos y las tablas de usuarios, utilicé Client-side Rendering (CSR) para aprovechar la capacidad de React de manejar estados dinámicos y actualizaciones en tiempo real, proporcionando una experiencia de usuario más fluida e interactiva. Cabe mencionar que en la combinación de estos tipos de renderizado en el modulo de `books` especialmente en la obtención de los datos utilicé una de las features de React que es el uso de Suspense una forma de manejar la carga de los datos de forma asíncrona y mejorar la experiencia del usuario al mostrar indicadores de carga mientras se obtienen los datos necesarios para renderizar los componentes cuando se obtenien datos del lado del servidor a traves del uso de `fetch` de Next.js.

**Desarrollado por**: Brandon Isahir Hernández Camacho
