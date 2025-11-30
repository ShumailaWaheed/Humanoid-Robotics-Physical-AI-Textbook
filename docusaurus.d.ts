declare module '@theme/Heading' {
  import type { ComponentType } from 'react';
  const Heading: ComponentType<any>;
  export default Heading;
}

declare module '@theme/Layout' {
  import type { ComponentType } from 'react';
  const Layout: ComponentType<any>;
  export default Layout;
}

// Add other @theme/* modules as needed
