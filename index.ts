```bash
npx create-next-app@latest my-nextjs-app-1 --typescript
cd my-nextjs-app-1
```

```bash
# pages/api/hello.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Hello World' });
}
```

```tsx
// pages/index.tsx
import Head from 'next/head';

const Home = () => {
  return (
    <div>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="Next.js fullstack application with API routes" />
      </Head>
      <main>
        <h1>Hello World Next.js</h1>
        <p>This is a simple Next.js full-stack application with an API route.</p>
      </main>
    </div>
  );
};

export default Home;
```

```bash
# Run the application
npm run dev
```

Now, you can visit `http://localhost:3000` to see the Hello World page and `http://localhost:3000/api/hello` to see the API response.