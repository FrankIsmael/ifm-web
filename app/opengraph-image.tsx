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
          background: '#1e2433',
          fontFamily: 'monospace, sans-serif',
        }}
      >
        {/* Terminal icon */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: 260,
            height: 220,
            borderRadius: 40,
            background: '#2d3650',
            padding: '36px 40px',
            marginBottom: 48,
            boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
          }}
        >
          {/* Prompt row: > IFM */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 28,
            }}
          >
            {/* Chevron */}
            <div
              style={{
                display: 'flex',
                color: '#ffffff',
                fontSize: 64,
                fontWeight: 700,
                lineHeight: 1,
                marginRight: 18,
              }}
            >
              {'>'}
            </div>
            {/* IFM text */}
            <div
              style={{
                display: 'flex',
                color: '#ffffff',
                fontSize: 64,
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: '-1px',
              }}
            >
              IFM
            </div>
          </div>

          {/* Cursor line */}
          <div
            style={{
              display: 'flex',
              width: 80,
              height: 10,
              borderRadius: 5,
              background: '#ffffff',
            }}
          />
        </div>

        {/* Full name */}
        <div
          style={{
            display: 'flex',
            fontSize: 52,
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.5px',
            marginBottom: 14,
          }}
        >
          {cvData.name}
        </div>

        {/* Tagline */}
        <div
          style={{
            display: 'flex',
            fontSize: 26,
            fontWeight: 400,
            color: '#8b9abf',
          }}
        >
          {cvData.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
