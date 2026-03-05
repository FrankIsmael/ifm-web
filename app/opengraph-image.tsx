import { ImageResponse } from 'next/server';
import { cvData } from '../lib/cv-data';

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
          background: 'linear-gradient(135deg, #1c1917 0%, #292524 60%, #1c1917 100%)',
          fontFamily: 'sans-serif',
          color: '#fafaf9',
        }}
      >
        {/* Initials badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 160,
            height: 160,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
            marginBottom: 40,
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: '-2px',
            color: '#fff',
          }}
        >
          IFM
        </div>

        {/* Full name */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            letterSpacing: '-1px',
            color: '#fafaf9',
            marginBottom: 16,
          }}
        >
          {cvData.name}
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 400,
            color: '#a8a29e',
            letterSpacing: '0.5px',
          }}
        >
          {cvData.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
