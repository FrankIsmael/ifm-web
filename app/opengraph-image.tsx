import { ImageResponse } from 'next/server';
import { cvData } from '../lib/cv-data';
import { iconDataUri } from './og-icon-data';

export const runtime = 'edge';
export const alt = `${cvData.name} | ${cvData.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: '#f5f5f4',
          fontFamily: 'monospace, sans-serif',
        }}
      >
        {/* Brand icon */}
        <img
          src={iconDataUri}
          width={240}
          height={232}
          alt=""
          style={{
            marginBottom: 48,
            borderRadius: 48,
            boxShadow: '0 8px 40px rgba(0,0,0,0.25)',
          }}
        />

        {/* Full name */}
        <div
          style={{
            display: 'flex',
            fontSize: 52,
            fontWeight: 700,
            color: 'rgb(0, 0, 0)',
            letterSpacing: '-0.5px',
            marginBottom: 14,
          }}
        >
          {cvData.name}
        </div>
      </div>
    ),
    { ...size }
  );
}
