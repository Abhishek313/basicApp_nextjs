
  
  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
          <h1>Chai ka layout</h1>
          {children}
      </>
    );
  }