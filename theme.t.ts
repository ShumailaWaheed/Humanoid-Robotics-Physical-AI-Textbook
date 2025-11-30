// Only declare your custom theme components here, not Heading/Layout
declare module '@theme/CustomComponent' {
  import type { ComponentType } from 'react';
  const CustomComponent: ComponentType<any>;
  export default CustomComponent;
}

// Example: declare module '@theme/MyNavbar' {...}
