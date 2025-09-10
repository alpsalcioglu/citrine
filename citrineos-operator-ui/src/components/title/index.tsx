// SPDX-FileCopyrightText: 2025 Contributors to the CitrineOS Project
//
// SPDX-License-Identifier: Apache-2.0

import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ColorModeContext } from '../../contexts/color-mode';
import config from '@util/config';

export interface LogoProps {
  collapsed?: boolean;
}

const LOGO_URL = config.logoUrl;

export const Logo: React.FC<LogoProps> = (props: LogoProps) => {
  const { collapsed = false } = props;
  const { mode } = useContext(ColorModeContext);
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <motion.img
        src={'/orge_logo.svg'}
        alt="Collapsed Logo"
        initial={{ opacity: 0 }}
        animate={{
          opacity: collapsed ? 1 : 0,
        }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: collapsed ? '36px' : '0px',
          height: '36px',
          objectFit: 'contain',
        }}
      />
      {!collapsed && (
        <img
          src={'/orge_logo.svg'}
          style={{
            width: '140px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            height: 'auto',
          }}
        />
      )}
    </div>
  );
};
