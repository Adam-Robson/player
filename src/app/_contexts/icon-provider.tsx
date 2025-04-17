'use client';

import { IconContext } from '@phosphor-icons/react';
import { ReactNode } from 'react';

type IconProviderProps = {
  children: ReactNode;
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
  color?: string;
  size?: string | number;
  mirrored?: boolean;
  style?: React.CSSProperties;
};

export function IconProvider({
  children,
  weight = 'bold',
  color = 'currentColor',
  size = 32,
  mirrored = false,
  style,
}: IconProviderProps) {
  return (
    <IconContext.Provider
      value={{
        weight,
        color,
        size,
        mirrored,
        style,
      }}
    >
      {children}
    </IconContext.Provider>
  );
}
