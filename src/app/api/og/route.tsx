import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    
    // Get query parameters with defaults
    const title = searchParams.get('title') || 'Adam Bardzák';
    const description = searchParams.get('description') || 'Webové aplikace a weby na míru';
    const type = searchParams.get('type') || 'website';
    
    // Font
    const fontData = await fetch(
      new URL('../../../assets/fonts/Inter-Bold.ttf', import.meta.url)
    ).then((res) => res.arrayBuffer());
    
    // Generate the OG image
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundColor: '#121212',
            backgroundImage: 'radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)',
            backgroundSize: '100px 100px',
            padding: '80px',
          }}
        >
          {/* Type badge */}
          {type === 'article' && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                color: '#3b82f6',
                borderRadius: '9999px',
                padding: '8px 16px',
                marginBottom: '32px',
                fontSize: 24,
                fontWeight: 'bold',
              }}
            >
              Článek
            </div>
          )}
          
          {/* Title */}
          <div
            style={{
              display: 'flex',
              fontSize: 64,
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '24px',
              lineHeight: 1.2,
              maxWidth: '80%',
            }}
          >
            {title}
          </div>
          
          {/* Description */}
          <div
            style={{
              display: 'flex',
              fontSize: 32,
              color: '#9ca3af',
              marginBottom: '48px',
              lineHeight: 1.4,
              maxWidth: '80%',
            }}
          >
            {description}
          </div>
          
          {/* Author/Website info */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: 'auto',
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                backgroundColor: '#3b82f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: 32,
                fontWeight: 'bold',
                marginRight: 16,
              }}
            >
              AB
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                Adam Bardzák
              </div>
              <div
                style={{
                  fontSize: 20,
                  color: '#9ca3af',
                }}
              >
                bardzak.online
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: fontData,
            style: 'normal',
            weight: 700,
          },
        ],
      }
    );
  } catch (e) {
    console.error(e);
    return new Response(`Failed to generate OG image`, {
      status: 500,
    });
  }
} 